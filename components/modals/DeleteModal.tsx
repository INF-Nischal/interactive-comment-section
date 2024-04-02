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
    <>
      {showModal && (
        <div>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"></div>
          <div className="fixed w-[90%] md:w-[25%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-6 flex flex-col gap-6 rounded-lg z-50">
            <h1 className="text-xl font-bold">Delete Comment</h1>
            <p>
              Are you sure you want to delete this comment? This will remove the
              comment and can&#39;t be undone.
            </p>
            <div className="flex justify-between">
              <button
                className="bg-grayish-blue uppercase rounded-md text-white px-4 py-1.5"
                onClick={handleModal}
              >
                No, Cancel
              </button>
              <button className="bg-soft-red uppercase rounded-md text-white px-4 py-1.5">
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
