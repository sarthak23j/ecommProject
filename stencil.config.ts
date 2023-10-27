import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ecomm',
  globalStyle: './src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: 'esm-loader',
    },
    {
      type: 'dist-custom-elements',
      copy: [
        {
          src: '**/*.{jpg,png}',
          dest: 'dist/assets/pics',
          warn: true,
        }
      ]
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
