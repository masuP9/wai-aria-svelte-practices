<script>
  import Button from "./Button";

  export let buttonText = "button";
  const { buttonText: text, ...rest } = $$props;
</script>

<Button {...rest}>{buttonText}</Button>
