export default `<!DOCTYPE html><html lang="en" data-beasties-container><head><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <meta charset="utf-8">
  <title>Client</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <style>@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fABc4EsA.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fCBc4EsA.woff2) format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fBxc4EsA.woff2) format('woff2');unicode-range:U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fCxc4EsA.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fChc4EsA.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmSU5fBBc4.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');unicode-range:U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fCRc4EsA.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fABc4EsA.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fCBc4EsA.woff2) format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fBxc4EsA.woff2) format('woff2');unicode-range:U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fCxc4EsA.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}</style>
  <style>@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v142/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');}.material-icons{font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased;}</style>
<style>html{--mat-sys-background: #faf9fd;--mat-sys-error: #ba1a1a;--mat-sys-error-container: #ffdad6;--mat-sys-inverse-on-surface: #f2f0f4;--mat-sys-inverse-primary: #abc7ff;--mat-sys-inverse-surface: #2f3033;--mat-sys-on-background: #1a1b1f;--mat-sys-on-error: #ffffff;--mat-sys-on-error-container: #410002;--mat-sys-on-primary: #ffffff;--mat-sys-on-primary-container: #001b3f;--mat-sys-on-primary-fixed: #001b3f;--mat-sys-on-primary-fixed-variant: #00458f;--mat-sys-on-secondary: #ffffff;--mat-sys-on-secondary-container: #131c2b;--mat-sys-on-secondary-fixed: #131c2b;--mat-sys-on-secondary-fixed-variant: #3e4759;--mat-sys-on-surface: #1a1b1f;--mat-sys-on-surface-variant: #44474e;--mat-sys-on-tertiary: #ffffff;--mat-sys-on-tertiary-container: #00006e;--mat-sys-on-tertiary-fixed: #00006e;--mat-sys-on-tertiary-fixed-variant: #0000ef;--mat-sys-outline: #74777f;--mat-sys-outline-variant: #c4c6d0;--mat-sys-primary: #005cbb;--mat-sys-primary-container: #d7e3ff;--mat-sys-primary-fixed: #d7e3ff;--mat-sys-primary-fixed-dim: #abc7ff;--mat-sys-scrim: #000000;--mat-sys-secondary: #565e71;--mat-sys-secondary-container: #dae2f9;--mat-sys-secondary-fixed: #dae2f9;--mat-sys-secondary-fixed-dim: #bec6dc;--mat-sys-shadow: #000000;--mat-sys-surface: #faf9fd;--mat-sys-surface-bright: #faf9fd;--mat-sys-surface-container: #efedf0;--mat-sys-surface-container-high: #e9e7eb;--mat-sys-surface-container-highest: #e3e2e6;--mat-sys-surface-container-low: #f4f3f6;--mat-sys-surface-container-lowest: #ffffff;--mat-sys-surface-dim: #dbd9dd;--mat-sys-surface-tint: #005cbb;--mat-sys-surface-variant: #e0e2ec;--mat-sys-tertiary: #343dff;--mat-sys-tertiary-container: #e0e0ff;--mat-sys-tertiary-fixed: #e0e0ff;--mat-sys-tertiary-fixed-dim: #bec2ff;--mat-sys-neutral-variant20: #2d3038;--mat-sys-neutral10: #1a1b1f}html{--mat-sys-level0: 0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12)}html{--mat-sys-level1: 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)}html{--mat-sys-level2: 0px 3px 3px -2px rgba(0, 0, 0, .2), 0px 3px 4px 0px rgba(0, 0, 0, .14), 0px 1px 8px 0px rgba(0, 0, 0, .12)}html{--mat-sys-level3: 0px 3px 5px -1px rgba(0, 0, 0, .2), 0px 6px 10px 0px rgba(0, 0, 0, .14), 0px 1px 18px 0px rgba(0, 0, 0, .12)}html{--mat-sys-level4: 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12)}html{--mat-sys-level5: 0px 7px 8px -4px rgba(0, 0, 0, .2), 0px 12px 17px 2px rgba(0, 0, 0, .14), 0px 5px 22px 4px rgba(0, 0, 0, .12)}html{--mat-sys-body-large: 400 1rem / 1.5rem Roboto;--mat-sys-body-large-font: Roboto;--mat-sys-body-large-line-height: 1.5rem;--mat-sys-body-large-size: 1rem;--mat-sys-body-large-tracking: .031rem;--mat-sys-body-large-weight: 400;--mat-sys-body-medium: 400 .875rem / 1.25rem Roboto;--mat-sys-body-medium-font: Roboto;--mat-sys-body-medium-line-height: 1.25rem;--mat-sys-body-medium-size: .875rem;--mat-sys-body-medium-tracking: .016rem;--mat-sys-body-medium-weight: 400;--mat-sys-body-small: 400 .75rem / 1rem Roboto;--mat-sys-body-small-font: Roboto;--mat-sys-body-small-line-height: 1rem;--mat-sys-body-small-size: .75rem;--mat-sys-body-small-tracking: .025rem;--mat-sys-body-small-weight: 400;--mat-sys-display-large: 400 3.562rem / 4rem Roboto;--mat-sys-display-large-font: Roboto;--mat-sys-display-large-line-height: 4rem;--mat-sys-display-large-size: 3.562rem;--mat-sys-display-large-tracking: -.016rem;--mat-sys-display-large-weight: 400;--mat-sys-display-medium: 400 2.812rem / 3.25rem Roboto;--mat-sys-display-medium-font: Roboto;--mat-sys-display-medium-line-height: 3.25rem;--mat-sys-display-medium-size: 2.812rem;--mat-sys-display-medium-tracking: 0;--mat-sys-display-medium-weight: 400;--mat-sys-display-small: 400 2.25rem / 2.75rem Roboto;--mat-sys-display-small-font: Roboto;--mat-sys-display-small-line-height: 2.75rem;--mat-sys-display-small-size: 2.25rem;--mat-sys-display-small-tracking: 0;--mat-sys-display-small-weight: 400;--mat-sys-headline-large: 400 2rem / 2.5rem Roboto;--mat-sys-headline-large-font: Roboto;--mat-sys-headline-large-line-height: 2.5rem;--mat-sys-headline-large-size: 2rem;--mat-sys-headline-large-tracking: 0;--mat-sys-headline-large-weight: 400;--mat-sys-headline-medium: 400 1.75rem / 2.25rem Roboto;--mat-sys-headline-medium-font: Roboto;--mat-sys-headline-medium-line-height: 2.25rem;--mat-sys-headline-medium-size: 1.75rem;--mat-sys-headline-medium-tracking: 0;--mat-sys-headline-medium-weight: 400;--mat-sys-headline-small: 400 1.5rem / 2rem Roboto;--mat-sys-headline-small-font: Roboto;--mat-sys-headline-small-line-height: 2rem;--mat-sys-headline-small-size: 1.5rem;--mat-sys-headline-small-tracking: 0;--mat-sys-headline-small-weight: 400;--mat-sys-label-large: 500 .875rem / 1.25rem Roboto;--mat-sys-label-large-font: Roboto;--mat-sys-label-large-line-height: 1.25rem;--mat-sys-label-large-size: .875rem;--mat-sys-label-large-tracking: .006rem;--mat-sys-label-large-weight: 500;--mat-sys-label-large-weight-prominent: 700;--mat-sys-label-medium: 500 .75rem / 1rem Roboto;--mat-sys-label-medium-font: Roboto;--mat-sys-label-medium-line-height: 1rem;--mat-sys-label-medium-size: .75rem;--mat-sys-label-medium-tracking: .031rem;--mat-sys-label-medium-weight: 500;--mat-sys-label-medium-weight-prominent: 700;--mat-sys-label-small: 500 .688rem / 1rem Roboto;--mat-sys-label-small-font: Roboto;--mat-sys-label-small-line-height: 1rem;--mat-sys-label-small-size: .688rem;--mat-sys-label-small-tracking: .031rem;--mat-sys-label-small-weight: 500;--mat-sys-title-large: 400 1.375rem / 1.75rem Roboto;--mat-sys-title-large-font: Roboto;--mat-sys-title-large-line-height: 1.75rem;--mat-sys-title-large-size: 1.375rem;--mat-sys-title-large-tracking: 0;--mat-sys-title-large-weight: 400;--mat-sys-title-medium: 500 1rem / 1.5rem Roboto;--mat-sys-title-medium-font: Roboto;--mat-sys-title-medium-line-height: 1.5rem;--mat-sys-title-medium-size: 1rem;--mat-sys-title-medium-tracking: .009rem;--mat-sys-title-medium-weight: 500;--mat-sys-title-small: 500 .875rem / 1.25rem Roboto;--mat-sys-title-small-font: Roboto;--mat-sys-title-small-line-height: 1.25rem;--mat-sys-title-small-size: .875rem;--mat-sys-title-small-tracking: .006rem;--mat-sys-title-small-weight: 500}html{--mat-sys-corner-extra-large: 28px;--mat-sys-corner-extra-large-top: 28px 28px 0 0;--mat-sys-corner-extra-small: 4px;--mat-sys-corner-extra-small-top: 4px 4px 0 0;--mat-sys-corner-full: 9999px;--mat-sys-corner-large: 16px;--mat-sys-corner-large-end: 0 16px 16px 0;--mat-sys-corner-large-start: 16px 0 0 16px;--mat-sys-corner-large-top: 16px 16px 0 0;--mat-sys-corner-medium: 12px;--mat-sys-corner-none: 0;--mat-sys-corner-small: 8px}html{--mat-sys-dragged-state-layer-opacity: .16;--mat-sys-focus-state-layer-opacity: .12;--mat-sys-hover-state-layer-opacity: .08;--mat-sys-pressed-state-layer-opacity: .12}html,body{height:100%;background-color:#464646}body{margin:0;font-family:Roboto,Helvetica Neue,sans-serif}
</style><link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles.css"></noscript><style ng-app-id="ng">@charset "UTF-8";.light[_ngcontent-ng-c2910852728]{margin:0 auto;background-color:transparent;display:flex;justify-content:center;align-items:center}.light[_ngcontent-ng-c2910852728]:hover{animation:_ngcontent-ng-c2910852728_sway .7s ease infinite}@keyframes _ngcontent-ng-c2910852728_sway{0%{transform:rotate(-10deg)}50%{transform:rotate(10deg)}to{transform:rotate(-10deg)}}</style><style ng-app-id="ng">mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}</style><style ng-app-id="ng">.grid-header[_ngcontent-ng-c650343586]{background-color:#fff;color:#e9b44c;box-shadow:0 4px 8px #0000001a;max-height:100%;margin:0 auto;text-align:center;font-size:xx-large;font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;padding:2%}.example-container[_ngcontent-ng-c650343586]{width:20%;margin:2% 2% 2% 10%;display:inline-block;vertical-align:top;flex-grow:2}.example-list[_ngcontent-ng-c650343586]{min-height:60px;background:#fff;margin-left:-45%;display:block;padding:5px}.example-box[_ngcontent-ng-c650343586]{padding:20px 10px;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:default;background:#fff;font-size:14px;box-shadow:0 6px 10px #0003}.example-box[_ngcontent-ng-c650343586]:hover{transition:opacity 1.3s ease,transform 1.3s ease;box-shadow:2px 9px 12px #0003}.example-box[_ngcontent-ng-c650343586]   *[_ngcontent-ng-c650343586]{padding:5px}.cdk-drag-preview[_ngcontent-ng-c650343586]{box-sizing:border-box;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-ng-c650343586]{opacity:0}.cdk-drag-animating[_ngcontent-ng-c650343586]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-ng-c650343586]:last-child{border:none}.example-list.cdk-drop-list-dragging[_ngcontent-ng-c650343586]   .example-box[_ngcontent-ng-c650343586]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.styled_button[_ngcontent-ng-c650343586]{color:#fff;padding:10px 15px;background-color:#38d2d2;background-image:radial-gradient(93% 87% at 87% 89%,rgba(0,0,0,.23) 0%,transparent 86.18%),radial-gradient(66% 66% at 26% 20%,#ffffff8c,#fff0 69.79% 100%);box-shadow:inset -3px -3px 9px #ffffff40,inset 0 3px 9px #ffffff4d,inset 0 1px 1px #fff9,inset 0 -8px 36px #0000004d,inset 0 1px 5px #fff9,2px 19px 31px #0003;border-radius:14px;font-weight:700;font-size:16px;height:2%;border:0;user-select:none;-webkit-user-select:none;touch-action:manipulation;cursor:default}.button-53[_ngcontent-ng-c650343586]{background-color:#88efff;border:0 solid #e5e7eb;box-sizing:border-box;color:#000;font-family:ui-sans-serif,system-ui;font-weight:700;line-height:1.75rem;padding:.75rem 1.65rem;width:100%;max-width:60px;font-size:16px;height:2%;position:relative;display:flex;justify-content:center;align-items:center;cursor:default;transform:rotate(-2deg);user-select:none;-webkit-user-select:none;touch-action:manipulation;content:icon}.button-53[_ngcontent-ng-c650343586]:focus{outline:0}.button-53[_ngcontent-ng-c650343586]:after{content:"";position:absolute;border:1px solid #000000;bottom:4px;left:4px;width:calc(100% - 1px);height:calc(100% - 1px)}.button-53[_ngcontent-ng-c650343586]:hover:after{bottom:2px;left:2px}@media (min-width: 768px){.button-53[_ngcontent-ng-c650343586]{padding:.75rem 3rem;font-size:1.25rem}}.styled_button[_ngcontent-ng-c650343586]:hover{transition:opacity 1.3s ease,transform 1.3s ease;transform:scale(1.15)}.trash[_ngcontent-ng-c650343586]{color:gray;font-family:Material Icons}.trash[_ngcontent-ng-c650343586]:hover{color:red;transition:color .3s ease-out}.title1[_ngcontent-ng-c650343586], .title2[_ngcontent-ng-c650343586], .title3[_ngcontent-ng-c650343586]{text-decoration:underline}.todo[_ngcontent-ng-c650343586]{background-color:#dbf8f8;font-style:italic;font-family:cursive;font-size:large}.inprogress[_ngcontent-ng-c650343586]{background-color:#fcde9d;font-style:italic;font-family:cursive;font-size:large}.done[_ngcontent-ng-c650343586]{background-color:#d4fa9c;font-style:italic;font-family:cursive;font-size:large}.icon-pencil[_ngcontent-ng-c650343586]{z-index:3;position:absolute;margin-bottom:10px}</style><style ng-app-id="ng">.card[_ngcontent-ng-c564622870]{box-shadow:#0006 0 2px 4px,#0000004d 0 7px 13px -3px,#0003 0 -3px inset;border-radius:20px;margin:10%;padding:20px;display:flex;min-height:40%;overflow:hidden;background-color:#fff}</style></head>
<body class="mat-typography"><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],[]);</script>
  <app-root _nghost-ng-c2910852728 ng-version="19.0.4" ngh="2" ng-server-context="ssg"><mat-icon _ngcontent-ng-c2910852728 role="img" class="mat-icon notranslate light material-icons mat-ligature-font mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" ngh="0" jsaction="click:;">light</mat-icon><router-outlet _ngcontent-ng-c2910852728></router-outlet><app-dashboard _nghost-ng-c650343586 ngh="1"><app-card _ngcontent-ng-c650343586 cdkdroplistgroup _nghost-ng-c564622870 ngh="0"><div _ngcontent-ng-c564622870 class="card"><button _ngcontent-ng-c650343586 class="button-53" jsaction="click:;"><mat-icon _ngcontent-ng-c650343586 role="img" class="mat-icon notranslate icon-pencil material-icons mat-ligature-font mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" ngh="0">edit</mat-icon></button><div _ngcontent-ng-c650343586 class="example-container"><h2 _ngcontent-ng-c650343586 style="text-decoration: underline; font-family: serif;">To do</h2><div _ngcontent-ng-c650343586 cdkdroplist class="cdk-drop-list example-list" id="cdk-drop-list-0"><!----></div></div><div _ngcontent-ng-c650343586 class="example-container"><h2 _ngcontent-ng-c650343586 style="text-decoration: underline; font-family: serif;">In Progress</h2><div _ngcontent-ng-c650343586 cdkdroplist class="cdk-drop-list example-list" id="cdk-drop-list-1"><!----></div></div><div _ngcontent-ng-c650343586 class="example-container"><h2 _ngcontent-ng-c650343586 style="text-decoration: underline; font-family: serif;">Done</h2><div _ngcontent-ng-c650343586 cdkdroplist class="cdk-drop-list example-list" id="cdk-drop-list-2"><!----></div></div></div></app-card></app-dashboard><!----></app-root>
<link rel="modulepreload" href="chunk-XHR6PMZ6.js"><script src="polyfills.js" type="module"></script><script src="main.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{},{"n":{"1":"0f2","3":"2f"},"t":{"9":"t0","15":"t1","21":"t2"},"c":{"9":[],"15":[],"21":[]}},{"n":{"1":"0f"},"c":{"2":[{"i":"c650343586","r":1}]}}]}</script></body></html>`;