import Accordion from "./Accordion.view.svelte";

export default { title: "Accordion" };

export const overview = () => ({
  Component: Accordion,
  props: {
    items: [
      {
        header: "Accordion Header",
        panel: `
        <figure>
          <blockquote>
            <p>Accordion Header: Label for or thumbnail representing a section of content that also serves as a control for showing, and in some implementations, hiding the section of content.</p>
          </blockquote>
          <figcaption>
            <cite>
              <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#accordion">WAI-ARIA Authoring Practices 1.1</a>
            </cite>
          </figcaption>
        </figure>`
      },
      {
        header: "Accordion Panel",
        panel: `
        <figure>
          <blockquote>
          <p>Accordion Panel: Section of content associated with an accordion header.</p>
          </blockquote>
          <figcaption>
            <cite>
              <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#accordion">WAI-ARIA Authoring Practices 1.1</a>
            </cite>
          </figcaption>
        </figure>`
      },
      {
        header: `
          <span style="display: inline-flex; align-items: center;">
            Accordion Panel with icon
            <svg width="32" height="32" viewBox="0 0 48 48">
              <path d="M21,18l4.35,3.73a3,3,0,0,1,0,4.54L21,30" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
            </svg>
          </span>
          `,
        panel: `
        <figure>
          <blockquote>
          <p>Accordion Panel: Section of content associated with an accordion header.</p>
          </blockquote>
          <figcaption>
            <cite>
              <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#accordion">WAI-ARIA Authoring Practices 1.1</a>
            </cite>
          </figcaption>
        </figure>`
      }
    ]
  }
});
