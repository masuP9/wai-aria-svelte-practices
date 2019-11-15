<script>
  import Checkbox from "./Checkbox";
  import { afterUpdate } from "svelte";

  let checked = {
    ipa: true,
    paleAle: false,
    Stout: false
  };

  $: checkedAll = (() => {
    const state = Object.values(checked).filter(check => check);

    if (state === undefined) {
      return "false";
    } else if (state.length < Object.values(checked).length) {
      return "mixed";
    }
    return "true";
  })();
</script>

<fieldset>
  <legend>Beer</legend>
  <Checkbox aria-checked={checkedAll}>All type Beer</Checkbox>
  <div role="group" aria-describedby="title">
    <ul>
      <li>
        <label>
          <Checkbox
            id="ipa"
            bind:checked={checked.ipa}
            aria-checked={String(checked.ipa)}>
            <abbr title="Indian Pale Ale">IPA</abbr>
          </Checkbox>

        </label>
      </li>
      <li>
        <label>
          <Checkbox
            id="pale-ale"
            bind:checked={checked.paleAle}
            aria-checked={String(checked.paleAle)}>
            Pale Ale
          </Checkbox>
        </label>
      </li>
      <li>
        <label>
          <Checkbox
            id="stout"
            bind:checked={checked.stout}
            aria-checked={String(checked.stout)}>
            Stout
          </Checkbox>
        </label>
      </li>
    </ul>
  </div>
</fieldset>
