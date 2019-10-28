import Button from "./Button.view.svelte";

export default { title: "Button" };

function onClick(event) {
  alert(event.type);
}

export const overview = () => ({
  Component: Button,
  props: {
    onClick,
    className: "Button"
  }
});

export const toggle = () => ({
  Component: Button,
  props: {
    toggle: true,
    onClick,
    className: "toggleButton"
  }
});
