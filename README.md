📂 ImportFile PCF Control
📖 Overview

ImportFile is a custom Power Apps Component Framework (PCF) control built with React and Fluent UI.
It provides an easy-to-use file upload button for Canvas Apps and Custom Pages.

When a file is uploaded, the control:

Reads the file using FileReader

Converts it into a Base64 byte array

Returns the file metadata (name + contentBytes) back to the app

This makes it simple to capture files and pass them to Power Automate or Dataverse for further processing.

⚡ Properties
Input Properties
Property Name	Type	Usage	Description
ImportLabel	SingleLine.Text	Input	Label for the button (e.g., "Upload File"). Defaults to Import File if not set.
FileSchema	SingleLine.Text	Input	Hidden schema definition used internally for Canvas/Power Apps integration.
Output Properties
Property Name	Type	Usage	Description
errorMessage	Multiple	Output	Any error messages related to file reading.
file	Object	Output	Returns uploaded file details (see schema below).

📜 File Schema

The control returns a file object in the following schema (same as Power Automate file input):
```
{
  "description": "Please select file or image",
  "title": "File",
  "type": "object",
  "properties": {
    "contentBytes": {
      "type": "string",
      "format": "byte"
    },
    "name": {
      "type": "string"
    }
  },
  "x-ms-content-hint": "FILE",
  "x-ms-dynamically-added": true
}
```
Example returned object:
```
{
  "contentBytes": "JVBERi0xLjQKJcTl8uXr... (Base64)",
  "name": "Invoice.pdf"
}
```

🎮 Usage
1. Add the control to a Canvas App / Custom Page
    - Insert the PCF control from the list of components.
    - Set the ImportLabel property (optional).
2. Capture the file object
When a user uploads a file, the file output property will contain:
    - name → File name (e.g., invoice.pdf)
    - contentBytes → File content as Base64
3. Send to Power Automate You can pass the file object directly to a Power Automate flow that expects a file input.

🔥 With this control, uploading files into Canvas Apps / Custom Pages becomes seamless and Power Automate-ready.

