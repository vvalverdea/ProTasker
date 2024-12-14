
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 14380, hash: '1c47716970a4be822c4a7bd29b6dfa9bbb14449e4d4233c458d4e2ad78e208f4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7938, hash: 'b7c820723734223101de36002062d9d4f1ab96fa478f7a8166e3a1e489f208b4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22348, hash: 'b69654764f872ede9d34ba7337961a1eb356fe62218f21f0a968e8c72756dbb6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles.css': {size: 7004, hash: 'W8heLQ4GBKo', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
