import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ecomm-footer',
  styleUrl: 'ecomm-footer.css',
  shadow: true,
})
export class EcommFooter {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
