"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

const Modal = ({ children }) => {
  const movieModal = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!movieModal.current?.open) {
      movieModal.current.showModal();
    }
  }, []);
  const onModalHide = () => {
    router.back();
  };
  return createPortal(
    <dialog
      onClose={onModalHide}
      ref={movieModal}
      className="shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md bg-black dark:bg-opacity-95 dark:text-gray-100"
    >
      <span onClick={onModalHide} className="flex justify-end cursor-pointer ">
        <IoMdClose className="text-4xl  text-red-600 " />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-content")
  );
};

export default Modal;
