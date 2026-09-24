import * as React from "react";
import { Upload, X, FileIcon } from "lucide-react";
import { cn } from "../../lib/utils";

export interface FileUploadProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onDrop"> {
  accept?: string;
  multiple?: boolean;
  onFilesSelected?: (files: File[]) => void;
  text?: string;
  subText?: string;
  disabled?: boolean;
}

const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      accept,
      multiple = false,
      onFilesSelected,
      text = "Drag and drop your file here or",
      subText = "Browse files",
      disabled = false,
      className,
      ...props
    },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);
    const [previews, setPreviews] = React.useState<Record<string, string>>({});

    const handleFiles = (fileList: FileList | null) => {
      if (!fileList || fileList.length === 0 || disabled) return;
      const files = multiple ? Array.from(fileList) : [fileList[0]];

      files.forEach((file) => {
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreviews((prev) => ({
              ...prev,
              [file.name]: reader.result as string,
            }));
          };
          reader.readAsDataURL(file);
        }
      });

      setSelectedFiles(files);
      onFilesSelected?.(files);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      if (!disabled) setIsDragging(true);
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragging(false);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragging(false);
      if (disabled) return;
      handleFiles(event.dataTransfer.files);
    };

    const openFileDialog = () => {
      if (!disabled) inputRef.current?.click();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openFileDialog();
      }
    };

    const removeFile = (fileName: string) => {
      setSelectedFiles((prev) => prev.filter((file) => file.name !== fileName));
      setPreviews((prev) => {
        const next = { ...prev };
        delete next[fileName];
        return next;
      });
    };

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <div
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-disabled={disabled}
          onClick={openFileDialog}
          onKeyDown={handleKeyDown}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "flex cursor-pointer flex-col items-center rounded-lg border-2 border-dashed p-8 text-center outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            isDragging ? "border-primary bg-accent" : "border-border",
            disabled && "cursor-not-allowed opacity-50",
          )}
        >
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            accept={accept}
            multiple={multiple}
            disabled={disabled}
            onChange={(event) => handleFiles(event.target.files)}
          />
          <Upload className="mb-4 h-10 w-10 text-muted-foreground" />
          <span className="mb-2 text-sm text-muted-foreground">{text}</span>
          <span className="text-sm font-medium text-foreground">{subText}</span>
        </div>

        {selectedFiles.length > 0 && (
          <div className="mt-4 flex flex-col gap-2">
            {selectedFiles.map((file) => (
              <div
                key={file.name}
                className="flex items-center justify-between rounded-lg border border-border p-4"
              >
                <div className="flex items-center gap-3">
                  {previews[file.name] ? (
                    <img
                      src={previews[file.name]}
                      alt={file.name}
                      className="h-12 w-12 rounded object-cover"
                    />
                  ) : (
                    <FileIcon className="h-8 w-8 text-muted-foreground" />
                  )}
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {file.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {(file.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(file.name)}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={`Remove ${file.name}`}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
);
FileUpload.displayName = "FileUpload";

export { FileUpload };
