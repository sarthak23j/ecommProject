import { newE2EPage } from '@stencil/core/testing';

describe('content-login', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-login></content-login>');

    const element = await page.find('content-login');
    expect(element).toHaveClass('hydrated');
  });
});
