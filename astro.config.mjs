import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://uzairashraf.com',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'always'
  }
});
