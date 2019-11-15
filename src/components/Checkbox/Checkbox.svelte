<script>
  import { afterUpdate } from "svelte";

  // props
  export let onChange = () => {};

  let {
    onChange: _onChange,
    tabindex,
    ["aria-checked"]: checked,
    $$scope: _scope,
    $$slots: _slots,
    ...DOMProps
  } = $$props;

  function changeChecked(current) {
    switch (String(current).toLowerCase()) {
      case "true":
        return "false";
      case "false":
        return "true";
      case "mixed":
        return "true";
      default:
        break;
    }
  }

  function handleClick(e) {
    debugger;
    checked = changeChecked(checked);
    onChange(e);
  }

  function handleKeyup(e) {
    if (e.code === "Enter" || e.code === "Space") {
      checked = changeChecked(checked);
    }
    onChange(e);
  }
</script>

<style>
  [role="checkbox"] {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  [role="checkbox"]:focus {
    outline: none;
  }

  [role="checkbox"] .wasp-Checkbox__mark {
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-right: 4px;
    border: 1px solid #333;
    border-radius: 2px;
  }

  [role="checkbox"]:focus .wasp-Checkbox__mark {
    outline: solid 2px #1f11ff;
    outline-offset: 1px;
  }

  [aria-checked="true"] .wasp-Checkbox__mark,
  [aria-checked="mixed"] .wasp-Checkbox__mark {
    background-color: #1f11ff;
    border-color: #1f11ff;
  }

  [aria-checked="true"] .wasp-Checkbox__mark::before {
    content: "";
    position: absolute;
    display: inline-block;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    width: 0.25em;
    height: 0.5em;
    transform: rotate(37.5deg) translate(80%, -20%);
  }
</style>

<span
  {...DOMProps}
  class="wasp-Checkbox"
  role="checkbox"
  tabindex={tabindex != null ? tabindex : '0'}
  aria-checked={checked != null ? checked : false}
  on:keyup={handleKeyup}
  on:click={handleClick}>
  <span class="wasp-Checkbox__mark" />
  <slot />
</span>
