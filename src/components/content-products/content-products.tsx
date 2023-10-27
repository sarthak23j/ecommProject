import { Component, State, h, Host, getAssetPath } from '@stencil/core';

@Component({
  tag: 'content-products',
  styleUrl: 'content-products.css',
  shadow: true,
  assetsDirs: ["assets"]
})
export class ContentProducts {

  @State() productData:any;

  componentDidLoad() {
    fetch('http://localhost:3000/api/categoryinfo')
      .then(response => response.json())
      .then(data => {
        this.productData = data;
      });
  }

  render() {
    return (
      <Host>
        {
          this.productData.map((item) => {
            return (
              <div class="product-category">
                <h2 class="category-name">{ item.name }</h2>
                  <div class="product-list">
                  {
                    item.products.map((proditem) => {
                      return(
                        <div class="product-card">
                          <img class="product-image" src={ getAssetPath(`./assets${proditem.typeimage}.JPG`) }/>
                          <h6 class="product-name">{proditem.name}</h6>
                        </div>
                      )
                    })
                  }
                  </div>
              </div>
            )
          })
        }
      </Host>
    );
  }

}
