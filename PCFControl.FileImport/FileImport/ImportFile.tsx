import * as React from 'react';
import { DefaultButton, IIconProps } from '@fluentui/react';
import { IControlEvent } from './IControlEvent';
import { useState, createRef } from 'react';

export interface IImportProps {
  buttonLabel: string | null;
  onEvent: (event: IControlEvent) => void;
}

const upload: IIconProps = { iconName: 'Upload' };
const uploaded: IIconProps = { iconName: 'Accept' };

export const ImportFile: React.FC<IImportProps> = (props: IImportProps) => {
  const [imported, setImported] = useState<boolean>(false);
  const importFileRef = createRef<HTMLInputElement>();

  const readFile = (file: File) => {
    return new Promise((resolve, reject) => {
      //create file reader
      let reader = new FileReader();

      reader.onerror = () => {
        console.log(`Something Went wrong while file reading : ${reject}`);
      }

      reader.onloadend = () => {
        resolve(reader.result);
      }

      //read file
      reader.readAsDataURL(file);
    });
  };

  const getAsByteArray = async (file: File) => {
    let fileContent: string | null = (await readFile(file) as string | null);
    return fileContent?.split(',')?.[1];
  }

  const onFileChange = async (event: any) => {
    let fileSelected: File = event.target.files[0];
    let fileContent = await getAsByteArray(fileSelected);

    props.onEvent({
      event: "ImportedFile", errorMessage: "", file: {
        contentBytes: fileContent ?? "",
        name: fileSelected?.name ?? ""
      }
    })

    setImported(true);
  };

  return (
    <div>
      <DefaultButton
        onClick={() => importFileRef.current?.click()}
        iconProps={imported ? uploaded : upload}>{
          imported ? "File Imported" : (props.buttonLabel ? props.buttonLabel : "Import File")
        }</DefaultButton>
      <input ref={importFileRef} type="file" onChange={onFileChange} key={Math.random().toString(16)} style={{ display: 'none' }} />
    </div>);
}
