<script>
  import Checkbox from "./Checkbox";
</script>

<h1 id="title">Beer</h1>
<div role="group" aria-describedby="title">
  <ul>
    <li>
      <label>
        <Checkbox>
          <abbr title="Indian Pale Ale">IPA</abbr>
        </Checkbox>

      </label>
    </li>
    <li>
      <label>
        <Checkbox checked>Pale Ale</Checkbox>
      </label>
    </li>
    <li>
      <label>
        <Checkbox aria-checked="true">Stout</Checkbox>
      </label>
    </li>
  </ul>
</div>
