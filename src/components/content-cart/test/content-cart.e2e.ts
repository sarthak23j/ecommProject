import { newE2EPage } from '@stencil/core/testing';

describe('content-cart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-cart></content-cart>');

    const element = await page.find('content-cart');
    expect(element).toHaveClass('hydrated');
  });
});
