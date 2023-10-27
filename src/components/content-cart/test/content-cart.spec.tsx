import { newSpecPage } from '@stencil/core/testing';
import { ContentCart } from '../content-cart';

describe('content-cart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentCart],
      html: `<content-cart></content-cart>`,
    });
    expect(page.root).toEqualHtml(`
      <content-cart>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-cart>
    `);
  });
});
