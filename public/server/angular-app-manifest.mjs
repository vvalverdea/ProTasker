
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
    'index.csr.html': {size: 759, hash: '4fc8d9926cbc76b2b77de470a6c580a28a2f34d6b54c9c70b4348e42bf9abf81', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1299, hash: 'f61e884b01059e9dfce268484ad7b71b113b7cf6d3294234553a948906886c52', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 26549, hash: 'c39f515ae7fb4681743e5a76a9445ddb2cbc5ed35b30bf19d36d4a83cf2e85aa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
