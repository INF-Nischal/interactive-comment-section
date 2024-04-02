"use client";

import { useState, createContext, useContext } from "react";
import { ModalContextType } from "@/types/modalTypes";

export const ModalContext = createContext<ModalContextType>({
  showModal: false,
  handleModal: () => {},
});

export const ModalProvider = ({ children }: { children: any }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const contextValue: ModalContextType = {
    showModal,
    handleModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

const DeleteModal = () => {
  const { showModal, handleModal } = useContext(ModalContext);

  return (
    showModal && (
      <div className="fixed top-0 h-screen w-screen flex justify-center items-center">
        <div className="w-[360px] bg-white px-6 py-6 flex flex-col gap-2 rounded-lg">
          <h1 className="text-xl">Delete Comment</h1>
          <p>
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
          <div className="flex justify-between">
            <button className="border-2 px-4 py-1.5" onClick={handleModal}>
              No, Cancel
            </button>
            <button className="border-2 px-4 py-1.5">Yes, Delete</button>
          </div>
        </div>
      </div>
    )
  );
};

export default DeleteModal;
