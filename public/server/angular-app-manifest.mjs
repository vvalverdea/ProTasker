
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
    'index.html': {size: 10103, hash: '7e64ced01b5b8fa63590c02e8e3ce7754c158143c442078fe509ba63dcc400e3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'boards/index.html': {size: 27833, hash: '479213573ab66359729a209ed1bbe3b4e81748316ce5c3d39f00575c4bf84834', text: () => import('./assets-chunks/boards_index_html.mjs').then(m => m.default)}
  },
};
