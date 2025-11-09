import { redirect } from "next/navigation";
import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { FileUploadSection } from "@/components/files/file-upload-section";
import { FileList } from "@/components/files/file-list";

export default async function FilesPage() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  // Fetch user's files
  const files = await db.file.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="container mx-auto max-w-6xl py-8 px-4">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">File Manager</h1>
          <p className="text-muted-foreground mt-2">
            Upload and manage your files
          </p>
        </div>

        <FileUploadSection />

        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Files</h2>
          <FileList files={files} />
        </div>
      </div>
    </div>
  );
}
