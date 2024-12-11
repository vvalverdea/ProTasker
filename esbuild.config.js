require('esbuild')
  .build({
    entryPoints: ['backend/server.js'],
    bundle: true,
    platform: 'node',
    external: ['mongoose', 'express', 'cors'],
    outdir: 'dist',
  })
  .catch(() => process.exit(1));
