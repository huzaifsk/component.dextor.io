import React from "react";
import FileUpload from "./FileUpload";

function FileUploadExample() {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-8">
      <div className="w-full max-w-md">
        <h3 className="text-lg font-medium text-gray-700 mb-4">File Upload</h3>
        <FileUpload
          text="Drop files here or click to browse"
          subText="Upload your files"
          accept="*"
        />
      </div>

      <div className="w-full max-w-md">
        <h3 className="text-lg font-medium text-gray-700 mb-4">
          File Upload with Custom Text
        </h3>
        <FileUpload
          text="Drop your files here or click to browse"
          subText="Supports images, documents and more"
          accept="*"
        />
      </div>

      <div className="w-full max-w-md">
        <h3 className="text-lg font-medium text-gray-700 mb-4">
          Image Upload Only
        </h3>
        <FileUpload
          accept="image/*"
          text="Drop your images here"
          subText="Supports JPG, PNG and GIF files"
        />
      </div>
    </div>
  );
}

export default FileUploadExample;
