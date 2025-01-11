const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['./src/main.ts'],
    bundle: true,
    outfile: '../../public/browser/main.js',
    minify: true,
    sourcemap: true,
    files: ['**/*.html'],
  })
  .catch(() => process.exit(1));
