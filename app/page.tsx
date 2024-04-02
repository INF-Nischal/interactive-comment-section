"use client";

import AddComment from "@/components/comments/AddComment";
import CommentWithReplies from "@/components/comments/CommentWithReplies";
import DeleteModal from "@/components/modals/DeleteModal";
import { ModalProvider } from "@/components/modals/DeleteModal";

export default function Home() {
  return (
    <ModalProvider>
      <main className="min-h-screen flex flex-col items-center gap-4 bg-very-light-gray pb-2">
        <div className="w-[100%] lg:w-[50%] flex flex-col gap-4 py-4 px-4">
          <div className="w-full flex flex-col items-center">
            <CommentWithReplies />
          </div>
          <div className="w-full">
            <AddComment />
          </div>
        </div>
        <DeleteModal />
      </main>
    </ModalProvider>
  );
}
