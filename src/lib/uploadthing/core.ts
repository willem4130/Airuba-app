import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@/server/auth";
import { db } from "@/server/db";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const session = await auth();

      // If you throw, the user will not be able to upload
      if (!session?.user) throw new UploadThingError("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);

      // Save file metadata to database
      await db.file.create({
        data: {
          userId: metadata.userId,
          name: file.name,
          url: file.url,
          key: file.key,
          size: file.size,
          type: file.type,
        },
      });

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId, url: file.url };
    }),

  // Multiple file upload endpoint
  multipleFileUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 10,
    },
    pdf: {
      maxFileSize: "8MB",
      maxFileCount: 5,
    },
  })
    .middleware(async ({ req }) => {
      const session = await auth();
      if (!session?.user) throw new UploadThingError("Unauthorized");
      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);

      await db.file.create({
        data: {
          userId: metadata.userId,
          name: file.name,
          url: file.url,
          key: file.key,
          size: file.size,
          type: file.type,
        },
      });

      return { uploadedBy: metadata.userId, url: file.url };
    }),

  // Profile picture uploader
  profilePictureUploader: f({
    image: {
      maxFileSize: "2MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
      const session = await auth();
      if (!session?.user) throw new UploadThingError("Unauthorized");
      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Profile picture uploaded for userId:", metadata.userId);

      await db.file.create({
        data: {
          userId: metadata.userId,
          name: file.name,
          url: file.url,
          key: file.key,
          size: file.size,
          type: file.type,
        },
      });

      return { uploadedBy: metadata.userId, url: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
