import { newSpecPage } from '@stencil/core/testing';
import { ContentLogin } from '../content-login';

describe('content-login', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentLogin],
      html: `<content-login></content-login>`,
    });
    expect(page.root).toEqualHtml(`
      <content-login>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-login>
    `);
  });
});
