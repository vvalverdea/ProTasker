export default `<!DOCTYPE html><html lang="en"><head>
  <meta charset="utf-8">
  <title>Client</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&amp;display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="styles.css"><style ng-app-id="ng">@charset "UTF-8";



.light[_ngcontent-ng-c2910852728] {
  margin: 0 auto;
  margin-top: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
.light[_ngcontent-ng-c2910852728]:hover {
  animation: _ngcontent-ng-c2910852728_sway 0.7s ease infinite;
}
@keyframes _ngcontent-ng-c2910852728_sway {
  0% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}
/*# sourceMappingURL=app.component.css.map */</style><style ng-app-id="ng">mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}</style><style ng-app-id="ng">

.grid-header[_ngcontent-ng-c3564850490] {
  background-color: #fff;
  color: #e9b44c;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: xx-large;
  font-family:
    "Gill Sans",
    "Gill Sans MT",
    Calibri,
    "Trebuchet MS",
    sans-serif;
  padding: 2%;
}
.example-container[_ngcontent-ng-c3564850490] {
  width: 20%;
  margin: 2%;
  margin-left: 10%;
  display: inline-block;
  vertical-align: top;
  flex-grow: 2;
}
.example-list[_ngcontent-ng-c3564850490] {
  min-height: 60px;
  background: white;
  margin-left: -45%;
  display: block;
  padding: 5px;
}
.example-box[_ngcontent-ng-c3564850490] {
  padding: 20px 10px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  cursor: default;
  background: white;
  font-size: 14px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
}
.example-box[_ngcontent-ng-c3564850490]:hover {
  transition: opacity 1.3s ease, transform 1.3s ease;
  box-shadow: 2px 9px 12px rgba(0, 0, 0, 0.2);
}
.example-box[_ngcontent-ng-c3564850490]   *[_ngcontent-ng-c3564850490] {
  padding: 5px;
}
.cdk-drag-preview[_ngcontent-ng-c3564850490] {
  box-sizing: border-box;
  box-shadow:
    0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.cdk-drag-placeholder[_ngcontent-ng-c3564850490] {
  opacity: 0;
}
.cdk-drag-animating[_ngcontent-ng-c3564850490] {
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}
.example-box[_ngcontent-ng-c3564850490]:last-child {
  border: none;
}
.example-list.cdk-drop-list-dragging[_ngcontent-ng-c3564850490]   .example-box[_ngcontent-ng-c3564850490]:not(.cdk-drag-placeholder) {
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}
.styled_button[_ngcontent-ng-c3564850490] {
  color: #fff;
  padding: 10px 15px;
  background-color: #38d2d2;
  background-image:
    radial-gradient(
      93% 87% at 87% 89%,
      rgba(0, 0, 0, 0.23) 0%,
      transparent 86.18%),
    radial-gradient(
      66% 66% at 26% 20%,
      rgba(255, 255, 255, 0.55) 0%,
      rgba(255, 255, 255, 0) 69.79%,
      rgba(255, 255, 255, 0) 100%);
  box-shadow:
    inset -3px -3px 9px rgba(255, 255, 255, 0.25),
    inset 0px 3px 9px rgba(255, 255, 255, 0.3),
    inset 0px 1px 1px rgba(255, 255, 255, 0.6),
    inset 0px -8px 36px rgba(0, 0, 0, 0.3),
    inset 0px 1px 5px rgba(255, 255, 255, 0.6),
    2px 19px 31px rgba(0, 0, 0, 0.2);
  border-radius: 14px;
  font-weight: bold;
  font-size: 16px;
  height: 2%;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: default;
}
.button-53[_ngcontent-ng-c3564850490] {
  background-color: #88efff;
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-family: ui-sans-serif, system-ui;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.75rem 1.65rem;
  width: 100%;
  max-width: 60px;
  font-size: 16px;
  height: 2%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  content: icon;
}
.button-53[_ngcontent-ng-c3564850490]:focus {
  outline: 0;
}
.button-53[_ngcontent-ng-c3564850490]:after {
  content: "";
  position: absolute;
  border: 1px solid #000000;
  bottom: 4px;
  left: 4px;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}
.button-53[_ngcontent-ng-c3564850490]:hover:after {
  bottom: 2px;
  left: 2px;
}
@media (min-width: 768px) {
  .button-53[_ngcontent-ng-c3564850490] {
    padding: 0.75rem 3rem;
    font-size: 1.25rem;
  }
}
.styled_button[_ngcontent-ng-c3564850490]:hover {
  transition: opacity 1.3s ease, transform 1.3s ease;
  transform: scale(1.15);
}
.trash[_ngcontent-ng-c3564850490] {
  color: grey;
  font-family: "Material Icons";
}
.trash[_ngcontent-ng-c3564850490]:hover {
  color: red;
  transition: color 0.3s ease-out;
}
.title1[_ngcontent-ng-c3564850490] {
  text-decoration: underline;
}
.title2[_ngcontent-ng-c3564850490] {
  text-decoration: underline;
}
.title3[_ngcontent-ng-c3564850490] {
  text-decoration: underline;
}
.todo[_ngcontent-ng-c3564850490] {
  background-color: #dbf8f8;
  font-style: italic;
  font-family: cursive;
  font-size: large;
}
.inprogress[_ngcontent-ng-c3564850490] {
  background-color: rgb(252, 222, 157);
  font-style: italic;
  font-family: cursive;
  font-size: large;
}
.done[_ngcontent-ng-c3564850490] {
  background-color: rgb(212, 250, 156);
  font-style: italic;
  font-family: cursive;
  font-size: large;
}
.icon-pencil[_ngcontent-ng-c3564850490] {
  z-index: 3;
  position: absolute;
  margin-bottom: 10px;
}
/*# sourceMappingURL=dashboard.component.css.map */</style><style ng-app-id="ng">

.card[_ngcontent-ng-c564622870] {
  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border-radius: 20px;
  margin: 10%;
  padding: 20px;
  display: flex;
  min-height: 40%;
  overflow: hidden;
  background-color: white;
}
/*# sourceMappingURL=card.component.css.map */</style></head>
<body class="mat-typography"><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],[]);</script>
  <app-root _nghost-ng-c2910852728="" ng-version="19.0.4" ngh="2" ng-server-context="ssg"><mat-icon _ngcontent-ng-c2910852728="" role="img" class="mat-icon notranslate light material-icons mat-ligature-font mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" ngh="0" jsaction="click:;">light</mat-icon><router-outlet _ngcontent-ng-c2910852728=""></router-outlet><app-dashboard _nghost-ng-c3564850490="" ngh="1"><app-card _ngcontent-ng-c3564850490="" cdkdroplistgroup="" _nghost-ng-c564622870="" ngh="0"><div _ngcontent-ng-c564622870="" class="card"><button _ngcontent-ng-c3564850490="" class="button-53" jsaction="click:;"><mat-icon _ngcontent-ng-c3564850490="" role="img" class="mat-icon notranslate icon-pencil material-icons mat-ligature-font" aria-hidden="true" ngh="0">edit</mat-icon></button><div _ngcontent-ng-c3564850490="" class="example-container"><h2 _ngcontent-ng-c3564850490="" style="text-decoration: underline; font-family: serif;">To do</h2><div _ngcontent-ng-c3564850490="" cdkdroplist="" class="cdk-drop-list example-list" ng-reflect-data=""><!--container--></div></div><div _ngcontent-ng-c3564850490="" class="example-container"><h2 _ngcontent-ng-c3564850490="" style="text-decoration: underline; font-family: serif;">In Progress</h2><div _ngcontent-ng-c3564850490="" cdkdroplist="" class="cdk-drop-list example-list"><!--container--></div></div><div _ngcontent-ng-c3564850490="" class="example-container"><h2 _ngcontent-ng-c3564850490="" style="text-decoration: underline; font-family: serif;">Done</h2><div _ngcontent-ng-c3564850490="" cdkdroplist="" class="cdk-drop-list example-list"><!--container--></div></div></div></app-card></app-dashboard><!--container--></app-root>
<link rel="modulepreload" href="chunk-CNNMISHW.js"><script src="polyfills.js" type="module"></script><script src="main.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{},{"n":{"1":"0f2","3":"2f"},"t":{"9":"t0","15":"t1","21":"t2"},"c":{"9":[],"15":[],"21":[]}},{"n":{"1":"0f"},"c":{"2":[{"i":"c3564850490","r":1}]}}]}</script></body></html>`;