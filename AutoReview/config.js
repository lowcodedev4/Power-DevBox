let sReviewTemplate ='<!doctype html> <html lang="en"> <head> <meta charset="utf-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1"> <title>AutoReview Review</title> <style> html, body { height: 100%; font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; } a { color: black; } .yellowFont{ color:#f8c91c; } .padding{ padding-left: 12px; } ol { list-style-image: url("../img/old flow grey fill.svg"); margin:0px; margin-left: 10px; padding:0px; list-style-position: inside; } li { padding:2px; } html, body, input, textarea, buttons { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004); } table{ word-break: break-all; } td,th { overflow-wrap: break-word !important; max-width: 200px; } .smallIcon{ width:16px } .topPadding{ padding-top: 10px; } .topCardsScroll{ height:300px; overflow-y:auto; overflow-wrap: break-word; } .topCardsScroll p { overflow-wrap: break-word; } #configRef{ font-size:10px; position: absolute; top: 0px; margin-right: 5px; right:0px; color:black; } .filters{ border-style: none !important; font-size: small; } Button{ background-color:#044288 !important; } ::placeholder{ color:#242627; } #overflowClass{ overflow-wrap: break-word; font-size: small; color:#242627; } .midBlue{ background-color:#044288 !important; } #sidebar2 { background-color: #044288; padding: 15px; position: fixed; top: 0; bottom: 0; width: 50px; height: 100%; padding-top: 30px; } .rotateDIV{ -webkit-transform: rotate(270deg); -moz-transform: rotate(270deg); -o-transform: rotate(270deg); -ms-transform: rotate(270deg); transform: rotate(270deg) !important; position: absolute; bottom: 10px; left: 20px; background: none; transform-origin: 0 0; color: white; width:50vh; font-size:1.5vh; } #sidebar { background-color: #044288; padding: 15px; position: fixed; top: 0; bottom: 0; width: 180px; height: 100%; padding-top: 30px; } #content2 { margin-left: 90px; } .modal { display: none; /* Hidden by default */ position: fixed; /* Stay in place */ z-index: 1; /* Sit on top */ left: 0; top: 0; width: 100%; /* Full width */ height: 100%; /* Full height */ overflow: auto; /* Enable scroll if needed */ background-color: rgb(0,0,0); /* Fallback color */ background-color: rgba(0,0,0,0.4); /* Black w/ opacity */ } /* Modal Content/Box */ .modal-content { background-color: #fefefe; margin: 15% auto; /* 15% from the top and centered */ padding: 20px; border: 1px solid #888; width: 80%; /* Could be more or less, depending on screen size */ } /* The Close Button */ .close { color: #aaa; float: right; font-size: 28px; font-weight: bold; } .close:hover, .close:focus { color: black; text-decoration: none; cursor: pointer; } .slider{ width:90%; position:fixed; } .grid-container { display: grid; grid-gap: 5px; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); width:100%; justify-content: center; } .grid-item { text-align: center; min-width:200px; } .sticky{ position: -webkit-sticky; position: sticky; top: 0; } html { line-height: 1.15; -webkit-text-size-adjust: 100% } body { margin: 0 } h1 { font-size: 2em; margin: .67em 0 } hr { -webkit-box-sizing: content-box; box-sizing: content-box; height: 0; overflow: visible } pre { font-family: monospace, monospace; font-size: 1em } a { background-color: transparent } abbr[title] { border-bottom: none; text-decoration: underline; -webkit-text-decoration: underline dotted; text-decoration: underline dotted } b, strong { font-weight: bolder } code, kbd, samp { font-family: monospace, monospace; font-size: 1em } small { font-size: 80% } sub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline } sub { bottom: -.25em } sup { top: -.5em } img { border-style: none } button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; margin: 0 } button, input { overflow: visible } button, select { text-transform: none } [type=button], [type=reset], [type=submit], button { -webkit-appearance: button } [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner, button::-moz-focus-inner { border-style: none; padding: 0 } [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring, button:-moz-focusring { outline: 1px dotted ButtonText } fieldset { padding: .35em .75em .625em } legend { -webkit-box-sizing: border-box; box-sizing: border-box; color: inherit; display: table; max-width: 100%; padding: 0; white-space: normal } progress { vertical-align: baseline } textarea { overflow: auto } [type=checkbox], [type=radio] { -webkit-box-sizing: border-box; box-sizing: border-box; padding: 0 } [type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button { height: auto } [type=search] { -webkit-appearance: textfield; outline-offset: -2px } [type=search]::-webkit-search-decoration { -webkit-appearance: none } ::-webkit-file-upload-button { -webkit-appearance: button; font: inherit } details { display: block } summary { display: list-item } template { display: none } [hidden] { display: none } html { -webkit-tap-highlight-color: transparent } body { font-family: Arial, Verdana, Tahoma; font-size: 14px; font-weight: 400; line-height: 1.429; color: rgba(0, 0, 0, .87); background-color: #FFF } a { color: #2196F3; text-decoration: none } a:focus, a:hover { text-decoration: underline } a:focus { outline: thin dotted; outline: 5px auto -webkit-focus-ring-color; outline-offset: -2px } p { margin: 0 0 10px } ol, ul { margin-top: 0; margin-bottom: 10px } hr { margin-top: 20px; margin-bottom: 20px; border: 0; height: 1px; background-color: rgba(0, 0, 0, .12) } strong { font-weight: 700 } abbr[title] { cursor: help; -webkit-text-decoration-color: #2196F3; text-decoration-color: #2196F3 } h1, h2, h3 { margin-top: 20px; margin-bottom: 10px } h4, h5, h6 { margin-top: 10px; margin-bottom: 10px } .mui--appbar-height { height: 56px } .mui--appbar-min-height, .mui-appbar { min-height: 56px } .mui--appbar-line-height { line-height: 56px } .mui--appbar-top { top: 56px } @media (orientation:landscape) and (max-height:480px) { .mui--appbar-height { height: 48px } .mui--appbar-min-height, .mui-appbar { min-height: 48px } .mui--appbar-line-height { line-height: 48px } .mui--appbar-top { top: 48px } } @media (min-width:480px) { .mui--appbar-height { height: 64px } .mui--appbar-min-height, .mui-appbar { min-height: 64px } .mui--appbar-line-height { line-height: 64px } .mui--appbar-top { top: 64px } } .mui-appbar { background-color: #2196F3; color: #FFF } .mui-btn { font-weight: 500; font-size: 14px; line-height: 18px; text-transform: uppercase; color: rgba(0, 0, 0, .87); background-color: #FFF; -webkit-transition: all .2s ease-in-out; transition: all .2s ease-in-out; display: inline-block; height: 36px; padding: 0 26px; margin: 6px 0; border: none; border-radius: 2px; cursor: pointer; -ms-touch-action: manipulation; touch-action: manipulation; background-image: none; text-align: center; line-height: 36px; vertical-align: middle; white-space: nowrap; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; font-size: 14px; font-family: inherit; letter-spacing: .03em; position: relative; overflow: hidden } .mui-btn:active, .mui-btn:focus, .mui-btn:hover { color: rgba(0, 0, 0, .87); background-color: #fff } .mui-btn[disabled]:active, .mui-btn[disabled]:focus, .mui-btn[disabled]:hover { color: rgba(0, 0, 0, .87); background-color: #FFF } .mui-btn.mui-btn--flat { color: rgba(0, 0, 0, .87); background-color: transparent } .mui-btn.mui-btn--flat:active, .mui-btn.mui-btn--flat:focus, .mui-btn.mui-btn--flat:hover { color: rgba(0, 0, 0, .87); background-color: #f2f2f2 } .mui-btn.mui-btn--flat[disabled]:active, .mui-btn.mui-btn--flat[disabled]:focus, .mui-btn.mui-btn--flat[disabled]:hover { color: rgba(0, 0, 0, .87); background-color: transparent } .mui-btn:active, .mui-btn:focus, .mui-btn:hover { outline: 0; text-decoration: none; color: rgba(0, 0, 0, .87) } .mui-btn:focus, .mui-btn:hover { -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, .12), 0 2px 2px rgba(0, 0, 0, .2); box-shadow: 0 0 2px rgba(0, 0, 0, .12), 0 2px 2px rgba(0, 0, 0, .2) } @media all and (-ms-high-contrast:none), (-ms-high-contrast:active) { .mui-btn:focus, .mui-btn:hover { -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, .12), -1px 0 2px rgba(0, 0, 0, .12), 0 0 2px rgba(0, 0, 0, .12), 0 2px 2px rgba(0, 0, 0, .2); box-shadow: 0 -1px 2px rgba(0, 0, 0, .12), -1px 0 2px rgba(0, 0, 0, .12), 0 0 2px rgba(0, 0, 0, .12), 0 2px 2px rgba(0, 0, 0, .2) } } @supports (-ms-ime-align:auto) { .mui-btn:focus, .mui-btn:hover { -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, .12), -1px 0 2px rgba(0, 0, 0, .12), 0 0 2px rgba(0, 0, 0, .12), 0 2px 2px rgba(0, 0, 0, .2); box-shadow: 0 -1px 2px rgba(0, 0, 0, .12), -1px 0 2px rgba(0, 0, 0, .12), 0 0 2px rgba(0, 0, 0, .12), 0 2px 2px rgba(0, 0, 0, .2) } } .mui-btn:active:hover { -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, .12), 1px 3px 4px rgba(0, 0, 0, .2); box-shadow: 0 0 4px rgba(0, 0, 0, .12), 1px 3px 4px rgba(0, 0, 0, .2) } @media all and (-ms-high-contrast:none), (-ms-high-contrast:active) { .mui-btn:active:hover { -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, .12), -1px 0 2px rgba(0, 0, 0, .12), 0 0 4px rgba(0, 0, 0, .12), 1px 3px 4px rgba(0, 0, 0, .2); box-shadow: 0 -1px 2px rgba(0, 0, 0, .12), -1px 0 2px rgba(0, 0, 0, .12), 0 0 4px rgba(0, 0, 0, .12), 1px 3px 4px rgba(0, 0, 0, .2) } } @supports (-ms-ime-align:auto) { .mui-btn:active:hover { -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, .12), -1px 0 2px rgba(0, 0, 0, .12), 0 0 4px rgba(0, 0, 0, .12), 1px 3px 4px rgba(0, 0, 0, .2); box-shadow: 0 -1px 2px rgba(0, 0, 0, .12), -1px 0 2px rgba(0, 0, 0, .12), 0 0 4px rgba(0, 0, 0, .12), 1px 3px 4px rgba(0, 0, 0, .2) } } .mui-btn.mui--is-disabled, .mui-btn:disabled { cursor: not-allowed; pointer-events: none; opacity: .6; -webkit-box-shadow: none; box-shadow: none } .mui-btn+.mui-btn { margin-left: 8px } .mui-btn--flat { background-color: transparent } .mui-btn--flat:active, .mui-btn--flat:active:hover, .mui-btn--flat:focus, .mui-btn--flat:hover { -webkit-box-shadow: none; box-shadow: none; background-color: #f2f2f2 } .mui-btn--fab, .mui-btn--raised { -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, .12), 0 2px 2px rgba(0, 0, 0, .2); box-shadow: 0 0 2px rgba(0, 0, 0, .12), 0 2px 2px rgba(0, 0, 0, .2) } @media all and (-ms-high-contrast:none), (-ms-high-contrast:active) { .mui-btn--fab, .mui-btn--raised { -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, .12), -1px 0 2px rgba(0, 0, 0, .12), 0 0 2px rgba(0, 0, 0, .12), 0 2px 2px rgba(0, 0, 0, .2); box-shadow: 0 -1px 2px rgba(0, 0, 0, .12), -1px 0 2px rgba(0, 0, 0, .12), 0 0 2px rgba(0, 0, 0, .12), 0 2px 2px rgba(0, 0, 0, .2) } } @supports (-ms-ime-align:auto) { .mui-btn--fab, .mui-btn--raised { -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, .12), -1px 0 2px rgba(0, 0, 0, .12), 0 0 2px rgba(0, 0, 0, .12), 0 2px 2px rgba(0, 0, 0, .2); box-shadow: 0 -1px 2px rgba(0, 0, 0, .12), -1px 0 2px rgba(0, 0, 0, .12), 0 0 2px rgba(0, 0, 0, .12), 0 2px 2px rgba(0, 0, 0, .2) } } .mui-btn--fab:active, .mui-btn--raised:active { -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, .12), 1px 3px 4px rgba(0, 0, 0, .2); box-shadow: 0 0 4px rgba(0, 0, 0, .12), 1px 3px 4px rgba(0, 0, 0, .2) } @media all and (-ms-high-contrast:none), (-ms-high-contrast:active) { .mui-btn--fab:active, .mui-btn--raised:active { -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, .12), -1px 0 2px rgba(0, 0, 0, .12), 0 0 4px rgba(0, 0, 0, .12), 1px 3px 4px rgba(0, 0, 0, .2); box-shadow: 0 -1px 2px rgba(0, 0, 0, .12), -1px 0 2px rgba(0, 0, 0, .12), 0 0 4px rgba(0, 0, 0, .12), 1px 3px 4px rgba(0, 0, 0, .2) } } @supports (-ms-ime-align:auto) { .mui-btn--fab:active, .mui-btn--raised:active { -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, .12), -1px 0 2px rgba(0, 0, 0, .12), 0 0 4px rgba(0, 0, 0, .12), 1px 3px 4px rgba(0, 0, 0, .2); box-shadow: 0 -1px 2px rgba(0, 0, 0, .12), -1px 0 2px rgba(0, 0, 0, .12), 0 0 4px rgba(0, 0, 0, .12), 1px 3px 4px rgba(0, 0, 0, .2) } } .mui-btn--fab { position: relative; padding: 0; width: 55px; height: 55px; line-height: 55px; border-radius: 50%; z-index: 1 } .mui-btn--primary { color: #FFF; background-color: #2196F3 } .mui-btn--primary:active, .mui-btn--primary:focus, .mui-btn--primary:hover { color: #FFF; background-color: #39a1f4 } .mui-btn--primary[disabled]:active, .mui-btn--primary[disabled]:focus, .mui-btn--primary[disabled]:hover { color: #FFF; background-color: #2196F3 } .mui-btn--primary.mui-btn--flat { color: #2196F3; background-color: transparent } .mui-btn--primary.mui-btn--flat:active, .mui-btn--primary.mui-btn--flat:focus, .mui-btn--primary.mui-btn--flat:hover { color: #2196F3; background-color: #f2f2f2 } .mui-btn--primary.mui-btn--flat[disabled]:active, .mui-btn--primary.mui-btn--flat[disabled]:focus, .mui-btn--primary.mui-btn--flat[disabled]:hover { color: #2196F3; background-color: transparent } .mui-btn--dark { color: #FFF; background-color: #424242 } .mui-btn--dark:active, .mui-btn--dark:focus, .mui-btn--dark:hover { color: #FFF; background-color: #4f4f4f } .mui-btn--dark[disabled]:active, .mui-btn--dark[disabled]:focus, .mui-btn--dark[disabled]:hover { color: #FFF; background-color: #424242 } .mui-btn--dark.mui-btn--flat { color: #424242; background-color: transparent } .mui-btn--dark.mui-btn--flat:active, .mui-btn--dark.mui-btn--flat:focus, .mui-btn--dark.mui-btn--flat:hover { color: #424242; background-color: #f2f2f2 } .mui-btn--dark.mui-btn--flat[disabled]:active, .mui-btn--dark.mui-btn--flat[disabled]:focus, .mui-btn--dark.mui-btn--flat[disabled]:hover { color: #424242; background-color: transparent } .mui-btn--danger { color: #FFF; background-color: #F44336 } .mui-btn--danger:active, .mui-btn--danger:focus, .mui-btn--danger:hover { color: #FFF; background-color: #f55a4e } .mui-btn--danger[disabled]:active, .mui-btn--danger[disabled]:focus, .mui-btn--danger[disabled]:hover { color: #FFF; background-color: #F44336 } .mui-btn--danger.mui-btn--flat { color: #F44336; background-color: transparent } .mui-btn--danger.mui-btn--flat:active, .mui-btn--danger.mui-btn--flat:focus, .mui-btn--danger.mui-btn--flat:hover { color: #F44336; background-color: #f2f2f2 } .mui-btn--danger.mui-btn--flat[disabled]:active, .mui-btn--danger.mui-btn--flat[disabled]:focus, .mui-btn--danger.mui-btn--flat[disabled]:hover { color: #F44336; background-color: transparent } .mui-btn--accent { color: #FFF; background-color: #FF4081 } .mui-btn--accent:active, .mui-btn--accent:focus, .mui-btn--accent:hover { color: #FFF; background-color: #ff5a92 } .mui-btn--accent[disabled]:active, .mui-btn--accent[disabled]:focus, .mui-btn--accent[disabled]:hover { color: #FFF; background-color: #FF4081 } .mui-btn--accent.mui-btn--flat { color: #FF4081; background-color: transparent } .mui-btn--accent.mui-btn--flat:active, .mui-btn--accent.mui-btn--flat:focus, .mui-btn--accent.mui-btn--flat:hover { color: #FF4081; background-color: #f2f2f2 } .mui-btn--accent.mui-btn--flat[disabled]:active, .mui-btn--accent.mui-btn--flat[disabled]:focus, .mui-btn--accent.mui-btn--flat[disabled]:hover { color: #FF4081; background-color: transparent } .mui-btn--small { height: 30.6px; line-height: 30.6px; padding: 0 16px; font-size: 13px } .mui-btn--large { height: 54px; line-height: 54px; padding: 0 26px; font-size: 14px } .mui-btn--fab.mui-btn--small { width: 44px; height: 44px; line-height: 44px } .mui-btn--fab.mui-btn--large { width: 75px; height: 75px; line-height: 75px } .mui-checkbox, .mui-radio { position: relative; display: block; margin-top: 10px; margin-bottom: 10px } .mui-checkbox>label, .mui-radio>label { min-height: 20px; padding-left: 20px; margin-bottom: 0; font-weight: 400; cursor: pointer } .mui-checkbox input:disabled, .mui-radio input:disabled { cursor: not-allowed } .mui-checkbox input:focus, .mui-radio input:focus { outline: thin dotted; outline: 5px auto -webkit-focus-ring-color; outline-offset: -2px } .mui-checkbox--inline>label>input[type=checkbox], .mui-checkbox>label>input[type=checkbox], .mui-radio--inline>label>input[type=radio], .mui-radio>label>input[type=radio] { position: absolute; margin-left: -20px; margin-top: 4px } .mui-checkbox+.mui-checkbox, .mui-radio+.mui-radio { margin-top: -5px } .mui-checkbox--inline, .mui-radio--inline { display: inline-block; padding-left: 20px; margin-bottom: 0; vertical-align: middle; font-weight: 400; cursor: pointer } .mui-checkbox--inline>input[type=checkbox], .mui-checkbox--inline>input[type=radio], .mui-checkbox--inline>label>input[type=checkbox], .mui-checkbox--inline>label>input[type=radio], .mui-radio--inline>input[type=checkbox], .mui-radio--inline>input[type=radio], .mui-radio--inline>label>input[type=checkbox], .mui-radio--inline>label>input[type=radio] { margin: 4px 0 0; line-height: normal } .mui-checkbox--inline+.mui-checkbox--inline, .mui-radio--inline+.mui-radio--inline { margin-top: 0; margin-left: 10px } .mui-container { -webkit-box-sizing: border-box; box-sizing: border-box; margin-right: auto; margin-left: auto; padding-left: 15px; padding-right: 15px } .mui-container:after, .mui-container:before { content: " "; display: table } .mui-container:after { clear: both } @media (min-width:544px) { .mui-container { max-width: 570px } } @media (min-width:768px) { .mui-container { max-width: 740px } } @media (min-width:992px) { .mui-container { max-width: 960px } } @media (min-width:1200px) { .mui-container { max-width: 1170px } } .mui-container-fluid { -webkit-box-sizing: border-box; box-sizing: border-box; margin-right: 50px; margin-left: 50px; } .mui-container-fluid:after, .mui-container-fluid:before { content: " "; display: table } .mui-container-fluid:after { clear: both } .mui-divider { display: block; height: 1px; background-color: rgba(0, 0, 0, .12); margin-bottom: 10px; } .mui--divider-top { border-top: 1px solid rgba(0, 0, 0, .12) } .mui--divider-bottom { border-bottom: 1px solid rgba(0, 0, 0, .12) } .mui--divider-left { border-left: 1px solid rgba(0, 0, 0, .12) } .mui--divider-right { border-right: 1px solid rgba(0, 0, 0, .12) } .mui-dropdown { display: inline-block; position: relative } [data-mui-toggle=dropdown] { outline: 0 } .mui-dropdown__menu { position: absolute; display: none; min-width: 160px; padding: 5px 0; margin: 2px 0 0; list-style: none; font-size: 14px; text-align: left; background-color: #FFF; border-radius: 2px; z-index: 1; background-clip: padding-box } @media all and (-ms-high-contrast:none), (-ms-high-contrast:active) { .mui-dropdown__menu { border-top: 1px solid rgba(0, 0, 0, .12); border-left: 1px solid rgba(0, 0, 0, .12) } } @supports (-ms-ime-align:auto) { .mui-dropdown__menu { border-top: 1px solid rgba(0, 0, 0, .12); border-left: 1px solid rgba(0, 0, 0, .12) } } .mui-dropdown__menu.mui--is-open { display: block } .mui-dropdown__menu>li>a { display: block; padding: 3px 20px; clear: both; font-weight: 400; line-height: 1.429; color: rgba(0, 0, 0, .87); text-decoration: none; white-space: nowrap } .mui-dropdown__menu>li>a:focus, .mui-dropdown__menu>li>a:hover { text-decoration: none; color: rgba(0, 0, 0, .87); background-color: #EEE } .mui-dropdown__menu>.mui--is-disabled>a, .mui-dropdown__menu>.mui--is-disabled>a:focus, .mui-dropdown__menu>.mui--is-disabled>a:hover { color: #EEE } .mui-dropdown__menu>.mui--is-disabled>a:focus, .mui-dropdown__menu>.mui--is-disabled>a:hover { text-decoration: none; background-color: transparent; background-image: none; cursor: not-allowed } .mui-dropdown__menu--right { left: auto; right: 0 } .mui-dropdown--up>.mui-dropdown__menu { margin: 0 0 2px } .mui-dropdown--right>.mui-dropdown__menu { margin: 0 0 0 2px } .mui-dropdown--left>.mui-dropdown__menu { margin: 0 2px 0 0 } .mui-form legend { display: block; width: 100%; padding: 0; margin-bottom: 10px; font-size: 21px; color: rgba(0, 0, 0, .87); line-height: inherit; border: 0 } .mui-form fieldset { border: 0; padding: 0; margin: 0 0 20px 0 } @media (min-width:544px) { .mui-form--inline .mui-textfield { display: inline-block; vertical-align: bottom; margin-bottom: 0 } .mui-form--inline .mui-checkbox, .mui-form--inline .mui-radio { display: inline-block; margin-top: 0; margin-bottom: 0; vertical-align: middle } .mui-form--inline .mui-checkbox>label, .mui-form--inline .mui-radio>label { padding-left: 0 } .mui-form--inline .mui-checkbox>label>input[type=checkbox], .mui-form--inline .mui-radio>label>input[type=radio] { position: relative; margin-left: 0 } .mui-form--inline .mui-select { display: inline-block; vertical-align: bottom; margin-bottom: 0 } .mui-form--inline .mui-btn { margin-bottom: 0; margin-top: 0; vertical-align: bottom } } .mui-row { margin-left: -15px; margin-right: -15px } .mui-row:after, .mui-row:before { content: " "; display: table } .mui-row:after { clear: both } .mui-col-lg-1, .mui-col-lg-10, .mui-col-lg-11, .mui-col-lg-12, .mui-col-lg-2, .mui-col-lg-3, .mui-col-lg-4, .mui-col-lg-5, .mui-col-lg-6, .mui-col-lg-7, .mui-col-lg-8, .mui-col-lg-9, .mui-col-md-1, .mui-col-md-10, .mui-col-md-11, .mui-col-md-12, .mui-col-md-2, .mui-col-md-3, .mui-col-md-4, .mui-col-md-5, .mui-col-md-6, .mui-col-md-7, .mui-col-md-8, .mui-col-md-9, .mui-col-sm-1, .mui-col-sm-10, .mui-col-sm-11, .mui-col-sm-12, .mui-col-sm-2, .mui-col-sm-3, .mui-col-sm-4, .mui-col-sm-5, .mui-col-sm-6, .mui-col-sm-7, .mui-col-sm-8, .mui-col-sm-9, .mui-col-xs-1, .mui-col-xs-10, .mui-col-xs-11, .mui-col-xs-12, .mui-col-xs-2, .mui-col-xs-3, .mui-col-xs-4, .mui-col-xs-5, .mui-col-xs-6, .mui-col-xs-7, .mui-col-xs-8, .mui-col-xs-9 { -webkit-box-sizing: border-box; box-sizing: border-box; min-height: 1px; padding-left: 15px; padding-right: 15px } .mui-col-xs-1, .mui-col-xs-10, .mui-col-xs-11, .mui-col-xs-12, .mui-col-xs-2, .mui-col-xs-3, .mui-col-xs-4, .mui-col-xs-5, .mui-col-xs-6, .mui-col-xs-7, .mui-col-xs-8, .mui-col-xs-9 { float: left } .mui-col-xs-1 { width: 8.3333333333% } .mui-col-xs-2 { width: 16.6666666667% } .mui-col-xs-3 { width: 25% } .mui-col-xs-4 { width: 33.3333333333% } .mui-col-xs-5 { width: 41.6666666667% } .mui-col-xs-6 { width: 50% } .mui-col-xs-7 { width: 58.3333333333% } .mui-col-xs-8 { width: 66.6666666667% } .mui-col-xs-9 { width: 75% } .mui-col-xs-10 { width: 83.3333333333% } .mui-col-xs-11 { width: 91.6666666667% } .mui-col-xs-12 { width: 100% } .mui-col-xs-offset-0 { margin-left: 0 } .mui-col-xs-offset-1 { margin-left: 8.3333333333% } .mui-col-xs-offset-2 { margin-left: 16.6666666667% } .mui-col-xs-offset-3 { margin-left: 25% } .mui-col-xs-offset-4 { margin-left: 33.3333333333% } .mui-col-xs-offset-5 { margin-left: 41.6666666667% } .mui-col-xs-offset-6 { margin-left: 50% } .mui-col-xs-offset-7 { margin-left: 58.3333333333% } .mui-col-xs-offset-8 { margin-left: 66.6666666667% } .mui-col-xs-offset-9 { margin-left: 75% } .mui-col-xs-offset-10 { margin-left: 83.3333333333% } .mui-col-xs-offset-11 { margin-left: 91.6666666667% } .mui-col-xs-offset-12 { margin-left: 100% } @media (min-width:544px) { .mui-col-sm-1, .mui-col-sm-10, .mui-col-sm-11, .mui-col-sm-12, .mui-col-sm-2, .mui-col-sm-3, .mui-col-sm-4, .mui-col-sm-5, .mui-col-sm-6, .mui-col-sm-7, .mui-col-sm-8, .mui-col-sm-9 { float: left } .mui-col-sm-1 { width: 8.3333333333% } .mui-col-sm-2 { width: 16.6666666667% } .mui-col-sm-3 { width: 25% } .mui-col-sm-4 { width: 33.3333333333% } .mui-col-sm-5 { width: 41.6666666667% } .mui-col-sm-6 { width: 50% } .mui-col-sm-7 { width: 58.3333333333% } .mui-col-sm-8 { width: 66.6666666667% } .mui-col-sm-9 { width: 75% } .mui-col-sm-10 { width: 83.3333333333% } .mui-col-sm-11 { width: 91.6666666667% } .mui-col-sm-12 { width: 100% } .mui-col-sm-offset-0 { margin-left: 0 } .mui-col-sm-offset-1 { margin-left: 8.3333333333% } .mui-col-sm-offset-2 { margin-left: 16.6666666667% } .mui-col-sm-offset-3 { margin-left: 25% } .mui-col-sm-offset-4 { margin-left: 33.3333333333% } .mui-col-sm-offset-5 { margin-left: 41.6666666667% } .mui-col-sm-offset-6 { margin-left: 50% } .mui-col-sm-offset-7 { margin-left: 58.3333333333% } .mui-col-sm-offset-8 { margin-left: 66.6666666667% } .mui-col-sm-offset-9 { margin-left: 75% } .mui-col-sm-offset-10 { margin-left: 83.3333333333% } .mui-col-sm-offset-11 { margin-left: 91.6666666667% } .mui-col-sm-offset-12 { margin-left: 100% } } @media (min-width:768px) { .mui-col-md-1, .mui-col-md-10, .mui-col-md-11, .mui-col-md-12, .mui-col-md-2, .mui-col-md-3, .mui-col-md-4, .mui-col-md-5, .mui-col-md-6, .mui-col-md-7, .mui-col-md-8, .mui-col-md-9 { float: left } .mui-col-md-1 { width: 8.3333333333% } .mui-col-md-2 { width: 16.6666666667% } .mui-col-md-3 { width: 25% } .mui-col-md-4 { width: 33.3333333333% } .mui-col-md-5 { width: 41.6666666667% } .mui-col-md-6 { width: 50% } .mui-col-md-7 { width: 58.3333333333% } .mui-col-md-8 { width: 66.6666666667% } .mui-col-md-9 { width: 75% } .mui-col-md-10 { width: 83.3333333333% } .mui-col-md-11 { width: 91.6666666667% } .mui-col-md-12 { width: 100% } .mui-col-md-offset-0 { margin-left: 0 } .mui-col-md-offset-1 { margin-left: 8.3333333333% } .mui-col-md-offset-2 { margin-left: 16.6666666667% } .mui-col-md-offset-3 { margin-left: 25% } .mui-col-md-offset-4 { margin-left: 33.3333333333% } .mui-col-md-offset-5 { margin-left: 41.6666666667% } .mui-col-md-offset-6 { margin-left: 50% } .mui-col-md-offset-7 { margin-left: 58.3333333333% } .mui-col-md-offset-8 { margin-left: 66.6666666667% } .mui-col-md-offset-9 { margin-left: 75% } .mui-col-md-offset-10 { margin-left: 83.3333333333% } .mui-col-md-offset-11 { margin-left: 91.6666666667% } .mui-col-md-offset-12 { margin-left: 100% } } @media (min-width:992px) { .mui-col-lg-1, .mui-col-lg-10, .mui-col-lg-11, .mui-col-lg-12, .mui-col-lg-2, .mui-col-lg-3, .mui-col-lg-4, .mui-col-lg-5, .mui-col-lg-6, .mui-col-lg-7, .mui-col-lg-8, .mui-col-lg-9 { float: left } .mui-col-lg-1 { width: 8.3333333333% } .mui-col-lg-2 { width: 16.6666666667% } .mui-col-lg-3 { width: 25% } .mui-col-lg-4 { width: 33.3333333333% } .mui-col-lg-5 { width: 41.6666666667% } .mui-col-lg-6 { width: 50% } .mui-col-lg-7 { width: 58.3333333333% } .mui-col-lg-8 { width: 66.6666666667% } .mui-col-lg-9 { width: 75% } .mui-col-lg-10 { width: 83.3333333333% } .mui-col-lg-11 { width: 91.6666666667% } .mui-col-lg-12 { width: 100% } .mui-col-lg-offset-0 { margin-left: 0 } .mui-col-lg-offset-1 { margin-left: 8.3333333333% } .mui-col-lg-offset-2 { margin-left: 16.6666666667% } .mui-col-lg-offset-3 { margin-left: 25% } .mui-col-lg-offset-4 { margin-left: 33.3333333333% } .mui-col-lg-offset-5 { margin-left: 41.6666666667% } .mui-col-lg-offset-6 { margin-left: 50% } .mui-col-lg-offset-7 { margin-left: 58.3333333333% } .mui-col-lg-offset-8 { margin-left: 66.6666666667% } .mui-col-lg-offset-9 { margin-left: 75% } .mui-col-lg-offset-10 { margin-left: 83.3333333333% } .mui-col-lg-offset-11 { margin-left: 91.6666666667% } .mui-col-lg-offset-12 { margin-left: 100% } } @media (min-width:1200px) { .mui-col-xl-1, .mui-col-xl-10, .mui-col-xl-11, .mui-col-xl-12, .mui-col-xl-2, .mui-col-xl-3, .mui-col-xl-4, .mui-col-xl-5, .mui-col-xl-6, .mui-col-xl-7, .mui-col-xl-8, .mui-col-xl-9 { float: left } .mui-col-xl-1 { width: 8.3333333333% } .mui-col-xl-2 { width: 16.6666666667% } .mui-col-xl-3 { width: 25% } .mui-col-xl-4 { width: 33.3333333333% } .mui-col-xl-5 { width: 41.6666666667% } .mui-col-xl-6 { width: 50% } .mui-col-xl-7 { width: 58.3333333333% } .mui-col-xl-8 { width: 66.6666666667% } .mui-col-xl-9 { width: 75% } .mui-col-xl-10 { width: 83.3333333333% } .mui-col-xl-11 { width: 91.6666666667% } .mui-col-xl-12 { width: 100% } .mui-col-xl-offset-0 { margin-left: 0 } .mui-col-xl-offset-1 { margin-left: 8.3333333333% } .mui-col-xl-offset-2 { margin-left: 16.6666666667% } .mui-col-xl-offset-3 { margin-left: 25% } .mui-col-xl-offset-4 { margin-left: 33.3333333333% } .mui-col-xl-offset-5 { margin-left: 41.6666666667% } .mui-col-xl-offset-6 { margin-left: 50% } .mui-col-xl-offset-7 { margin-left: 58.3333333333% } .mui-col-xl-offset-8 { margin-left: 66.6666666667% } .mui-col-xl-offset-9 { margin-left: 75% } .mui-col-xl-offset-10 { margin-left: 83.3333333333% } .mui-col-xl-offset-11 { margin-left: 91.6666666667% } .mui-col-xl-offset-12 { margin-left: 100% } } .mui-panel { padding-top: 15px; padding-bottom: 15px; margin-bottom: 0; border-radius: 0; border: 2px solid rgba(172, 171, 171, 0.753); background-color: #FFF; } .mui-panel:after, .mui-panel:before { content: " "; display: table } .mui-panel:after { clear: both } @media all and (-ms-high-contrast:none), (-ms-high-contrast:active) { .mui-panel { -webkit-box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, .12), -1px 0 2px 0 rgba(0, 0, 0, .12), 0 2px 2px 0 rgba(0, 0, 0, .16), 0 0 2px 0 rgba(0, 0, 0, .12); box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, .12), -1px 0 2px 0 rgba(0, 0, 0, .12), 0 2px 2px 0 rgba(0, 0, 0, .16), 0 0 2px 0 rgba(0, 0, 0, .12) } } @supports (-ms-ime-align:auto) { .mui-panel { -webkit-box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, .12), -1px 0 2px 0 rgba(0, 0, 0, .12), 0 2px 2px 0 rgba(0, 0, 0, .16), 0 0 2px 0 rgba(0, 0, 0, .12); box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, .12), -1px 0 2px 0 rgba(0, 0, 0, .12), 0 2px 2px 0 rgba(0, 0, 0, .16), 0 0 2px 0 rgba(0, 0, 0, .12) } } .mui-select { display: block; padding-top: 15px; margin-bottom: 20px; position: relative } .mui-select:focus { outline: 0 } .mui-select:focus>select { height: calc(32px + 1px); margin-bottom: -1px; border-color: #2196F3; border-width: 2px } .mui-select>select { display: block; height: 32px; width: 100%; appearance: none; -webkit-appearance: none; -moz-appearance: none; outline: 0; border: none; border-bottom: 1px solid rgba(0, 0, 0, .26); border-radius: 0; -webkit-box-shadow: none; box-shadow: none; background-color: transparent; background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNiIgd2lkdGg9IjEwIj48cG9seWdvbiBwb2ludHM9IjAsMCAxMCwwIDUsNiIgc3R5bGU9ImZpbGw6cmdiYSgwLDAsMCwuMjQpOyIvPjwvc3ZnPg==); background-repeat: no-repeat; background-position: right center; cursor: pointer; color: rgba(0, 0, 0, .87); font-size: 16px; font-family: inherit; line-height: inherit; padding: 0 25px 0 0 } .mui-select>select::-ms-expand { display: none } .mui-select>select:focus { outline: 0; height: calc(32px + 1px); margin-bottom: -1px; border-color: #2196F3; border-width: 2px } .mui-select>select:disabled { color: rgba(0, 0, 0, .38); cursor: not-allowed; background-color: transparent; opacity: 1 } .mui-select>select:-moz-focusring { color: transparent; text-shadow: 0 0 0 #000 } .mui-select>select:focus::-ms-value { background: 0 0; color: rgba(0, 0, 0, .87) } .mui-select>select.mui--text-placeholder { color: rgba(0, 0, 0, .26) } .mui-select>label { position: absolute; top: 0; display: block; width: 100%; color: rgba(0, 0, 0, .54); font-size: 12px; font-weight: 400; line-height: 15px; overflow-x: hidden; text-overflow: ellipsis; white-space: nowrap } .mui-select:focus>label, .mui-select>select:focus~label { color: #2196F3 } .mui-select__menu { position: absolute; z-index: 2; min-width: 100%; overflow-y: auto; padding: 8px 0; -webkit-box-sizing: border-box; box-sizing: border-box; background-color: #FFF; font-size: 16px } @media all and (-ms-high-contrast:none), (-ms-high-contrast:active) { .mui-select__menu { border-left: 1px solid rgba(0, 0, 0, .12); border-top: 1px solid rgba(0, 0, 0, .12) } } @supports (-ms-ime-align:auto) { .mui-select__menu { border-left: 1px solid rgba(0, 0, 0, .12); border-top: 1px solid rgba(0, 0, 0, .12) } } .mui-select__menu>div { padding: 0 22px; height: 42px; line-height: 42px; cursor: pointer; white-space: nowrap } .mui-select__menu>div.mui--is-selected { background-color: #EEE } .mui-select__menu>div.mui--is-disabled { color: rgba(0, 0, 0, .38); cursor: not-allowed } .mui-select__menu>div:not(.mui-optgroup__label):not(.mui--is-disabled):hover { background-color: #E0E0E0 } .mui-optgroup__option { text-indent: 1em } .mui-optgroup__label { color: rgba(0, 0, 0, .54); font-size: .9em } .mui-table { width: 100%; max-width: 100%; margin-bottom: 20px } .mui-table>tbody>tr>th, .mui-table>tfoot>tr>th, .mui-table>thead>tr>th { text-align: left } .mui-table>tbody>tr>td, .mui-table>tbody>tr>th, .mui-table>tfoot>tr>td, .mui-table>tfoot>tr>th, .mui-table>thead>tr>td, .mui-table>thead>tr>th { padding: 10px; line-height: 1.429 } .mui-table>thead>tr>th { border-bottom: 2px solid rgba(0, 0, 0, .12); font-weight: 700 } .mui-table>tbody+tbody { border-top: 2px solid rgba(0, 0, 0, .12) } .mui-table.mui-table--bordered>tbody>tr>td { border-bottom: 1px solid rgba(0, 0, 0, .12) } .mui-tabs__bar { list-style: none; padding-left: 0; margin-bottom: 0; background-color: transparent; white-space: nowrap; overflow-x: auto } .mui-tabs__bar>li { display: inline-block } .mui-tabs__bar>li>a { display: block; white-space: nowrap; text-transform: uppercase; font-weight: 500; font-size: 14px; color: rgba(0, 0, 0, .87); cursor: default; height: 48px; line-height: 48px; padding-left: 24px; padding-right: 24px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none } .mui-tabs__bar>li>a:hover { text-decoration: none } .mui-tabs__bar>li.mui--is-active { border-bottom: 2px solid #2196F3 } .mui-tabs__bar>li.mui--is-active>a { color: #2196F3 } .mui-tabs__bar.mui-tabs__bar--justified { display: table; width: 100%; table-layout: fixed } .mui-tabs__bar.mui-tabs__bar--justified>li { display: table-cell } .mui-tabs__bar.mui-tabs__bar--justified>li>a { text-align: center; padding-left: 0; padding-right: 0 } .mui-tabs__pane { display: none } .mui-tabs__pane.mui--is-active { display: block } .mui-textfield { display: block; padding-top: 15px; margin-bottom: 20px; position: relative } .mui-textfield>label { position: absolute; top: 0; display: block; width: 100%; color: rgba(0, 0, 0, .54); font-size: 12px; font-weight: 400; line-height: 15px; overflow-x: hidden; text-overflow: ellipsis; white-space: nowrap } .mui-textfield>textarea { padding-top: 5px } .mui-textfield>input:focus~label, .mui-textfield>textarea:focus~label { color: #2196F3 } .mui-textfield--float-label>label { position: absolute; -webkit-transform: translate(0, 15px); transform: translate(0, 15px); font-size: 16px; line-height: 32px; color: rgba(0, 0, 0, .26); text-overflow: clip; cursor: text; pointer-events: none } .mui-textfield--float-label>input:-webkit-autofill~label, .mui-textfield--float-label>textarea:-webkit-autofill~label { -webkit-transform: translate(0, 0); transform: translate(0, 0); font-size: 12px; line-height: 15px; text-overflow: ellipsis } .mui-textfield--float-label>input:focus~label, .mui-textfield--float-label>textarea:focus~label { -webkit-transform: translate(0, 0); transform: translate(0, 0); font-size: 12px; line-height: 15px; text-overflow: ellipsis } .mui-textfield--float-label>input:not(:focus).mui--is-not-empty~label, .mui-textfield--float-label>input:not(:focus):not(:empty):not(.mui--is-empty):not(.mui--is-not-empty)~label, .mui-textfield--float-label>input:not(:focus)[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty)~label, .mui-textfield--float-label>textarea:not(:focus).mui--is-not-empty~label, .mui-textfield--float-label>textarea:not(:focus):not(:empty):not(.mui--is-empty):not(.mui--is-not-empty)~label, .mui-textfield--float-label>textarea:not(:focus)[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty)~label { color: rgba(0, 0, 0, .54); font-size: 12px; line-height: 15px; -webkit-transform: translate(0, 0); transform: translate(0, 0); text-overflow: ellipsis } .mui-textfield--wrap-label { display: table; width: 100%; padding-top: 0 } .mui-textfield--wrap-label:not(.mui-textfield--float-label)>label { display: table-header-group; position: static; white-space: normal; overflow-x: visible } .mui-textfield>input, .mui-textfield>textarea { -webkit-box-sizing: border-box; box-sizing: border-box; display: block; background-color: transparent; color: rgba(0, 0, 0, .87); border: none; border-bottom: 1px solid rgba(0, 0, 0, .26); outline: 0; width: 100%; padding: 0; -webkit-box-shadow: none; box-shadow: none; border-radius: 0; font-size: 16px; font-family: inherit; line-height: inherit; background-image: none } .mui-textfield>input:focus, .mui-textfield>textarea:focus { border-color: #2196F3; border-width: 2px } .mui-textfield>input:-moz-read-only, .mui-textfield>textarea:-moz-read-only { cursor: not-allowed; background-color: transparent; opacity: 1 } .mui-textfield>input:disabled, .mui-textfield>input:read-only, .mui-textfield>textarea:disabled, .mui-textfield>textarea:read-only { cursor: not-allowed; background-color: transparent; opacity: 1 } .mui-textfield>input::-webkit-input-placeholder, .mui-textfield>textarea::-webkit-input-placeholder { color: rgba(0, 0, 0, .26); opacity: 1 } .mui-textfield>input::-moz-placeholder, .mui-textfield>textarea::-moz-placeholder { color: rgba(0, 0, 0, .26); opacity: 1 } .mui-textfield>input:-ms-input-placeholder, .mui-textfield>textarea:-ms-input-placeholder { color: rgba(0, 0, 0, .26); opacity: 1 } .mui-textfield>input::-ms-input-placeholder, .mui-textfield>textarea::-ms-input-placeholder { color: rgba(0, 0, 0, .26); opacity: 1 } .mui-textfield>input::placeholder, .mui-textfield>textarea::placeholder { color: rgba(0, 0, 0, .26); opacity: 1 } .mui-textfield>input { height: 32px } .mui-textfield>input:focus { height: calc(32px + 1px); margin-bottom: -1px } .mui-textfield>textarea { min-height: 64px } .mui-textfield>textarea[rows]:not([rows="2"]):focus { margin-bottom: -1px } .mui-textfield>input:focus { height: calc(32px + 1px); margin-bottom: -1px } .mui-textfield>input:invalid:not(:focus):not(:required), .mui-textfield>input:invalid:not(:focus):required.mui--is-empty.mui--is-touched, .mui-textfield>input:invalid:not(:focus):required.mui--is-not-empty, .mui-textfield>input:invalid:not(:focus):required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty), .mui-textfield>input:invalid:not(:focus):required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty), .mui-textfield>input:not(:focus).mui--is-invalid:not(:required), .mui-textfield>input:not(:focus).mui--is-invalid:required.mui--is-empty.mui--is-touched, .mui-textfield>input:not(:focus).mui--is-invalid:required.mui--is-not-empty, .mui-textfield>input:not(:focus).mui--is-invalid:required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty), .mui-textfield>input:not(:focus).mui--is-invalid:required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty), .mui-textfield>textarea:invalid:not(:focus):not(:required), .mui-textfield>textarea:invalid:not(:focus):required.mui--is-empty.mui--is-touched, .mui-textfield>textarea:invalid:not(:focus):required.mui--is-not-empty, .mui-textfield>textarea:invalid:not(:focus):required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty), .mui-textfield>textarea:invalid:not(:focus):required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty), .mui-textfield>textarea:not(:focus).mui--is-invalid:not(:required), .mui-textfield>textarea:not(:focus).mui--is-invalid:required.mui--is-empty.mui--is-touched, .mui-textfield>textarea:not(:focus).mui--is-invalid:required.mui--is-not-empty, .mui-textfield>textarea:not(:focus).mui--is-invalid:required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty), .mui-textfield>textarea:not(:focus).mui--is-invalid:required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty) { border-color: #F44336; border-width: 2px } .mui-textfield>input:invalid:not(:focus):not(:required), .mui-textfield>input:invalid:not(:focus):required.mui--is-empty.mui--is-touched, .mui-textfield>input:invalid:not(:focus):required.mui--is-not-empty, .mui-textfield>input:invalid:not(:focus):required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty), .mui-textfield>input:invalid:not(:focus):required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty), .mui-textfield>input:not(:focus).mui--is-invalid:not(:required), .mui-textfield>input:not(:focus).mui--is-invalid:required.mui--is-empty.mui--is-touched, .mui-textfield>input:not(:focus).mui--is-invalid:required.mui--is-not-empty, .mui-textfield>input:not(:focus).mui--is-invalid:required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty), .mui-textfield>input:not(:focus).mui--is-invalid:required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty) { height: calc(32px + 1px); margin-bottom: -1px } .mui-textfield.mui-textfield--float-label>input:invalid:not(:focus):not(:required)~label, .mui-textfield.mui-textfield--float-label>input:invalid:not(:focus):required.mui--is-not-empty~label, .mui-textfield.mui-textfield--float-label>input:invalid:not(:focus):required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty)~label, .mui-textfield.mui-textfield--float-label>input:invalid:not(:focus):required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty)~label, .mui-textfield.mui-textfield--float-label>textarea:invalid:not(:focus):not(:required)~label, .mui-textfield.mui-textfield--float-label>textarea:invalid:not(:focus):required.mui--is-not-empty~label, .mui-textfield.mui-textfield--float-label>textarea:invalid:not(:focus):required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty)~label, .mui-textfield.mui-textfield--float-label>textarea:invalid:not(:focus):required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty)~label { color: #F44336 } .mui-textfield:not(.mui-textfield--float-label)>input:invalid:not(:focus):not(:required)~label, .mui-textfield:not(.mui-textfield--float-label)>input:invalid:not(:focus):required.mui--is-empty.mui--is-touched~label, .mui-textfield:not(.mui-textfield--float-label)>input:invalid:not(:focus):required.mui--is-not-empty~label, .mui-textfield:not(.mui-textfield--float-label)>textarea:invalid:not(:focus):not(:required)~label, .mui-textfield:not(.mui-textfield--float-label)>textarea:invalid:not(:focus):required.mui--is-empty.mui--is-touched~label, .mui-textfield:not(.mui-textfield--float-label)>textarea:invalid:not(:focus):required.mui--is-not-empty~label { color: #F44336 } .mui-textfield.mui-textfield--float-label>.mui--is-invalid.mui--is-not-empty:not(:focus)~label { color: #F44336 } .mui-textfield:not(.mui-textfield--float-label)>.mui--is-invalid:not(:focus)~label { color: #F44336 } .mui--no-transition { -webkit-transition: none !important; transition: none !important } .mui--no-user-select { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none } .mui-caret { display: inline-block; width: 0; height: 0; margin: 0 0 0 2px; vertical-align: middle; border-top: 4px solid; border-right: 4px solid transparent; border-left: 4px solid transparent } .mui-caret.mui-caret--up { -webkit-transform: rotate(180deg); transform: rotate(180deg); margin: 0 0 2px 2px } .mui-caret.mui-caret--right { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); margin: 0 0 2px 2px } .mui-caret.mui-caret--left { -webkit-transform: rotate(90deg); transform: rotate(90deg); margin: 0 2px 2px 0 } .mui--text-left { text-align: left !important } .mui--text-right { text-align: right !important } .mui--text-center { text-align: center !important } .mui--text-justify { text-align: justify !important } .mui--text-nowrap { white-space: nowrap !important } .mui--align-baseline { vertical-align: baseline !important } .mui--align-top { vertical-align: top !important } .mui--align-middle { vertical-align: middle !important } .mui--align-bottom { vertical-align: bottom !important } .mui--text-dark { color: rgba(0, 0, 0, .87) } .mui--text-dark-secondary { color: rgba(0, 0, 0, .54) } .mui--text-dark-hint { color: rgba(0, 0, 0, .38) } .mui--text-light { color: #FFF } .mui--text-light-secondary { color: rgba(255, 255, 255, .7) } .mui--text-light-hint { color: rgba(255, 255, 255, .3) } .mui--text-accent { color: rgba(255, 64, 129, .87) } .mui--text-accent-secondary { color: rgba(255, 64, 129, .54) } .mui--text-accent-hint { color: rgba(255, 64, 129, .38) } .mui--text-black { color: #000 } .mui--text-white { color: #FFF } .mui--text-danger { color: #F44336 } .mui--text-placeholder { color: rgba(0, 0, 0, .26) } .mui--bg-primary { background-color: #2196F3 } .mui--bg-primary-dark { background-color: #1976D2 } .mui--bg-primary-light { background-color: #BBDEFB } .mui--bg-accent { background-color: #FF4081 } .mui--bg-accent-dark { background-color: #F50057 } .mui--bg-accent-light { background-color: #FF80AB } .mui--bg-danger { background-color: #F44336 } .mui-list--unstyled { padding-left: 0; list-style: none } .mui-list--inline { padding-left: 0; list-style: none; margin-left: -5px } .mui-list--inline>li { display: inline-block; padding-left: 5px; padding-right: 5px } .mui--z1, .mui-dropdown__menu, .mui-select__menu { -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24); box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24) } .mui--z2 { -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23); box-shadow: 0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23) } .mui--z3 { -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, .19), 0 6px 6px rgba(0, 0, 0, .23); box-shadow: 0 10px 20px rgba(0, 0, 0, .19), 0 6px 6px rgba(0, 0, 0, .23) } .mui--z4 { -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22); box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22) } .mui--z5 { -webkit-box-shadow: 0 19px 38px rgba(0, 0, 0, .3), 0 15px 12px rgba(0, 0, 0, .22); box-shadow: 0 19px 38px rgba(0, 0, 0, .3), 0 15px 12px rgba(0, 0, 0, .22) } .mui--clearfix:after, .mui--clearfix:before { content: " "; display: table } .mui--clearfix:after { clear: both } .mui--pull-right { float: right !important } .mui--pull-left { float: left !important } .mui--hide { display: none !important } .mui--show { display: block !important } .mui--invisible { visibility: hidden } .mui--overflow-hidden { overflow: hidden !important } .mui--overflow-hidden-x { overflow-x: hidden !important } .mui--overflow-hidden-y { overflow-y: hidden !important } .mui--visible-lg-block, .mui--visible-lg-inline, .mui--visible-lg-inline-block, .mui--visible-md-block, .mui--visible-md-inline, .mui--visible-md-inline-block, .mui--visible-sm-block, .mui--visible-sm-inline, .mui--visible-sm-inline-block, .mui--visible-xl-block, .mui--visible-xl-inline, .mui--visible-xl-inline-block, .mui--visible-xs-block, .mui--visible-xs-inline, .mui--visible-xs-inline-block { display: none !important } @media (max-width:543px) { .mui-visible-xs { display: block !important } table.mui-visible-xs { display: table } tr.mui-visible-xs { display: table-row !important } td.mui-visible-xs, th.mui-visible-xs { display: table-cell !important } .mui--visible-xs-block { display: block !important } .mui--visible-xs-inline { display: inline !important } .mui--visible-xs-inline-block { display: inline-block !important } } @media (min-width:544px) and (max-width:767px) { .mui-visible-sm { display: block !important } table.mui-visible-sm { display: table } tr.mui-visible-sm { display: table-row !important } td.mui-visible-sm, th.mui-visible-sm { display: table-cell !important } .mui--visible-sm-block { display: block !important } .mui--visible-sm-inline { display: inline !important } .mui--visible-sm-inline-block { display: inline-block !important } } @media (min-width:768px) and (max-width:991px) { .mui-visible-md { display: block !important } table.mui-visible-md { display: table } tr.mui-visible-md { display: table-row !important } td.mui-visible-md, th.mui-visible-md { display: table-cell !important } .mui--visible-md-block { display: block !important } .mui--visible-md-inline { display: inline !important } .mui--visible-md-inline-block { display: inline-block !important } } @media (min-width:992px) and (max-width:1199px) { .mui-visible-lg { display: block !important } table.mui-visible-lg { display: table } tr.mui-visible-lg { display: table-row !important } td.mui-visible-lg, th.mui-visible-lg { display: table-cell !important } .mui--visible-lg-block { display: block !important } .mui--visible-lg-inline { display: inline !important } .mui--visible-lg-inline-block { display: inline-block !important } } @media (min-width:1200px) { .mui-visible-xl { display: block !important } table.mui-visible-xl { display: table } tr.mui-visible-xl { display: table-row !important } td.mui-visible-xl, th.mui-visible-xl { display: table-cell !important } .mui--visible-xl-block { display: block !important } .mui--visible-xl-inline { display: inline !important } .mui--visible-xl-inline-block { display: inline-block !important } } @media (max-width:543px) { .mui--hidden-xs { display: none !important } } @media (min-width:544px) and (max-width:767px) { .mui--hidden-sm { display: none !important } } @media (min-width:768px) and (max-width:991px) { .mui--hidden-md { display: none !important } } @media (min-width:992px) and (max-width:1199px) { .mui--hidden-lg { display: none !important } } @media (min-width:1200px) { .mui--hidden-xl { display: none !important } } .mui-scrlock--showbar-y { overflow-y: scroll !important } .mui-scrlock--showbar-x { overflow-x: scroll !important } #mui-overlay { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 99999999; background-color: rgba(0, 0, 0, .2); overflow: auto } .mui-btn__ripple-container { position: absolute; top: 0; left: 0; display: block; height: 100%; width: 100%; overflow: hidden; z-index: 0; pointer-events: none } .mui-ripple { position: absolute; top: 0; left: 0; border-radius: 50%; opacity: 0; pointer-events: none; -webkit-transform: scale(.0001, .0001); transform: scale(.0001, .0001) } .mui-ripple.mui--is-animating { -webkit-transform: none; transform: none; -webkit-transition: width .3s cubic-bezier(0, 0, .2, 1), height .3s cubic-bezier(0, 0, .2, 1), opacity .3s cubic-bezier(0, 0, .2, 1), -webkit-transform .3s cubic-bezier(0, 0, .2, 1); transition: width .3s cubic-bezier(0, 0, .2, 1), height .3s cubic-bezier(0, 0, .2, 1), opacity .3s cubic-bezier(0, 0, .2, 1), -webkit-transform .3s cubic-bezier(0, 0, .2, 1); transition: transform .3s cubic-bezier(0, 0, .2, 1), width .3s cubic-bezier(0, 0, .2, 1), height .3s cubic-bezier(0, 0, .2, 1), opacity .3s cubic-bezier(0, 0, .2, 1); transition: transform .3s cubic-bezier(0, 0, .2, 1), width .3s cubic-bezier(0, 0, .2, 1), height .3s cubic-bezier(0, 0, .2, 1), opacity .3s cubic-bezier(0, 0, .2, 1), -webkit-transform .3s cubic-bezier(0, 0, .2, 1) } .mui-ripple.mui--is-visible { opacity: .3 } .mui-btn .mui-ripple { background-color: #a6a6a6 } .mui-btn--primary .mui-ripple { background-color: #FFF } .mui-btn--dark .mui-ripple { background-color: #FFF } .mui-btn--danger .mui-ripple { background-color: #FFF } .mui-btn--accent .mui-ripple { background-color: #FFF } .mui-btn--flat .mui-ripple { background-color: #a6a6a6 } .mui--text-display4 { font-weight: 300; font-size: 112px; line-height: 112px } .mui--text-display3 { font-weight: 400; font-size: 56px; line-height: 56px } .mui--text-display2 { font-weight: 400; font-size: 45px; line-height: 48px } .mui--text-display1, h1 { font-weight: 400; font-size: 34px; line-height: 40px } .mui--text-headline, h2 { font-weight: 400; font-size: 24px; line-height: 32px } .mui--text-title, h3 { font-weight: 400; font-size: 20px; line-height: 28px; padding-left:10px; } .mui--text-subhead, h4 { font-weight: 400; font-size: 16px; line-height: 24px } .mui--text-body2, h5 { font-weight: 500; font-size: 14px; line-height: 24px; padding-left:10px; } .mui--text-body1 { font-weight: 400; font-size: 14px; line-height: 20px } .mui--text-caption { font-weight: 400; font-size: 12px; line-height: 16px } .mui--text-menu { font-weight: 500; font-size: 13px; line-height: 17px } .mui--text-button { font-weight: 500; font-size: 14px; line-height: 18px; text-transform: uppercase } </style> <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAL8yAAC/MgAAAAAAAAAAAACIQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4lDBv+KRQj/ikUI/4pFCP+KRQj/ikUI/4lDBf+IQgT/iEIE/4lEBv+JRAf/iUMG/4lDBv+JQwb/iUMG/4lDBv+JQwb/iUMG/4lDBv+JQwb/iUMG/4lEBv+KRQj/iUMF/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+JQwX/hT0C/4A0AP+ANQD/gDUA/4A1AP+ANQD/hj8D/4lDBf+IQwT/gzsB/4I5AP+DOwD/gzsA/4M7AP+DOwD/gzsA/4M7AP+DOwD/gzsA/4M7AP+EPAD/gzoA/380AP+GPwP/iUQG/4hCBP+IQgT/iEIE/4hCBP+IQgT/iUMF/4Q8AP+WWCT/uZFs/7iPav+4j2r/uI9q/7iPav+TUx3/hj8B/4Q8AP+pdUn/4dHB/97Mu//fzbz/3828/9/NvP/fzbz/3828/9/NvP/fzbz/3828/+DPvv/ey7r/w6CA/45MFf+EOwD/iUQG/4hCBP+IQgT/iEIE/4hDBf+HQAH/jUoP/+3j2v///////v79///////+/f3//////+TUxv+JRAf/gDUA/86xl////////fz7//////////////////////////////////////////////////7+/f//////7+Xd/5VWIv+FPQD/iUMG/4hCBP+IQgT/iUMG/4Q8AP+ZXin//f38//39/P/9/Pr//fz7//z7+v//////9/Lu/5FRF/+EOwD/klIZ/7WKY/+0iWL/s4Ve/7OGX/+zhl//s4Zf/7OGX/+0iGH/totl/7eMZv+0h2D/w6CB//bw6///////3sq6/4U9AP+JQwX/iEIE/4hCBP+JQwb/hDwA/5lcJ//9/Pv//////////v///////v7+///////38u7/kE8W/4Y/AP+GPwP/gDUA/4A1AP+ANQD/gDUA/4A1AP+ANQD/gDUA/4A1AP+ANQD/gDUA/4E3Av97LQD/p3NG/////v//////n2c0/4M6AP+JRAf/iEIE/4lEBv+EOwD/m2As///////////////+///////+/v7///////fz7/+RUBb/hj4A/4lEBv+KRQj/ikUI/4pFCP+KRQj/ikUI/4pFCP+KRQj/ikUI/4pFCP+KRQj/ikUI/4pGCP+DOwD/5tjM//////+vgFb/gTYA/4pFCP+IQgT/iUQG/4M7AP+cYi7//v7+//7+/v/+/v7///////7+/v//////9vHt/5FQF/+GPgD/iUMF/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iUMF/4U9AP/i0cP//////7CBWP+BNgD/ikUI/4hCBP+JQwb/hDwA/5ldKP/9/Pz//////////v///////v7+///////28Ov/j00T/4Y/AP+JQwX/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+JQwX/hT0A/+PTxP//////sIFY/4E2AP+KRQj/iEIE/4hCBP+IQwX/hj8A/9G1nv/7+Pb/9vDs//79/P/9+/r/+vf1/8Shg/+EOwD/iUQG/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4lDBv+EOwD/4c+///////+wgVj/gTYA/4pFCP+IQgT/iEIE/4hDBf+JQwb/hj8E/5FPFf+OSxD/7+bd/+nb0P+KRQj/hTwD/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iUMG/4Q7AP/gzb3//////7CBWP+BNgD/ikUI/4hCBP+IQgT/h0ED/4E3AP+COQD/hj8B/4M6AP/u5Nv/5tjL/4E2AP+KRQj/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEMF/4pFCP+KRQj/ikUI/4pFCP+KRQj/ikUI/4lDBf+JQwb/hDsA/+DOvv//////sIFY/4A2AP+KRQj/iEIF/4hBA/+JQwX/zK6U/8Cbev+GPgD/hj8A/+7k2//n2Mz/gzoA/4lDBv+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+HQAP/fzQA/380AP9/NAD/fzQA/380AP9/NAD/hj8D/4lEBv+DOwD/4M29//////+wgVj/gTYA/4pFCP+JRAb/gzoA/55kMv//////9e/q/49MEv+DOgD/7+Xc/+bXzP+COQD/ikUH/4hCBP+IQgT/iEIE/4hCBP+IQwX/h0AB/41KEP++mHb/x6eK/8Shgf/EoYL/x6aJ/8OfgP+SUhv/h0AB/4Q8AP/gzb3//////7CBWP+BNgD/ikUI/4lEB/+DOgD/n2c1///////07uj/kE8V/4E4AP/k1Mb/+/j2/4xIE/+DOgD/ikUH/4lEBv+JRAb/iUQG/4tHCv+BNwD/v5p4///////9/Pv////////////9/Pv//////8yulP+BNwD/hT4A/+DOvv//////sIFY/4E2AP+KRQj/iUQH/4M6AP+fZzX///////Xv6v+RUBb/fjIA/72WdP//////1bym/4pGCv+BOAD/gTgB/4E4AP+BNwD/gzoE/3gpAP/Eoof///////v59//9/Pv//fz7//v59///////1Lul/4E3AP+GPwD/49LD//////+wgVj/gTYA/4pFCP+JRAf/gzoA/59nNf//////9fDr/49OFP+FPgD/ikUL/93Jt///////9/Lt/+TUxv/j08X/49PF/+TUxv/k1cf/4tHC//Lr5P////////7+/////////////fz7///////TuqP/gTcA/4Y/AP/j0sT//////7CBWP+BNgD/ikUI/4lEB/+DOgD/n2c1///////07uj/jkwR/4dAAf+HQAT/hj8G/7iOaf/k1Mb/7uXc/+3j2v/u5dz/7OHX/+zg1v/r3tP/9e/q//////////7////////////9/Pv//////9S6pP+BNwD/hj8A/+PSxP//////sIFY/4E2AP+KRQj/iUQH/4M6AP+fZzX///////Ps5v+NSg//hj8B/4lEBv+IQgX/gDYA/4M5AP+EPAD/hDwA/4Q8AP+DOwD/hT4E/3otAP++mXr///////z6+f/+/f3//v39//z6+f//////07mj/4E3AP+GPwD/49LE//////+wgVj/gTYA/4pFCP+JRAf/gzoA/59nNf//////9e/p/49MEv+GPwD/iEMF/4hCBP+KRQj/iUQG/4hCBf+IQgX/iEIF/4lDBf+LRgn/gDUA/8Gce////////fz7/////////////fz7///////SuKH/gTcA/4Y/AP/j0sT//////7CBWP+BNgD/ikUI/4lEB/+DOgD/n2c1///////18Ov/j00T/4Y/AP+JQwX/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4lDBv+EPAD/nWMw/+jbz//s4Nb/697U/+vf1f/r39X/7ODW/6dyRP+EOwD/hj4A/+PSxP//////sIFY/4E2AP+KRQj/iUQH/4M6AP+fZjT///////Xv6v+PThP/hj8A/4lDBf+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4lDBP+FPQL/hT0C/4lCA/+IQQP/iEED/4hCA/+GPgL/hDwC/4lEBv+FPQD/49LD//////+wgVj/gTYA/4pFCP+JRAf/gzoA/59nNf//////9vHt/45LFP+IQgP/ikUI/4lEB/+JRAf/iUQH/4lEB/+JRAf/iUQH/4lEB/+JRAf/iUQH/4pFCP+KRQf/iUQG/4lEBv+JRAb/iUQG/4pFCP+KRgn/ikYI/4Q7AP/l1sr//////6+AV/+BNgD/ikUI/4lDBv+FPQD/llgh//n28///////q3lQ/3osAP+DOwP/gjkA/4I5AP+COQD/gjkA/4I5AP+COQD/gjkA/4I5AP+COQD/gjkA/4M6AP+DOgD/gzoA/4M6AP+DOgD/gjkA/4M6Av98LgD/nmU1//37+f//////o209/4I5AP+JRAf/iEIE/4lEBv+COQD/1r2o///////z7ef/t4xn/6FrOv+hazr/oWo5/6FqOf+hajn/oWo5/6FqOf+hajn/oWo5/6FqOv+hajr/oWo6/6FqOv+hajr/oWo6/6FqOv+kb0D/om08/7KFXf/v5t7//////+bXyv+IQQT/iEIE/4hCBf+IQgT/iUMF/4U+AP+SUh3/7uPa///////+/v3//////////////////////////////////////////////////////////////////////////////////////////////////v7+///////28ez/nGIy/4M7AP+JRAb/iEIE/4hCBP+IQgT/iUQG/4Q8AP+PTRf/zbCV/+/l3f/17+r/9e/q//Xv6v/17+r/9e/q//Xv6v/17+r/9e/q//Xw6//38+//9/Pv//fz7//38+//9/Pv//fz7//28ez/9e7o//Xv6v/x6eL/1bul/5ZZJf+COQD/iUQG/4hCBP+IQgT/iEIE/4hCBP+IQgT/iUQG/4Y/A/+ANQD/ikUJ/49OFP+PTRP/j00T/49NE/+PTRP/j00T/49NE/+PTRP/j04U/5FQF/+RUBf/kVAX/5FQF/+RUBf/kVAX/5BOFf+PTRP/j04U/4xIDP+BNgD/hTwC/4lEBv+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iUMF/4pFCP+HQQP/hj8A/4Y/AP+GPwD/hj8A/4Y/AP+GPwD/hj8A/4Y/AP+GPwD/hj4A/4Y+AP+GPgD/hj4A/4Y+AP+GPgD/hj8A/4Y/AP+GPwD/h0AC/4pFB/+JQwb/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/iEIE/4hDBf+JQwX/iUMF/4lDBf+JQwX/iUMF/4lDBf+JQwX/iUMF/4lDBf+JQwX/iUMF/4lDBf+JQwX/iUMF/4lDBf+JQwX/iUMF/4lDBf+IQwX/iEIE/4hCBP+IQgT/iEIE/4hCBP+IQgT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="> </head> <body> <div> <div class="mui-appbar midBlue sticky" style="padding-left:5px"> <table style="width:100%" > <tr style="vertical-align:middle;"> <td class="mui--appbar-height"><h2>AutoReview</h2></td> <td class="mui--appbar-height" style="text-align:right"><img src="https://wyattdave.github.io/Auto-Review/assets/img/logo.svg" alt="Logo" id="restScroll" style="height:50px; float:right; padding-right:20px"/></td> </tr> </table> </div> <div id="content" class="mui-container-fluid" > <div class="mui-row"> <div> <br> <div class="mui-row"> <div class="mui-col-md-6"> <div class="grid-container"> <div class="grid-item"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">Name</div> <div class="mui--text-black mui--text-body2 overflowClass" contentEditable="true" id="target-flowName" >{flowName}</div> </div> </div> <div class="grid-item"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">ID</div> <div class="mui--text-black mui--text-body2">{flowId}</div> </div> </div> </div> </div> <div class="mui-col-md-6"> <div class="grid-container"> <div class="grid-item"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">Owner</div> <div class="mui--text-black mui--text-body2 overflowClass" contentEditable="true">{owner}</div> </div> </div> <div class="grid-item"> <div class="mui-panel" style="text-align: left;"> <div class="mui--text-black mui--text-title">Date</div> <div class="mui--text-black mui--text-body2">{date}</div> </div> </div> </div> </div> </div> <br> <div class="mui-row"> <div class="mui-col-md-6"> <div class="grid-container"> <div class="grid-item"> <div class="mui-panel" id="complexity" style="text-align: center; background-color:green;"> <div class="mui--text-headline">Complexity</div> <div class="mui--text-display3">{complexity}</div> </div> </div> <div class="grid-item"> <div class="mui-panel" id="actions" style="text-align: center; background-color:green;"> <div class="mui--text-headline">Actions</div> <div class="mui--text-display3">{actions}</div> </div> </div> </div> </div> <div class="mui-col-md-6"> <div class="grid-container"> <div class="grid-item"> <div class="mui-panel" id="variables" style="text-align: center; background-color:green;"> <div class="mui--text-headline">Variables</div> <div class="mui--text-display3">{variables}</div> </div> </div> <div class="grid-item"> <div class="mui-panel" id="exceptions" style="text-align: center; background-color:green;"> <div class="mui--text-headline">Exceptions</div> <div class="mui--text-display3">{exceptions}</div> </div> </div> </div> </div> </div> <br> <div class="mui-row"> <div class="mui-col-md-6"> <div class="mui-panel topCardsScroll" style="overflow: hidden;"> <div class="mui--text-black-54 mui--text-title">Overall Rating</div> <div class="mui-divider"></div> {ratingBar} <div> <table style="width:100% "> <tr> <td>Variables: {variable}</td> <td>Composes: {composes}</td> <td>Main: {main}</td> <td>Exception: {exception}</td> <td>{premium}</td> </tr> </table> </div> </div> </div> <div class="mui-col-md-6"> <div class="mui-panel topCardsScroll"> <div class="mui--text-black-54 mui--text-title">Trigger Details</div> <div class="mui-divider"></div> {trigger} </div> </div> </div> <br> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Variables <div style="float:right"> <input style="width:200px; padding-left:50px" class="filters" type="text" id="variablesInput" placeholder="&#x1f50d; Filter" title="Type in a name"> <select id="variablesSelect" class="filters"> <option value=0 selected="selected">Name</option> <option value=1>Type</option> <option value=2>Value</option> <option value=3>Used</option> <option value=4>Named</option> <option value=5>Constant</option> </select> </div> </div> <div class="mui-divider"></div> <br> {variablesTable} <p><a href="#!" class="topPadding" id="clickVariables">Show Comments</a></p> <div class="topPadding mui-textfield" style="Display:none" id="divVariables"> <textarea placeholder="Input your comments" style="width:100%" rows="4"></textarea> </div> </div> <br> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Actions <div style="float:right"> <input style="width:200px; padding-left:50px" class="filters" type="text" id="actionInput" placeholder="&#x1f50d; Filter" title="Type in a name"> <select id="actionSelect" class="filters"> <option value=0 selected="selected">Name</option> <option value=1>Type</option> <option value=2>RunAfter</option> <option value=3>Notes</option> <option value=4>Nested</option> <option value=5>Id</option> </select> </div> </div> <div class="mui-divider"></div> <br> {actionsTable} <p><a href="#!" class="topPadding" id="clickActions">Show Comments</a></p> <div class="topPadding" style="Display:none" id="divActions"><textarea placeholder="Input your comments" id="actionNotes" style="width:100%" rows="4"></textarea></div> </div> <br> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Action Inputs <div style="float:right"> <input style="width:200px; padding-left:50px" class="filters" type="text" id="inputInput" placeholder="&#x1f50d; Filter" title="Type in a name"> <select id="inputSelect" class="filters"> <option value=0 selected="selected">Name</option> <option value=1>Type</option> <option value=2>Env</option> <option value=3>Inputs</option> </select> </div> </div> <div class="mui-divider"></div> <br> {inputTable} <p><a href="#!" class="topPadding" id="clickInput">Show Comments</a></p> <div class="topPadding" style="Display:none" id="divInput"><textarea id="inputNotes" placeholder="Input your comments" style="width:100%" rows="4"></textarea></div> </div> <br> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">API Actions <div style="float:right"> <input style="width:200px; padding-left:50px" class="filters" type="text" id="apiInput" placeholder="&#x1f50d; Filter" title="Type in a name"> <select id="apiSelect" class="filters"> <option value=0 selected="selected">Name</option> <option value=1>Type</option> <option value=2>Filter</option> <option value=3>Pagination</option> <option value=4>Retry</option> </select> </div> </div> <div class="mui-divider"></div> <br> {apiTable} <p><a href="#!" class="topPadding" id="clickApi">Show Comments</a></p> <div class="topPadding" style="Display:none" id="divApi"><textarea id="actionNotes" placeholder="Input your comments" style="width:100%" rows="4"></textarea></div> </div> <br> <div class="mui-row"> <div class="mui-col-md-6"> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Exceptions</div> <div class="mui-divider"></div> {exceptionsTable} <p><a href="#!" class="topPadding" id="clickExcept">Show Comments</a></p> <div class="topPadding" style="Display:none" id="divExcept"><textarea placeholder="Input your comments" style="width:100%" rows="4"></textarea></div> </div> </div> <div class="mui-col-md-6"> <div class="mui-panel"> <div class="mui--text-black-54 mui--text-title">Connection References</div> <div class="mui-divider"></div> {connectionsTable} <p><a href="#!" class="topPadding" id="clickConnect">Show Comments</a></p> <div class="topPadding" style="Display:none" id="divConnect"><textarea placeholder="Input your comments" style="width:100%" rows="4"></textarea></div> </div> </div> </div> </div> </div> </div> </div> <br> </body> <script> const actionSelectElem = document.getElementById("actionSelect"); const apiSelectElem = document.getElementById("apiSelect"); const varSelectElem = document.getElementById("variablesSelect"); const inputSelectElem = document.getElementById("inputSelect"); const downloadElem = document.getElementById("download"); const actionIElem = document.getElementById("actionInput"); const apiElm = document.getElementById("apiInput"); const varElem = document.getElementById("variablesInput"); const inputElem = document.getElementById("inputInput"); let sType=" Review"; if(document.title=="AutoReview Report"){ sType=" Report" } actionSelectElem.addEventListener("change", function() { actionIElem.value=""; filterActionTable("actionTable","actionInput",-1); }); apiSelectElem.addEventListener("change", function() { apiElm.value=""; filterActionTable("apiTable","apiInput",-1); }); varSelectElem.addEventListener("change", function() { varElem.value=""; filterActionTable("variablesTable","variablesInput",-1); }); inputSelectElem.addEventListener("change", function() { inputElem.value=""; filterActionTable("inputTable","inputInput",-1); }); actionIElem.addEventListener("change", function() { filterActionTable("actionTable","actionInput",actionSelectElem.value); }); apiElm.addEventListener("change", function() { filterActionTable("apiTable","apiInput",apiSelectElem.value); }); varElem.addEventListener("change", function() { filterActionTable("variablesTable","variablesInput",varSelectElem.value); }); inputElem.addEventListener("change", function() { filterActionTable("inputTable","inputInput",inputSelectElem.value); }); const startClear = document.getElementById("restScroll"); startClear.addEventListener("click", function(e) { e.stopPropagation(); topFunction() }); startClear.click(); const variablesElem = document.getElementById("clickVariables"); variablesElem.addEventListener("click", function(e) { e.stopPropagation(); showComments("divVariables"); }); const actionsElem = document.getElementById("clickActions"); actionsElem.addEventListener("click", function(e) { e.stopPropagation(); showComments("divActions"); }); const apiElem = document.getElementById("clickApi"); apiElem.addEventListener("click", function(e) { e.stopPropagation(); showComments("divApi"); }); const inpElem = document.getElementById("clickInput"); inpElem.addEventListener("click", function(e) { e.stopPropagation(); showComments("divInput"); }); const exceptElem = document.getElementById("clickExcept"); exceptElem.addEventListener("click", function(e) { e.stopPropagation(); showComments("divExcept"); }); const connectElem = document.getElementById("clickConnect"); connectElem.addEventListener("click", function(e) { e.stopPropagation(); showComments("divConnect"); }); function showComments(sElem){ let commentsElem=document.getElementById(sElem); if(commentsElem.style.display=="block"){ commentsElem.style.display="none" }else{ commentsElem.style.display="block" } }; function filterActionTable(sTableID,sInputID,col) { let i=0; let sFilter = document.getElementById(sInputID).value.toUpperCase(); let tableElem = document.getElementById(sTableID); let tr = tableElem.getElementsByTagName("tr"); for (i = 0; i < tr.length; i++) { if(sFilter=="" || col==-1){ tr[i].style.display = ""; }else{ let td = tr[i].getElementsByTagName("td")[col]; if (td) { let sTxtValue = td.textContent || td.innerText; if (sTxtValue.toUpperCase().indexOf(sFilter) > -1 || (sTxtValue=="" && sFilter==" ")) { tr[i].style.display = ""; } else { tr[i].style.display = "none"; } } } } }; function topFunction() { document.body.scrollTop = 0; document.documentElement.scrollTop = 0; }; </script> </html>';

