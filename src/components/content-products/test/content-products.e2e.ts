import { newE2EPage } from '@stencil/core/testing';

describe('content-products', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-products></content-products>');

    const element = await page.find('content-products');
    expect(element).toHaveClass('hydrated');
  });
});
