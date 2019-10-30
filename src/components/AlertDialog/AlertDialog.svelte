<script>
  import "wicg-inert";
  import noScroll from "no-scroll";
  import createFocusTrap from "focus-trap";
  import { fade } from "svelte/transition";

  // props
  export let open = false;
  export let label;
  export let labelledBy;
  export let describedBy;
  export let initialFocus;
  export let inertElement;
  export let duration = 150;
  export let requestClose = () => {};
  export let onClose = () => {};
  export let onOpen = () => {};

  // state
  let bodyRef;
  let focusTrap;

  function handleBodyKeyup(e) {
    if (e.code === "Escape") {
      requestClose();
    }
  }

  function handleBackdropClick() {
    requestClose();
  }

  function handleIntroEnd() {
    const focusTrapOption = {
      fallbackFocus: bodyRef,
      initialFocus: initialFocus instanceof HTMLElement ? initialFocus : null,
      clickOutsideDeactivates: true
    };
    focusTrap = createFocusTrap(bodyRef, focusTrapOption);
    focusTrap.activate();
    noScroll.on();

    if (inertElement instanceof HTMLElement) {
      if (inertElement.contains(bodyRef)) {
        console.error(`inertElement ${inertElement} contains AlertDialog`);
      } else {
        inertElement.inert = true;
      }
    }

    onOpen();
  }

  function handleOutroEnd() {
    if (inertElement instanceof HTMLElement && inertElement.inert) {
      inertElement.inert = false;
    }

    noScroll.off();
    focusTrap.deactivate();
    focusTrap = undefined;

    onClose();
  }
</script>

<style>
  .wasp-AlertDialog {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wasp-AlertDialog__body {
    display: inline-block;
    position: relative;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0;
    width: auto;
    height: auto;
    max-height: 80vh;
    overflow-y: scroll;
    padding: 12px;
    background-color: #fff;
  }

  .wasp-AlertDialog__backdrop {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>

<svelte:body on:keyup={handleBodyKeyup} />

{#if open}
  <div
    class="wasp-AlertDialog"
    transition:fade={{ duration }}
    on:introend={handleIntroEnd}
    on:outroend={handleOutroEnd}>
    <div class="wasp-AlertDialog__backdrop" on:click={handleBackdropClick} />
    <div
      class="wasp-AlertDialog__body"
      role="alertdialog"
      aria-modal="true"
      aria-label={label}
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
      tabindex="-1"
      bind:this={bodyRef}>
      <slot />
    </div>
  </div>
{/if}
