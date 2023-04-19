import { createEffect } from "solid-js";
import { Portal } from "solid-js/web";
import { useModalContext } from "../../context/modalContext";
import ModalSideBar from "./ModalSideBar";

export const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useModalContext();
  const portalDiv: HTMLElement | null = document.getElementById("portal");
  if (!portalDiv) {
    return <></>;
  }
  createEffect(() => {
    if (isModalOpen()) {
      return (
        <Portal mount={portalDiv}>
          <ModalSideBar />
        </Portal>
      );
    }
  });
};
