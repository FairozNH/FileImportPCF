// IControlEvent.ts
type PowerFxFileType = {
  contentBytes: string,
  name: string
}

export interface IControlEvent {
  event: 'None' | 'Completed' | 'Error' | 'ImportedFile'
  errorMessage?: string;
  file?: PowerFxFileType;
}