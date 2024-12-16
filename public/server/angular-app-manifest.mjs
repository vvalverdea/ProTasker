
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
    'index.csr.html': {size: 729, hash: '662586a0acd1a0bcb82cdb1437efb8baafcdc102306b32196fb47aa35b3b697d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1269, hash: 'c2f4851d5cc9f2c2c2053147039dbeec833d1ec760e716ffbcdc7e08ac755985', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10785, hash: '017a3611ddcb4366b1954f9e790d013f41ded1f9c34305ff45f13dd894f42d84', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
