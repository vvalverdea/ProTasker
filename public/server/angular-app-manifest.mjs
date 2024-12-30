
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 759, hash: '406fa49eb789c79eb30cf355273d443734948872ecc27e3f0248fabb559f865d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1299, hash: 'ecd1423982ed44a29dda0fc4d85f30342b70812871763642663cd6877e969303', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 26549, hash: 'a42472189cee4b5f0097624e6c6d579c0697862fd85caae65e22dd4675821f62', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
