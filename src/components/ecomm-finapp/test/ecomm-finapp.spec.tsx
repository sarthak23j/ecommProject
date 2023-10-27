import { newSpecPage } from '@stencil/core/testing';
import { EcommFinapp } from '../ecomm-finapp';

describe('ecomm-finapp', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EcommFinapp],
      html: `<ecomm-finapp></ecomm-finapp>`,
    });
    expect(page.root).toEqualHtml(`
      <ecomm-finapp>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ecomm-finapp>
    `);
  });
});
