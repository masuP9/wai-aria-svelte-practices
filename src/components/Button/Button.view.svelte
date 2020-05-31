<script>
  import Button from "./Button";

  export let buttonText = "button";
  const { buttonText: text } = $$props;
</script>

<Button {...$$restProps}>{buttonText}</Button>
