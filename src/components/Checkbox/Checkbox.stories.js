import CheckboxView from "./Checkbox.view.svelte";
import CheckboxMixedView from "./Checkbox.view.mixed.svelte";

export default { title: "Checkbox" };

export const overview = () => ({
  Component: CheckboxView,
  props: {}
});

export const mixed = () => ({
  Component: CheckboxMixedView,
  props: {}
});
