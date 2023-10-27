import { newSpecPage } from '@stencil/core/testing';
import { ContentProducts } from '../content-products';

describe('content-products', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentProducts],
      html: `<content-products></content-products>`,
    });
    expect(page.root).toEqualHtml(`
      <content-products>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-products>
    `);
  });
});
