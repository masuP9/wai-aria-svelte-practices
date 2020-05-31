<script>
  import { nanoid } from "nanoid";
  import { slide } from "svelte/transition";
  import { sineIn, sineOut } from "svelte/easing";

  // props
  export let transitionDuration = 150;
  export let headingLevel = 1;
  export let items = [];
  export let id = nanoid(5);

  // state
  let itemStatus = items.map(item => item.defaultOpen);

  // ref to DOM Node
  let headerElements = [];

  function focusNext(i) {
    const order = i + 1 >= headerElements.length ? 0 : i + 1;
    headerElements[order].focus();
  }

  function focusPrev(i) {
    const order = i === 0 ? headerElements.length - 1 : i - 1;
    headerElements[order].focus();
  }

  function updateStatus(i) {
    itemStatus = itemStatus.map((item, j) => {
      return i === j ? true : false;
    });
  }

  function handleClick(e, i) {
    updateStatus(i);
  }

  function handleKeyup(code, i) {
    switch (code) {
      case "Enter":
      case "Space":
        updateStatus(i);
        break;
      case "ArrowRight":
      case "ArrowDown":
        focusNext(i);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        focusPrev(i);
        break;
      case "Home":
        headerElements[0].focus();
        break;
      case "End":
        headerElements[headerElements.length - 1].focus();
        break;
      default:
        break;
    }
  }
</script>

<style>
  .wasp-Accordion__item {
    border: 1px solid #757575;
  }

  .wasp-Accordion__item:not(:first-child) {
    border-top-width: 0;
  }
  .wasp-Accordion__button {
    box-sizing: border-box;
    min-height: 44px;
    padding: 12px;
  }

  .wasp-Accordion__button[aria-disabled="true"] {
    background-color: #eeeeee;
  }

  .wasp-Accordion__panel:not(:empty) {
    padding: 12px;
  }
</style>

<div class="wasp-Accordion">
  {#each items as item, i}
    <div class="wasp-Accordion__item">
      <div
        class="wasp-Accordion__header"
        role="heading"
        aria-level={headingLevel}>
        <div
          class="wasp-Accordion__button"
          tabindex="0"
          role="button"
          aria-disabled={itemStatus[i]}
          aria-expanded={itemStatus[i]}
          aria-controls={`wasp-${id}-panel-${i}`}
          on:keyup={e => handleKeyup(e.code, i)}
          on:click={e => handleClick(e, i)}
          bind:this={headerElements[i]}>
          {@html item.header}
        </div>
      </div>
      <div
        class="wasp-Accordion__panel"
        aria-hidden={!itemStatus[i]}
        id={`wasp-${id}-panel-${i}`}>
        {#if itemStatus[i]}
          <div
            in:slide|local={{ duration: transitionDuration, easing: sineIn }}
            out:slide|local={{ duration: transitionDuration, easing: sineOut }}>
            {@html item.panel}
          </div>
        {/if}
      </div>
    </div>
  {/each}
</div>
