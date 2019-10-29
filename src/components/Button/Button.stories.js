import Button from "./Button.view.svelte";

export default { title: "Button" };

export const overview = () => ({
  Component: Button,
  props: {
    onClick: e => alert(event.type),
    className: "Button"
  }
});

export const toggle = () => ({
  Component: Button,
  props: {
    toggle: true,
    buttonText: "toggle Button"
  }
});
