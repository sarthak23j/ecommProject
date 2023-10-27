import { newE2EPage } from '@stencil/core/testing';

describe('notfound-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<notfound-page></notfound-page>');

    const element = await page.find('notfound-page');
    expect(element).toHaveClass('hydrated');
  });
});