const sMailTemplate ="mailto:auto-review@outlook.com?subject=Auto review Bug Report&body=Thank you for sending this bug report, please paste the definition below and check for any personal information before sending:";

const urlConnectors ="https://powerautomate.microsoft.com/en-us/api/connectors/all/";
const apiUrl = 'https://us.api.flow.microsoft.com/providers/Microsoft.ProcessSimple';
const apiUrlQuery='?api-version=2016-11-01&$expand=swagger,properties.connectionreferences.apidefinition,properties.definitionSummary.operations.apiOperation,operationDefinition,plan,properties.throttleData,properties.estimatedsuspensiondata';

let oConfigReferenceTemplate = {
  complexity: "default",
  ratings: "default",
  naming: "default",
  score: "default",
};

let aDownloadConfig = [
  {
    name: "Actions",
    headers: {
      name: "Name",
      step: "Step",
      type: "Type",
      id: "MetaID",
      hasId: "HashId",
      tier:"Tier",
      connector: "Connector",
      imgURL:"Connector Img",
      runAfter: "Run After",
      exception: "Exception",
      index: "Index",
      complexity: "Complexity",   
      detail: "Detail",
      filter: "Filter",
      pagination: "Pagination",
      secure: "Secure Data",
      retry: "Retry Policy",
      timeout: "Timeout",
      positionInfo:"Internal/Route",
      position: "Previous",
      notes:"Notes",
      parent:"Parent",
      positionIndex:"Previous ID",
      positionType:"Previous Type",
      nested: "Nests"
    },
  },
  {
    name: "Variables",
    headers: {
      name: "Name",
      type: "Type",
      value: "Value",
      used: "Used",
      named: "Named",   
      local: "Local",   
    },
  },
  {
    name: "Connections",
    headers: {
      conName: "Name",
      appId: "AppId",
      opId: "OpId",
      count: "Count"
      
    },
  },
];

