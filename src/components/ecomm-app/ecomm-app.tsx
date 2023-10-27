import { Component, Listen, h } from '@stencil/core';
@Component({
  tag: 'ecomm-app',
  styleUrl: 'ecomm-app.css',
  shadow: true,
})
export class EcommApp {

  @Listen('menuChange')
  onMenuChange(e: any){
    console.log(e.detail)
  }

  @Listen('searchChange')
  onSearchChange(e: any){
    console.log(e.detail)
  }

  render() {
    return (
      <div>
        <ecomm-header />
        <stencil-router></stencil-router>
        <ecomm-footer />
      </div>
    );
  }
}
