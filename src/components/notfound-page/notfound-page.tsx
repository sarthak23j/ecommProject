import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'notfound-page',
  styleUrl: 'notfound-page.css',
  shadow: true,
})
export class NotfoundPage {

  render() {
    return (
      <Host>
        <h2>This page doesnt exist! Error 404</h2>
      </Host>
    );
  }

}
