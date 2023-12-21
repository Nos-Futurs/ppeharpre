import { Component, Show } from 'solid-js';
import { useModalContext } from '../../context/modalContext';
import ModalSideBar from './ModalSideBar';

export const Modal: Component = () => {
  const [isModalOpen] = useModalContext();

  return (
    <Show when={isModalOpen()} fallback={<></>}>
      <ModalSideBar />
    </Show>
  );
};
