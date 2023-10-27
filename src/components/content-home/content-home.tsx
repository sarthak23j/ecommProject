import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'content-home',
  styleUrl: 'content-home.css',
  shadow: true,
})
export class ContentHome {

  render() {
    return (
      <Host>
        <h2>This is home page</h2>
      </Host>
    );
  }

}
