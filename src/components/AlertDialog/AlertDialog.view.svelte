<script>
  import Button from "../Button/Button";
  import AlertDialog from "./AlertDialog";

  // state
  let value =
    "From the middle of the day, when you work alone, you can hear the chorus of a cute woman. I rest my pen and listen. There is a silk mill at a distance from the boarding house. The female workers there crawl while working. One of them is a voice that stands out, and it gets ridiculous. A crane in a group of chickens. I think it ’s a good voice. I even wanted to thank you. I even wanted to see the Lord of the voices at the factory.";
  let open = false;
  let rootElementRef;
  let initialFocusRef;

  function clearValue() {
    value = "";
  }

  function openDialog(e) {
    open = true;
  }

  function close() {
    open = false;
  }
</script>

<style>
  form {
    margin: 32px;
  }

  textarea {
    display: block;
    font-size: 1em;
    padding: 8px;
    line-height: 1.75;
  }

  div {
    margin: 8px 0;
  }
</style>

<form bind:this={rootElementRef}>
  <label>
    Story
    <textarea rows="10" cols="80" bind:value />
  </label>
  <div>
    <Button>Save</Button>
    <Button onClick={openDialog}>Discard</Button>
  </div>
</form>
<AlertDialog
  {...$$props}
  {open}
  requestClose={close}
  initialFocus={initialFocusRef}
  inertElement={rootElementRef}
  labelledBy="alert-dialog-title"
  describedBy="alert-dialog-description">
  <h2 id="alert-dialog-title">Confirm</h2>
  <div id="alert-dialog-description">
    <p>Are you sure you want to discard all of your notes?</p>
    <p>{value.length} chractor will be deleted.</p>
  </div>
  <div>
    <Button bind:ref={initialFocusRef} onClick={close}>No</Button>
    <Button
      onClick={e => {
        clearValue();
        close();
      }}>
      Yes
    </Button>
  </div>
</AlertDialog>
