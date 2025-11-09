"use client";

import { UploadButton, UploadDropzone } from "@/lib/uploadthing/client";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function FileUploadSection() {
  const router = useRouter();
  const [uploadMode, setUploadMode] = useState<"button" | "dropzone">("button");

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold">Upload Files</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setUploadMode("button")}
              className={`px-3 py-1 text-sm rounded ${
                uploadMode === "button"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              Button
            </button>
            <button
              onClick={() => setUploadMode("dropzone")}
              className={`px-3 py-1 text-sm rounded ${
                uploadMode === "dropzone"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              Dropzone
            </button>
          </div>
        </div>

        {uploadMode === "button" ? (
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Single Image Upload</h4>
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  console.log("Files: ", res);
                  alert("Upload Completed!");
                  router.refresh();
                }}
                onUploadError={(error: Error) => {
                  alert(`ERROR! ${error.message}`);
                }}
              />
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Multiple Files</h4>
              <UploadButton
                endpoint="multipleFileUploader"
                onClientUploadComplete={(res) => {
                  console.log("Files: ", res);
                  alert("Upload Completed!");
                  router.refresh();
                }}
                onUploadError={(error: Error) => {
                  alert(`ERROR! ${error.message}`);
                }}
              />
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Profile Picture</h4>
              <UploadButton
                endpoint="profilePictureUploader"
                onClientUploadComplete={(res) => {
                  console.log("Files: ", res);
                  alert("Profile Picture Uploaded!");
                  router.refresh();
                }}
                onUploadError={(error: Error) => {
                  alert(`ERROR! ${error.message}`);
                }}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Drag and Drop Upload</h4>
              <UploadDropzone
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  console.log("Files: ", res);
                  alert("Upload Completed!");
                  router.refresh();
                }}
                onUploadError={(error: Error) => {
                  alert(`ERROR! ${error.message}`);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
