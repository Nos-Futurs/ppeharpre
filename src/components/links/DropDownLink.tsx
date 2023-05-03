import { A } from "@solidjs/router";
import { Accessor, For, Setter } from "solid-js";
import "./links.scss";
interface section {
  name: string;
  path: string;
  onClick: () => void;
  color?: string;
}
interface dropDownLinkProps {
  name: string;
  isModal: boolean;
  sections: section[];
  selected?: boolean;
  popup: Accessor<boolean>;
  setPopup: Setter<boolean>;
}

const DropDownLink = (props: dropDownLinkProps) => {
  return (
    <>
      <button
        name={props.name}
        class={props.isModal ?"sideLink": "menuLink"}
        style={{
          "font-weight": `${
            props.isModal ? "bold" : (props.selected ? "800" : "500")
          }`,
        }}
        onClick={() => {
          props.setPopup(!props.popup());
        }}
      >{props.name}</button>
      {props.popup() && (
        <For each={props.sections} fallback={<div>Loading...</div>}>
          {(item) => (
            <A
              class="dropDownLink"
              href={item.path}
              onclick={item.onClick}
              style={{ color: `${item.color ? item.color : "white"}` }}
            >
              {item.name}
            </A>
          )}
        </For>
      )}
    </>
  );
};

export default DropDownLink;
