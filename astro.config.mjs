import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://uzairashraf.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'always'
  }
});
