
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
    'index.html': {size: 10103, hash: '42a47df8879cd3b80ad2aa97db3a7241454e131927b32be2eea6ba05001ac209', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'boards/index.html': {size: 27017, hash: 'ad8b09cd96b4946d5237e7c832889b4dec35961186e9604b00456392ae62317a', text: () => import('./assets-chunks/boards_index_html.mjs').then(m => m.default)}
  },
};
