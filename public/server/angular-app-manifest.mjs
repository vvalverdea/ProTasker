
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
    'index.csr.html': {size: 729, hash: 'd2eef04b2c2be9a14ea2c5f53871142415fcca903a712890b7ada63b35778e32', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1269, hash: '1eef5aec93ac32e391bee3d96df9ae69045be451fef7cad988002c1db039a359', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 26273, hash: '2aa72ffce255588c08608af07f7ed304f62c7c5231643c4d89a13ed504fb3889', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
