import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ecomm-finapp',
  styleUrl: 'ecomm-finapp.css',
  shadow: true,
})
export class EcommFinapp {

  render() {
    return (
      <Host>
        <ecomm-header />
        <content-products />
      </Host>
    );
  }

}
