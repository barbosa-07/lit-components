import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('simple-carousel')
export class SimpleCarousel extends LitElement {
  @property({type: String})
  name = 'default';
  @property({type: String})
  color = 'red';

  override render() {
    return html`
      <style>
        button {
          /* Warning: this approach has limitations & performance issues! */
          background-color: ${this.color};
        }
      </style>
      <div>
        <button part="button-one">Click Me</button>
        <button part="button-two">Click Me</button>
        <button part="button-one">Click Me</button>
        <button>Click Me</button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'simple-carousel': SimpleCarousel;
  }
}
