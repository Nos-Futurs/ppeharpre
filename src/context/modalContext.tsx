import {
  Accessor,
  JSX,
  Setter,
  createContext,
  createSignal,
  useContext,
} from "solid-js";

interface ModalProviderProps {
  children: JSX.Element;
}

type TypeModalContext = [Accessor<boolean>, Setter<boolean>];
const [isModalOpen, setIsModalOpen] = createSignal(false);
export const ModalContext = createContext<TypeModalContext>([
  isModalOpen,
  setIsModalOpen,
]);

export function useModalContext() {
  return useContext(ModalContext);
}

export function ModalProvider(props: ModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = createSignal(false);
  const children = props.children;
  return (
    <ModalContext.Provider value={[isModalOpen, setIsModalOpen]}>
      {children}
    </ModalContext.Provider>
  );
}
