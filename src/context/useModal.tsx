import { createSignal } from 'solid-js';

export const useModal = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    openModal,
    closeModal,
  };
};