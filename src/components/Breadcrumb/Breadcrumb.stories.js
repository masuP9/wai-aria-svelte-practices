import Breadcrumb from "./Breadcrumb.view.svelte";

export default { title: "Breadcrumb" };

export const overview = () => ({
  Component: Breadcrumb,
  props: {
    items: [
      {
        href: "/",
        text: "Home"
      },
      {
        href: "../",
        text: "Prev"
      },
      {
        text: "Now"
      }
    ]
  }
});
