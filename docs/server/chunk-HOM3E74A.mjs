import { createRequire } from 'node:module';
globalThis['require'] ??= createRequire(import.meta.url);
import{e as t}from"./chunk-YJ4N4I6Q.mjs";function p(e,r,o){return e.$source||(e.$source={}),e.$source[r]=o,e}var s=t(()=>{"use strict"});var n,_,a=t(()=>{"use strict";n={warningEmitted:!1},_=e=>{e&&!n.warningEmitted&&parseInt(e.substring(1,e.indexOf(".")))<18&&(n.warningEmitted=!0,process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`))}});function c(e,r,o){e.__aws_sdk_context?e.__aws_sdk_context.features||(e.__aws_sdk_context.features={}):e.__aws_sdk_context={features:{}},e.__aws_sdk_context.features[r]=o}var i=t(()=>{"use strict"});var u=t(()=>{"use strict";a();s();i()});export{_ as a,p as b,c,u as d};
