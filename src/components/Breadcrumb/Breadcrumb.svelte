<script>
  // props
  export let items;
  export let label = "BreadCrumb";
</script>

<style>
  .wasp-BreadCrumb__list {
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }

  .wasp-BreadCrumb__item {
    display: inline;
  }

  .wasp-BreadCrumb__item:not(:last-child)::after {
    content: ">";
    margin-right: 4px;
  }
</style>

{#if items != null}
  <nav aria-label={label} class="wasp-BreadCrumb">
    <ol class="wasp-BreadCrumb__list">
      {#each items as item, i}
        <li class="wasp-BreadCrumb__item">
          <a
            href={item.href}
            aria-current={items.length - 1 === i ? 'page' : null}>
            {item.text}
          </a>
        </li>
      {/each}
    </ol>
  </nav>
{/if}
