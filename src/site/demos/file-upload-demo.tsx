import { FileUpload } from "../../components/ui/file-upload";

export default function FileUploadDemo() {
  return (
    <FileUpload
      accept="image/*"
      multiple
      onFilesSelected={(files) => console.log("Selected files:", files)}
    />
  );
}
