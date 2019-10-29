<script>
  // props
  let { $$scope: _scope, $$slots: _slots, ...DOMProps } = $$props;
</script>

<style>
  :not(:empty) {
    padding: 12px;
    border: 3px solid firebrick;
    border-radius: 6px;
  }
</style>

<div role="alert" aria-live="assertive" {...DOMProps}>
  <slot />
</div>