let oRatingsTemplate = {
  complexityAm: 50,
  complexityRe: 100,
  actionsAm: 30,
  actionsRe: 50,
  variablesAm: 3,
  variablesRe: 5,
  exceptionsAm: 1,
  exceptionsRe: 0,
};

let aScoringTemplate = [
  {
    Name: "exceptionScope",
    Score: 10,
    Note: "score added for exception scope",
  },
  {
    Name: "mainScope",
    Score: 10,
    Note: "score added for main scope",
  },
  {
    Name: "varNaming",
    Score: 10,
    Note: "score added for following variable naming convention (see aRatingsTemplate)",
  },
  {
    Name: "varUsed",
    Score: 5,
    Note: "score added for if all variables used",
  },
  {
    Name: "varConstant",
    Score: 5,
    Note: "score added for naming variables with value in all capitals",
  },
  {
    Name: "variables",
    Score: 10,
    Note: "score given for variables before deductions",
  },
  {
    Name: "variablesMin",
    Score: 0,
    Note: "minimum allowed variables before deductions",
  },
  {
    Name: "variablesDeduction",
    Score: 1,
    Note: "score added for exception scope",
  },
  {
    Name: "composes",
    Score: 10,
    Note: "score given for composes before deductions",
  },
  {
    Name: "composesMin",
    Score: 0,
    Note: "minimum allowed composes before deductions",
  },
  {
    Name: "composesDeduction",
    Score: 5,
    Note: "score deducted for every scope used",
  },
  {
    Name: "connections",
    Score: 10,
    Note: "score given for connections before deductions",
  },
  {
    Name: "connectionsMin",
    Score: 3,
    Note: "minimum allowed connections before deductions",
  },
  {
    Name: "connectionsDeduction",
    Score: 2,
    Note: "score deducted for every connections used",
  },

  {
    Name: "complexityRed",
    Score: 0,
    Note: "score added for red scoring complexity",
  },
  {
    Name: "complexityAmber",
    Score: 15,
    Note: "score added for amber scoring complexity",
  },
  {
    Name: "complexityGreen",
    Score: 20,
    Note: "score added green scoring complexity",
  },

  {
    Name: "actionsRed",
    Score: 0,
    Note: "score added for red scoring actions",
  },
  {
    Name: "actionsAmber",
    Score: 5,
    Note: "score added for amber scoring actions",
  },
  {
    Name: "actionsGreen",
    Score: 10,
    Note: "score added green scoring actions",
  },
];

