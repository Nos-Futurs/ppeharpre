import {
    Accessor,
    JSX,
    Setter,
    createContext,
    createSignal,
    useContext,
} from "solid-js";
import { Modal } from "../components/Modal/Modal";

interface ModalProviderProps {
  children: JSX.Element;
}

type TypeModalContext = [Accessor<boolean>, Setter<boolean>];
const [isModalOpen, setIsModalOpen] = createSignal(true);
export const ModalContext = createContext<TypeModalContext>([
  isModalOpen,
  setIsModalOpen,
]);

export function useModalContext() {
  return useContext(ModalContext);
}

export function ModalProvider(props: ModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = createSignal(true);
  const children = props.children;
  return (
    <ModalContext.Provider value={[isModalOpen, setIsModalOpen]}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
}
