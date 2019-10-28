---
name: "Component"
description: "Generate Component"
message: "Please enter Component name."
root: "src/components"
output: "**/*"
ignore: []
---

# `{{ input }}/{{ input }}.svelte`

```html
<script>
  // props
  export let props;

  // state
  let state;
</script>
<style>
  span {
  }
</style>
<span></span>
```

# `{{ input }}/{{ input }}.view.svelte`

```html
<script>
  import {{ input }} from "./{{ input }}";
</script>

<{{ input }} {...$$props} />
```

# `{{ input }}/{{ input }}.stories.js`

```javascript
import {{ input }} from "./{{ input }}.view.svelte";

export default { title: "{{ input }}" };

export const overview = () => ({
  Component: {{ input }},
  props: {}
});
```