let oNamingTemplate = {
  char: 1,
  data: [
    { Type: "boolean", Letter: "b" },
    { Type: "string", Letter: "s" },
    { Type: "integer", Letter: "i" },
    { Type: "float", Letter: "f" },
    { Type: "object", Letter: "o" },
    { Type: "array", Letter: "a" },
  ],
};

let aComplexityTemplate = [
  {
    Name: "GetItemsshared_sharepointonline",
    Complexity: 1,
  },
  {
    Name: "CopyFileAsyncshared_sharepointonline",
    Complexity: 1,
  },
  {
    Name: "GetFileContentshared_sharepointonline",
    Complexity: 1,
  },
  {
    Name: "GetFileContentByPathshared_sharepointonline",
    Complexity: 1,
  },
  {
    Name: "HttpRequestshared_sharepointonline",
    Complexity: 5,
  },
  {
    Name: "DeleteFileshared_sharepointonline",
    Complexity: 1,
  },
  {
    Name: "ConvertFileshared_onedriveforbusiness",
    Complexity: 2,
  },
  {
    Name: "ConvertFileByPathshared_onedriveforbusiness",
    Complexity: 1,
  },
  {
    Name: "CopyDriveFileshared_onedriveforbusiness",
    Complexity: 1,
  },
  {
    Name: "CopyDriveFileByPathshared_onedriveforbusiness",
    Complexity: 1,
  },
  {
    Name: "ListFolderV2shared_onedriveforbusiness",
    Complexity: 1,
  },
  {
    Name: "ListRootFoldershared_onedriveforbusiness",
    Complexity: 1,
  },
  {
    Name: "DeleteFileshared_onedriveforbusiness",
    Complexity: 1,
  },
  {
    Name: "GetItemsshared_excelonlinebusiness",
    Complexity: 1,
  },
  {
    Name: "PatchItemshared_excelonlinebusiness",
    Complexity: 1,
  },
  {
    Name: "RunScriptProdshared_excelonlinebusiness",
    Complexity: 5,
  },
  {
    Name: "ListGroupMembersshared_office365groups",
    Complexity: 1,
  },
  {
    Name: "SharedMailboxSendEmailV2shared_office365",
    Complexity: 1,
  },
  {
    Name: "StartAndWaitForAnApprovalshared_approvals",
    Complexity: 2,
  },
  {
    Name: "ApiConnection",
    Complexity: 2,
  },
  {
    Name: "ApiConnectionWebhook",
    Complexity: 2,
  },
  {
    Name: "ApiManagement",
    Complexity: 2,
  },
  {
    Name: "AppendToArrayVariable",
    Complexity: 2,
  },
  {
    Name: "AppendToStringVariable",
    Complexity: 2,
  },
  {
    Name: "Batch",
    Complexity: 5,
  },
  {
    Name: "Compose",
    Complexity: 2,
  },
  {
    Name: "DecrementVariable",
    Complexity: 2,
  },
  {
    Name: "Expression",
    Complexity: 2,
  },
  {
    Name: "FlatFileDecoding",
    Complexity: 5,
  },
  {
    Name: "FlatFileEncoding",
    Complexity: 5,
  },
  {
    Name: "Foreach",
    Complexity: 4,
  },
  {
    Name: "Function",
    Complexity: 5,
  },
  {
    Name: "Http",
    Complexity: 5,
  },
  {
    Name: "HttpWebhook",
    Complexity: 5,
  },
  {
    Name: "If",
    Complexity: 3,
  },
  {
    Name: "IncrementVariable",
    Complexity: 2,
  },
  {
    Name: "InitializeVariable",
    Complexity: 1,
  },
  {
    Name: "IntegrationAccountArtifactLookup",
    Complexity: 5,
  },
  {
    Name: "Join",
    Complexity: 3,
  },
  {
    Name: "Liquid",
    Complexity: 5,
  },
  {
    Name: "ParseJson",
    Complexity: 3,
  },
  {
    Name: "Query",
    Complexity: 3,
  },
  {
    Name: "Recurrence",
    Complexity: 5,
  },
  {
    Name: "Request",
    Complexity: 1,
  },
  {
    Name: "Response",
    Complexity: 1,
  },
  {
    Name: "Scope",
    Complexity: -1,
  },
  {
    Name: "Select",
    Complexity: 3,
  },
  {
    Name: "SendToBatch",
    Complexity: 5,
  },
  {
    Name: "SetVariable",
    Complexity: 2,
  },
  {
    Name: "SlidingWindow",
    Complexity: 5,
  },
  {
    Name: "Switch",
    Complexity: 4,
  },
  {
    Name: "Table",
    Complexity: 2,
  },
  {
    Name: "Terminate",
    Complexity: -1,
  },
  {
    Name: "Until",
    Complexity: 4,
  },
  {
    Name: "Wait",
    Complexity: 1,
  },
  {
    Name: "Workflow",
    Complexity: 5,
  },
  {
    Name: "XmlValidation",
    Complexity: 3,
  },
  {
    Name: "Xslt",
    Complexity: 3,
  },
  {
    Name: "OpenApiConnection",
    Complexity: 1,
  },
  {
    Name: "Ai connection",
    Complexity: 5,
  },
  {
    Name: "loop till",
    Complexity: 4,
  },
  {
    Name: "OpenApiConnectionWebhook",
    Complexity: 2,
  },
  {
    Name: "Do_until",
    Complexity: 4,
  },
];
