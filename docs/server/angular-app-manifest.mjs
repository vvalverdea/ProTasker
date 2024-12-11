
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: new Map([
['index.csr.html', {size: 14380, hash: '071b8d162f0f9436d16789d2806a90154bf81db31fb54cde6a28aad16e7e380a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 7938, hash: '9c9d98f8b9c83c3cb3380de529647e8fca7581c3fc90937d882cc97e2a203422', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 23308, hash: 'f36a24c4b13988ebbbbcdbf5231965c1fc7a53b66c7b27a6e90482a29186bda5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles.css', {size: 7004, hash: 'W8heLQ4GBKo', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
