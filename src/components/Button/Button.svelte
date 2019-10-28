<script>
  // props
  export let className = "";
  export let toggle = false;
  export let onClick = () => {};

  // state
  let pressed = false;
  let root;
  let {
    onClick: _onClick,
    toggle: _toggle,
    tabindex,
    $$scope: _scope,
    $$slots: _slots,
    ...DOMProps
  } = $$props;

  function handleKeyup(event) {
    if (event.key === "Enter" || event.key === " ") {
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
  span {
    display: inline-block;
  }
</style>

<span
  bind:this={root}
  {...DOMProps}
  role="button"
  tabindex={tabindex != null ? tabindex : '0'}
  class={className}
  aria-pressed={toggle ? pressed : null}
  on:keyup={handleKeyup}
  on:click={handleClick}>
  <slot />
</span>
