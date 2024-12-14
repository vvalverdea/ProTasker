
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
    'index.csr.html': {size: 729, hash: 'caed12d43c776c38b32b46279d6a9528ad1c168c25ee3b2d858596901fde87ff', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1269, hash: '75c694441221ddffd0bbcde7bd76ee414a7d0389d79bd022a9ad9c9d57d27ce6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10205, hash: '6e183aaac5ddc05a383cfc6c20705230f8e47990220f8dce135f5bce9bff887f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
