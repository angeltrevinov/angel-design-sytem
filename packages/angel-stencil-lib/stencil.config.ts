import { reactOutputTarget } from '@stencil/react-output-target';
import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'angel-stencil-lib',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: 'angel-stencil-lib',
      proxiesFile: '../angel-react-lib/lib/components/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
