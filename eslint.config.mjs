import astro from 'eslint-plugin-astro';

export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**', '.cache/**'],
  },
  ...astro.configs['flat/recommended'],
];
