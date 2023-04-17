import "./input.scss";

interface InputProps {
  displayName?: string;
  name: string;
  type: string;
  onInput: (value: string) => void;
}

const Input = ({ onInput, displayName, name, type }: InputProps) => {
  return (
    <div class="input">
      <div class="input__name">{displayName ? displayName : name}</div>
      <input
        type={type}
        name={name}
        id={name}
        onInput={(event) => {
          onInput(event.currentTarget.value);
        }}
        class="input__field"
      />
    </div>
  );
};

export default Input;
