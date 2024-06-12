export const FileSchema = {
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