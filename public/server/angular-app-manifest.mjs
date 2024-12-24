
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
    'index.csr.html': {size: 729, hash: 'f5d878632c09e0b223f1822cf2ec60b29e10898216bafcf70aae61bcd2666385', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1269, hash: '2de62719c3fb72598c777ca3b912565acb122c4379ce08b2349d2c87d66d005b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25550, hash: 'c9023044cb83c64e781f86c24747f58f3259c6800e9a7d4818dade9dc662b38e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
