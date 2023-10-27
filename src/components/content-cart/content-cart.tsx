import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'content-cart',
  styleUrl: 'content-cart.css',
  shadow: true,
})
export class ContentCart {

  render() {
    return (
      <Host>
        <h2>this is cart page</h2>
      </Host>
    );
  }

}
