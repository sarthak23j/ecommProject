import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ecomm-header',
  styleUrl: 'ecomm-header.css',
  shadow: true,
})
export class EcommHeader {

  @Event({bubbles:true}) menuChange: EventEmitter<string>;
  @Event({bubbles:true}) searchChange: EventEmitter<any>;

  menuClick(target){
    this.menuChange.emit(target);
  }
  
  searching(e){
    this.searchChange.emit([e.target.value])

  }

  render() {
    return (
      <header>
        <div class="title" onClick={() => this.menuClick("home")}>
          <div class="logo"></div>
          <h1 class="title-text">eComm home</h1>
        </div>
        <div class="search">
          <input class="search-box" type="text" value="" placeholder='Search for products...' onInput={(e) => this.searching(e)}/>
          <div class="search-icon"></div>
        </div>
        <nav class="menu">
          <h4 class="menu-item" onClick={() => this.menuClick("products")}>Products</h4>
          <h4 class="menu-item" onClick={() => this.menuClick("cart")}>Cart</h4>
          <h4 class="menu-item" onClick={() => this.menuClick("login")}>Login</h4>
        </nav>
      </header>
    );
  }
  
}
