import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'content-login',
  styleUrl: 'content-login.css',
  shadow: true,
})
export class ContentLogin {

  render() {
    return (
      <Host>
        <h2>this is login page</h2>
      </Host>
    );
  }

}
