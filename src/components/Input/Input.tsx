import { Component } from 'solid-js';
import './input.scss';

interface InputProps {
  displayName?: string;
  name: string;
  type: string;
  onInput: (value: string) => void;
}

const Input: Component<InputProps> = (props: InputProps) => {
  return (
    <div class="input">
      <div class="input__name">
        {props.displayName ? props.displayName : props.name}
      </div>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        onInput={(
          event: InputEvent & {
            currentTarget: HTMLInputElement;
            target: HTMLInputElement;
          },
        ): void => {
          props.onInput(event.currentTarget.value);
        }}
        class="input__field"
      />
    </div>
  );
};

export default Input;
