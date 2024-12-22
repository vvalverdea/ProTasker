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
/*# sourceMappingURL=app.component.css.map */</style><style ng-app-id="ng">mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}</style><style ng-app-id="ng">.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height, 48px);font-family:var(--mat-tab-header-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height, 2px);border-radius:var(--mdc-tab-indicator-active-indicator-shape, 0)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}</style><style ng-app-id="ng">

.grid-header[_ngcontent-ng-c3252533550] {
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
.example-container[_ngcontent-ng-c3252533550] {
  width: 20%;
  margin: 2%;
  margin-left: 10%;
  display: inline-block;
  vertical-align: top;
  flex-grow: 2;
}
.example-list[_ngcontent-ng-c3252533550] {
  min-height: 60px;
  background: white;
  margin-left: -45%;
  display: block;
  padding: 5px;
}
.example-box[_ngcontent-ng-c3252533550] {
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
.example-box[_ngcontent-ng-c3252533550]:hover {
  transition: opacity 1.3s ease, transform 1.3s ease;
  box-shadow: 2px 9px 12px rgba(0, 0, 0, 0.2);
}
.example-box[_ngcontent-ng-c3252533550]   *[_ngcontent-ng-c3252533550] {
  padding: 5px;
}
.cdk-drag-preview[_ngcontent-ng-c3252533550] {
  box-sizing: border-box;
  box-shadow:
    0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.cdk-drag-placeholder[_ngcontent-ng-c3252533550] {
  opacity: 0;
}
.cdk-drag-animating[_ngcontent-ng-c3252533550] {
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}
.example-box[_ngcontent-ng-c3252533550]:last-child {
  border: none;
}
.example-list.cdk-drop-list-dragging[_ngcontent-ng-c3252533550]   .example-box[_ngcontent-ng-c3252533550]:not(.cdk-drag-placeholder) {
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}
.styled_button[_ngcontent-ng-c3252533550] {
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
.button-53[_ngcontent-ng-c3252533550] {
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
.button-53[_ngcontent-ng-c3252533550]:focus {
  outline: 0;
}
.button-53[_ngcontent-ng-c3252533550]:after {
  content: "";
  position: absolute;
  border: 1px solid #000000;
  bottom: 4px;
  left: 4px;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}
.button-53[_ngcontent-ng-c3252533550]:hover:after {
  bottom: 2px;
  left: 2px;
}
@media (min-width: 768px) {
  .button-53[_ngcontent-ng-c3252533550] {
    padding: 0.75rem 3rem;
    font-size: 1.25rem;
  }
}
.styled_button[_ngcontent-ng-c3252533550]:hover {
  transition: opacity 1.3s ease, transform 1.3s ease;
  transform: scale(1.15);
}
.trash[_ngcontent-ng-c3252533550] {
  color: grey;
  font-family: "Material Icons";
}
.trash[_ngcontent-ng-c3252533550]:hover {
  color: red;
  transition: color 0.3s ease-out;
}
.title1[_ngcontent-ng-c3252533550] {
  text-decoration: underline;
}
.title2[_ngcontent-ng-c3252533550] {
  text-decoration: underline;
}
.title3[_ngcontent-ng-c3252533550] {
  text-decoration: underline;
}
.todo[_ngcontent-ng-c3252533550] {
  background-color: #dbf8f8;
  font-style: italic;
  font-family: cursive;
  font-size: large;
}
.inprogress[_ngcontent-ng-c3252533550] {
  background-color: rgb(252, 222, 157);
  font-style: italic;
  font-family: cursive;
  font-size: large;
}
.done[_ngcontent-ng-c3252533550] {
  background-color: rgb(212, 250, 156);
  font-style: italic;
  font-family: cursive;
  font-size: large;
}
.icon-pencil[_ngcontent-ng-c3252533550] {
  z-index: 3;
  position: absolute;
  margin-bottom: 10px;
}
/*# sourceMappingURL=dashboard.component.css.map */</style><style ng-app-id="ng">.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height, 1px);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-header-divider-height, 1px);border-top-color:var(--mat-tab-header-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height, 48px)}.mat-mdc-tab::before{margin:5px}@media(forced-colors: active){.mat-mdc-tab[aria-disabled=true]{color:GrayText}}</style><style ng-app-id="ng">.mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}</style><style ng-app-id="ng">

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
/*# sourceMappingURL=card.component.css.map */</style><style ng-app-id="ng">.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}</style><style ng-app-id="ng">.mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-mdc-tab-body-content[style*="visibility: hidden"]{display:none}</style></head>
<body class="mat-typography"><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click","mousedown","touchend","keydown"],[]);</script>
  <app-root _nghost-ng-c2910852728="" ng-version="19.0.4" ngh="7" ng-server-context="ssg"><mat-icon _ngcontent-ng-c2910852728="" role="img" class="mat-icon notranslate light material-icons mat-ligature-font mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" ngh="0" jsaction="click:;">light</mat-icon><router-outlet _ngcontent-ng-c2910852728=""></router-outlet><app-boards ngh="6"><div class="tab-container"><mat-tab-group class="mat-mdc-tab-group mat-primary mat-mdc-tab-group-stretch-tabs" ng-reflect-selected-index="0" style="--mat-tab-animation-duration: 500ms;" ngh="3"><mat-tab-header class="mat-mdc-tab-header" ng-reflect-selected-index="0" ng-reflect-disable-ripple="false" ng-reflect-disable-pagination="false" ngh="0"><div mat-ripple="" class="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before mat-mdc-tab-header-pagination-disabled" ng-reflect-disabled="true" jsaction="click:;mousedown:;touchend:;"><div class="mat-mdc-tab-header-pagination-chevron"></div></div><div class="mat-mdc-tab-label-container _mat-animation-noopable" jsaction="keydown:;"><div role="tablist" class="mat-mdc-tab-list" style="transform: translateX(0px);"><div class="mat-mdc-tab-labels"><div role="tab" mattablabelwrapper="" cdkmonitorelementfocus="" class="mdc-tab mat-mdc-tab mat-focus-indicator mdc-tab--active mdc-tab-indicator--active ng-star-inserted" id="mat-tab-group-0-label-0" ng-reflect-disabled="false" ng-reflect-fit-ink-bar-to-content="false" tabindex="0" aria-posinset="1" aria-setsize="2" aria-controls="mat-tab-group-0-content-0" aria-selected="true" aria-disabled="false" jsaction="click:;"><span class="mdc-tab__ripple"></span><div mat-ripple="" class="mat-ripple mat-mdc-tab-ripple" ng-reflect-trigger="[object Object]" ng-reflect-disabled="false"></div><span class="mdc-tab__content"><span class="mdc-tab__text-label"> 2 <!--bindings={
  "ng-reflect-portal": "[object Object]"
}--><!--container--><!--container--></span></span><span class="mdc-tab-indicator"><span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span></span></div><div role="tab" mattablabelwrapper="" cdkmonitorelementfocus="" class="mdc-tab mat-mdc-tab mat-focus-indicator ng-star-inserted" id="mat-tab-group-0-label-1" ng-reflect-disabled="false" ng-reflect-fit-ink-bar-to-content="false" tabindex="-1" aria-posinset="2" aria-setsize="2" aria-controls="mat-tab-group-0-content-1" aria-selected="false" aria-disabled="false" jsaction="click:;"><span class="mdc-tab__ripple"></span><div mat-ripple="" class="mat-ripple mat-mdc-tab-ripple" ng-reflect-trigger="[object Object]" ng-reflect-disabled="false"></div><span class="mdc-tab__content"><span class="mdc-tab__text-label"> 3 <!--bindings={
  "ng-reflect-portal": "[object Object]"
}--><!--container--><!--container--></span></span><span class="mdc-tab-indicator"><span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span></span></div><!--container--></div></div></div><div mat-ripple="" class="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after mat-mdc-tab-header-pagination-disabled" ng-reflect-disabled="true" jsaction="mousedown:;click:;touchend:;"><div class="mat-mdc-tab-header-pagination-chevron"></div></div></mat-tab-header><mat-tab hidden="" class="ng-star-inserted" ngh="4"><!--container--></mat-tab><!--container--><mat-tab hidden="" class="ng-star-inserted" ngh="4"><!--container--></mat-tab><!--container--><!--bindings={
  "ng-reflect-ng-for-of": "[object Object],[object Object"
}--><!--container--><div class="mat-mdc-tab-body-wrapper _mat-animation-noopable" style=""><mat-tab-body role="tabpanel" class="mat-mdc-tab-body ng-tns-c1615493245-0 mat-mdc-tab-body-active ng-star-inserted" id="mat-tab-group-0-content-0" ng-reflect-_content="[object Object]" ng-reflect-position="0" ng-reflect-origin="1" ng-reflect-animation-duration="500ms" ng-reflect-preserve-content="false" aria-labelledby="mat-tab-group-0-label-0" aria-hidden="false" ngh="1"><div cdkscrollable="" class="mat-mdc-tab-body-content ng-tns-c1615493245-0 ng-trigger ng-trigger-translateTab" style="transform: none; visibility: visible;"><!--container--><!--container--></div></mat-tab-body><mat-tab-body role="tabpanel" class="mat-mdc-tab-body ng-tns-c1615493245-1 ng-star-inserted" id="mat-tab-group-0-content-1" ng-reflect-_content="[object Object]" ng-reflect-position="1" ng-reflect-animation-duration="500ms" ng-reflect-preserve-content="false" aria-labelledby="mat-tab-group-0-label-1" aria-hidden="true" ngh="2"><div cdkscrollable="" class="mat-mdc-tab-body-content ng-tns-c1615493245-1 ng-trigger ng-trigger-translateTab" style="transform: translate3d(100%, 0, 0); min-height: 1px; visibility: hidden;"><!--container--></div></mat-tab-body><!--container--></div></mat-tab-group><app-dashboard _nghost-ng-c3252533550="" ng-reflect-current-updated-board="[object Object]" ngh="5"><app-card _ngcontent-ng-c3252533550="" cdkdroplistgroup="" _nghost-ng-c564622870="" ngh="0"><div _ngcontent-ng-c564622870="" class="card"><button _ngcontent-ng-c3252533550="" class="button-53" jsaction="click:;"><mat-icon _ngcontent-ng-c3252533550="" role="img" class="mat-icon notranslate icon-pencil material-icons mat-ligature-font mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" ngh="0">edit</mat-icon></button><div _ngcontent-ng-c3252533550="" class="example-container"><h2 _ngcontent-ng-c3252533550="" style="text-decoration: underline; font-family: serif;">To do</h2><div _ngcontent-ng-c3252533550="" cdkdroplist="" class="cdk-drop-list example-list" ng-reflect-data="" id="cdk-drop-list-0"><!--container--></div></div><div _ngcontent-ng-c3252533550="" class="example-container"><h2 _ngcontent-ng-c3252533550="" style="text-decoration: underline; font-family: serif;">In Progress</h2><div _ngcontent-ng-c3252533550="" cdkdroplist="" class="cdk-drop-list example-list" ng-reflect-data="" id="cdk-drop-list-1"><!--container--></div></div><div _ngcontent-ng-c3252533550="" class="example-container"><h2 _ngcontent-ng-c3252533550="" style="text-decoration: underline; font-family: serif;">Done</h2><div _ngcontent-ng-c3252533550="" cdkdroplist="" class="cdk-drop-list example-list" ng-reflect-data="" id="cdk-drop-list-2"><!--container--></div></div></div></app-card></app-dashboard><button jsaction="click:;">+ Add Board</button></div></app-boards><!--container--></app-root>
<link rel="modulepreload" href="chunk-CNNMISHW.js"><script src="polyfills.js" type="module"></script><script src="main.js" type="module"></script>

