
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/boards"
  }
],
  assets: {
    'index.csr.html': {size: 729, hash: '68301974424c2f52ed591b9bcaa6b7cc7f2691d33b6af1e7f4353624f3f5d53d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1269, hash: 'ffba18bdbb4379410426eaa8df4cc1ab24e45f9cd145153ef5ae7152477e55c4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10785, hash: '2242f0b00bd6c0b27a9d4fc83ea22804ca843695688fa8aa9af42f89965702ee', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'boards/index.html': {size: 26659, hash: 'de8ae3823fba63af9672670697e443a986381079a9e1745f414b9a41a7e804cf', text: () => import('./assets-chunks/boards_index_html.mjs').then(m => m.default)}
  },
};
