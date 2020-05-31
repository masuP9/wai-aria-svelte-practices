<style>
  :not(:empty) {
    padding: 12px;
    border: 3px solid firebrick;
    border-radius: 6px;
  }
</style>

<div {...$$restProps} role="alert" aria-live="assertive">
  <slot />
</div>
