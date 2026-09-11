import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://auraofintelligence.github.io',
  base: '/knights-templar-Timothy-Hogan',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