<script id="ng-state" type="application/json">{"2411736981":{"b":[{"title":"2","description":"2","tasks":{"todo":[],"inprogress":[],"done":[]},"id":"676730e9d6cc42c6c36d4dc8"},{"title":"3","tasks":[],"id":"676736bf26577cc567001a6a"}],"h":{},"s":200,"st":"OK","u":"http://localhost:8081/api/boards","rt":"json"},"4006728538":{"b":[{"title":"fefe3","status":0,"board":"676730e9d6cc42c6c36d4dc8","id":"6767c24244a7f13798ad8997"}],"h":{},"s":200,"st":"OK","u":"http://localhost:8081/api/tasks/676730e9d6cc42c6c36d4dc8/boards","rt":"json"},"__nghData__":[{},{"t":{"2":"t7"},"c":{"2":[{"i":"t8","r":1}]}},{"t":{"2":"t7"},"c":{"2":[]}},{"n":{"3":"0fnf3"},"t":{"3":"t0","4":"t5","8":"t6"},"c":{"3":[{"i":"t0","r":1,"t":{"6":"t1","7":"t4"},"c":{"6":[{"i":"t1","r":2,"t":{"0":"t2"},"c":{"0":[{"i":"t3","r":1}]}}],"7":[]},"x":2}],"4":[{"i":"t5","r":5}],"8":[{"i":"t6","r":1,"x":2}]}},{"t":{"0":"t8"},"c":{"0":[]}},{"n":{"1":"0f2","3":"2f"},"t":{"9":"t10","15":"t11","21":"t12"},"c":{"9":[],"15":[],"21":[]}},{"n":{"2":"1fn"},"t":{"2":"t9"},"c":{"2":[{"i":"t9","r":2,"n":{"1":"0n6f3"},"c":{"0":[],"1":[]},"t":{"1":"t3"}},{"i":"t9","r":2,"d":[1],"c":{"0":[]}}]}},{"n":{"1":"0f"},"c":{"2":[{"i":"c1993736952","r":1}]}}]}</script></body></html>`;