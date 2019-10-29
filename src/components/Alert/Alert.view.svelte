<script>
  import Alert from "./Alert";
  import Button from "../Button/Button";

  let open = false;
</script>

<style>
  div {
    margin: 16px;
  }
</style>

<Button onClick={e => (open = !open)} toggle>Trigger Alert</Button>
<div />
<Alert>
  {#if open}
    <p>
      <span lang="da">Hej</span>
      ,
      <span lang="en">hello</span>
      ,
      <span lang="it">ciao</span>
      ,
      <span lang="ja">こんにちは</span>
      ,
      <span lang="ko">안녕</span>
    </p>
  {/if}
</Alert>
