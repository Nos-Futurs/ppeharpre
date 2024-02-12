import { Component } from 'solid-js';
import './buttons.scss';

interface SubmitButtonProps {
  name: string;
  onClick: () => void;
}

const SubmitButton: Component<SubmitButtonProps> = (props: SubmitButtonProps) => {
  return (
    <button
      class="submitButton"
      onClick={(): void => {
        props.onClick();
      }}
    >
      {props.name}
    </button>
  );
};

export default SubmitButton;
