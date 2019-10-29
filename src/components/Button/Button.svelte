<script>
  // props
  export let className = "";
  export let toggle = false;
  export let onClick = () => {};

  // state
  let pressed = false;
  let {
    onClick: _onClick,
    toggle: _toggle,
    tabindex,
    $$scope: _scope,
    $$slots: _slots,
    ...DOMProps
  } = $$props;

  function handleKeyup(event) {
    if (event.code === "Enter" || event.code === "Space") {
      if (toggle) {
        pressed = !pressed;
      }
      onClick(event);
    }
  }

  function handleClick(event) {
    if (toggle) {
      pressed = !pressed;
    }
    onClick(event);
  }
</script>

<style>
  .wasp-Button {
    display: inline-flex;
    border: 1px solid #757575;
    border-radius: 2px;
    padding: 8px 24px;
    min-height: 44px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
  }

  .wasp-Button:focus {
    outline-offset: 3px;
  }

  .wasp-Button[aria-pressed="false"] {
    box-shadow: 1px 1px 2px #757575;
  }

  .wasp-Button[aria-pressed="true"] {
    box-shadow: inset 1px 1px 2px #757575;
  }
</style>

<span
  {...DOMProps}
  role="button"
  tabindex={tabindex != null ? tabindex : '0'}
  class={`${className} wasp-Button`}
  aria-pressed={toggle ? pressed : null}
  on:keyup={handleKeyup}
  on:click={handleClick}>
  <slot />
</span>
