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
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto max-w-6xl py-8 px-4">
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg p-6 border">
            <h1 className="text-3xl font-bold">Document Manager</h1>
            <p className="text-muted-foreground mt-2">
              Securely store and organize all your relocation documents in one
              place
            </p>
            <div className="mt-4 text-sm text-gray-600">
              <p>
                📄 Upload important documents like passport copies, visa
                applications, employment contracts
              </p>
              <p>🔒 All files are securely stored and encrypted</p>
              <p>📱 Access your documents anytime, anywhere</p>
            </div>
          </div>

          <FileUploadSection />

          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Documents</h2>
            <FileList files={files} />
          </div>
        </div>
      </div>
    </div>
  );
}
