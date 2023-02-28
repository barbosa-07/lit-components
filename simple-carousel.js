var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
let SimpleCarousel = class SimpleCarousel extends LitElement {
  constructor() {
    super(...arguments);
    this.name = 'default';
    this.color = 'red';
  }
  render() {
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
};
__decorate(
  [property({type: String})],
  SimpleCarousel.prototype,
  'name',
  void 0
);
__decorate(
  [property({type: String})],
  SimpleCarousel.prototype,
  'color',
  void 0
);
SimpleCarousel = __decorate([customElement('simple-carousel')], SimpleCarousel);
export {SimpleCarousel};
//# sourceMappingURL=simple-carousel.js.map
