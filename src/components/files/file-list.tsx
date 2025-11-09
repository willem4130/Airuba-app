"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Trash2, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface File {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
  createdAt: Date;
}

interface FileListProps {
  files: File[];
}

export function FileList({ files }: FileListProps) {
  const router = useRouter();

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  const handleDelete = async (fileId: string) => {
    if (!confirm("Are you sure you want to delete this file?")) return;

    try {
      const response = await fetch(`/api/files/${fileId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        router.refresh();
      } else {
        alert("Failed to delete file");
      }
    } catch (error) {
      alert("Error deleting file");
    }
  };

  if (files.length === 0) {
    return (
      <Card className="p-12 text-center">
        <p className="text-muted-foreground">No files uploaded yet</p>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {files.map((file) => (
        <Card key={file.id} className="overflow-hidden">
          <div className="aspect-video relative bg-muted">
            {file.type.startsWith("image/") ? (
              <Image
                src={file.url}
                alt={file.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-4xl text-muted-foreground">
                  {file.type.split("/")[1]?.toUpperCase() || "FILE"}
                </p>
              </div>
            )}
          </div>

          <div className="p-4 space-y-2">
            <div>
              <p className="font-medium truncate">{file.name}</p>
              <p className="text-sm text-muted-foreground">
                {formatFileSize(file.size)}
              </p>
              <p className="text-xs text-muted-foreground">
                {new Date(file.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => window.open(file.url, "_blank")}
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                View
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const a = document.createElement("a");
                  a.href = file.url;
                  a.download = file.name;
                  a.click();
                }}
              >
                <Download className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDelete(file.id)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
