import { newSpecPage } from '@stencil/core/testing';
import { NotfoundPage } from '../notfound-page';

describe('notfound-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NotfoundPage],
      html: `<notfound-page></notfound-page>`,
    });
    expect(page.root).toEqualHtml(`
      <notfound-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </notfound-page>
    `);
  });
});
