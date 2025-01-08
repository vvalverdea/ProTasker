
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
    'index.csr.html': {size: 739, hash: 'b21773f0920b2e1f5671f6db262c679f1cab8974efbd81171e25026690e51d74', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1279, hash: 'a81d3d57e667ef45339727c08136d61045a2923825528acee5c8d48e461fd79c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25295, hash: '58a01ba2d1be575a9817a4028ffb33f886b15e6d3bc735bae166f791d6992345', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
