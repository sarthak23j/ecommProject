import { newE2EPage } from '@stencil/core/testing';

describe('ecomm-finapp', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ecomm-finapp></ecomm-finapp>');

    const element = await page.find('ecomm-finapp');
    expect(element).toHaveClass('hydrated');
  });
});
