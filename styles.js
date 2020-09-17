(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "code[class*=language-], pre[class*=language-] {\n  font-family: Consolas, Menlo, Monaco, Andale Mono WT, Andale Mono, Lucida Console, Lucida Sans Typewriter, DejaVu Sans Mono, Bitstream Vera Sans Mono, Liberation Mono, Nimbus Mono L, Courier New, Courier, monospace;\n  line-height: 1.5;\n  direction: ltr;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  hyphens: none; }\n\ncode[class*=language-]::-moz-selection, code[class*=language-] ::-moz-selection, pre[class*=language-]::-moz-selection, pre[class*=language-] ::-moz-selection {\n  text-shadow: none;\n  background: #8f51e6; }\n\ncode[class*=language-]::selection, code[class*=language-] ::selection, pre[class*=language-]::selection, pre[class*=language-] ::selection {\n  text-shadow: none;\n  background: #8f51e6; }\n\npre[class*=language-] {\n  padding: 10px 15px;\n  margin: 1em -15px;\n  overflow: auto;\n  background: #281e36;\n  color: #ffe69d;\n  font-size: 14px;\n  border-radius: 0; }\n\n@media (min-width: 600px) {\n  pre[class*=language-] {\n    font-size: 16px;\n    border: 1px solid rgba(255, 255, 255, 0.05);\n    margin-left: 0;\n    margin-right: 0;\n    border-radius: 10px; } }\n\n:not(pre) > code[class*=language-] {\n  color: #ff6b81;\n  font-weight: 700;\n  white-space: pre-wrap; }\n\n:not(pre) > code[class*=language-]::-moz-selection, :not(pre) > code[class*=language-] ::-moz-selection {\n  text-shadow: none;\n  background: #8f51e6;\n  color: #fff; }\n\n:not(pre) > code[class*=language-]::selection, :not(pre) > code[class*=language-] ::selection {\n  text-shadow: none;\n  background: #8f51e6;\n  color: #fff; }\n\n.token-line {\n  min-height: 1em; }\n\n.token.cdata, .token.comment, .token.doctype, .token.prolog {\n  color: #95b2db; }\n\n.token.keyword, .token.punctuation {\n  color: #4edee5; }\n\n.token.namespace {\n  opacity: .7; }\n\n.token.boolean, .token.number, .token.operator, .token.tag {\n  color: #ed655e; }\n\n.token.function, .token.property {\n  color: #b886fd; }\n\n.token.atrule-id, .token.selector, .token.tag-id {\n  color: #f3ebff; }\n\n.token.attr-name, code.language-javascript {\n  color: #d6b9fe; }\n\n.language-css .token.string, .language-scss .token.string, .style .token.string, .token.atrule, .token.attr-value, .token.control, .token.directive, .token.entity, .token.placeholder, .token.regex, .token.statement, .token.string, .token.unit, .token.url, .token.variable, code.language-css, code.language-scss {\n  color: #ffb6b3; }\n\n.token.dom {\n  color: #a5c8ff; }\n\n.token.deleted {\n  text-decoration: line-through; }\n\n.token.inserted {\n  border-bottom: 1px dotted #f3ebff;\n  text-decoration: none; }\n\n.token.italic {\n  font-style: italic; }\n\n.token.bold, .token.important {\n  font-weight: 700; }\n\n.token.important {\n  color: #d6b9fe; }\n\n.token.entity {\n  cursor: help; }\n\npre > code.highlight {\n  outline: .4em solid #aa75f5;\n  outline-offset: .4em; }\n\n.line-numbers .line-numbers-rows {\n  border-right-color: #372f42; }\n\n.line-numbers-rows > span:before {\n  color: #372f42; }\n\n.line-highlight {\n  background: rgba(237, 101, 94, 0.2);\n  background: linear-gradient(90deg, rgba(237, 101, 94, 0.2) 70%, rgba(237, 101, 94, 0)); }\n\n.gatsby-highlight-code-line {\n  background-color: #1c1425;\n  display: block;\n  margin-right: -1em;\n  margin-left: -1em;\n  padding-right: 1em;\n  padding-left: .75em;\n  border-left: .25em solid #ff6b81; }\n\ndiv.ngxp__container {\n  background: #FFF;\n  color: #444;\n  border: 0;\n  max-width: 250px;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 14px 0 rgba(0, 0, 0, 0.12);\n  z-index: 1099; }\n\ndiv.ngxp__container > .ngxp__arrow:before {\n    background-color: #FFF; }\n\n/* You can add global scss to this file, and also import other style files */\n\n@font-face {\n  font-family: Luckiest Guy;\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: local(\"Luckiest Guy Regular\"), local(\"LuckiestGuy-Regular\"), url('luckiest-guy-latin-400.woff2') format(\"woff2\"), url('luckiest-guy-latin-400.woff') format(\"woff\"); }\n\nbody {\n  line-height: 1.6;\n  background: #2f263c;\n  color: #f4e0f1;\n  font-family: -apple-system, Helvetica Neue, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, sans-serif;\n  margin: 0;\n  box-sizing: border-box; }\n\nbody *, body :after, body :before {\n    box-sizing: inherit; }\n\nbody div.ngxp__container {\n    line-height: 1; }\n\nbody h1,\n  body h2,\n  body h3,\n  body h4,\n  body h5,\n  body h6 {\n    margin: 8px 0; }\n\nbody p {\n    margin: 0; }\n\nbody a.pop-link-yellow {\n    color: #ffe69d;\n    -webkit-text-decoration: none;\n    text-decoration: none;\n    padding-bottom: 1px;\n    border-bottom: 2px solid rgba(255, 228, 148, 0.25);\n    transition: border-bottom-color 0.15s ease-in-out; }\n\nbody a.pop-link-yellow:hover {\n      border-bottom: 2px solid #ffe494; }\n\nbody ul {\n    padding-left: 20px;\n    margin: 0; }\n\nbody ul.pop-list {\n      list-style: none; }\n\nbody ul.pop-list > li > svg {\n        display: inline-block;\n        top: 6px;\n        left: 2px;\n        margin-right: 6px;\n        position: relative;\n        color: #ff6b81;\n        height: 25px;\n        margin-left: -30px; }\n\nbody .tour-wizard-spacer {\n    width: 100%;\n    height: 150px; }\n\nbody .pop-title-light {\n    font-family: 'Luckiest Guy', sans-serif;\n    -webkit-letter-spacing: 0.5px;\n    -moz-letter-spacing: 0.5px;\n    -ms-letter-spacing: 0.5px;\n    letter-spacing: 0.5px;\n    text-transform: uppercase;\n    font-size: 30px;\n    -webkit-font-smoothing: antialiased;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    line-height: 1.1;\n    color: #f4e0f1; }\n\nbody .pop-button-white {\n    cursor: pointer;\n    display: inline-block;\n    background: white;\n    padding: 10px 16px;\n    border-radius: 4px;\n    -webkit-text-decoration: none;\n    text-decoration: none;\n    font-size: 16px;\n    font-weight: 700;\n    color: #c83b50;\n    box-shadow: 0 8px 16px -4px rgba(200, 59, 80, 0.5);\n    transition: all 0.2s ease-in-out;\n    text-transform: uppercase;\n    margin: 5px; }\n\nbody .pop-button-white > svg {\n      vertical-align: -7px;\n      margin-right: 5px; }\n\nbody .pop-box {\n    margin: 8px;\n    padding: 16px;\n    border-radius: 10px;\n    border: 2px dashed #ff6b81;\n    background-color: #281e36; }\n\nbody .pop-d-flex {\n    display: flex; }\n\nbody .pop-d-flex > * {\n      flex: 1; }\n\nbody .pop-flex-justify-center {\n    justify-content: center; }\n\nbody .pop-flex-align-center {\n    align-items: center; }\n\nbody strong {\n    color: #ff6b81; }\n\nbody .pop-text-center {\n    text-align: center; }\n\nbody .pop-text-bold {\n    font-weight: bold; }\n\nbody .pop-lucky-font {\n    font-family: 'Luckiest Guy', sans-serif; }\n\nbody .pop-color-primary {\n    color: #c83b50; }\n\nbody .pop-code-box {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background: #642f45;\n    border-radius: 4px;\n    color: #ffd3f8;\n    font-family: Menlo, SFMono-Regular, Consolas, Liberation Mono, monospace;\n    font-size: 14px;\n    overflow: hidden;\n    font-weight: normal;\n    margin: 5px;\n    max-width: 100%;\n    overflow-x: auto; }\n\nbody .pop-code-box > div {\n      padding: 10px 15px;\n      white-space: nowrap;\n      display: flex;\n      background: #642f45;\n      border-radius: 4px;\n      color: #ffd3f8;\n      font-family: Menlo, SFMono-Regular, Consolas, Liberation Mono, monospace;\n      font-size: 14px;\n      overflow: hidden;\n      font-weight: normal;\n      margin: 5px;\n      max-width: 100%;\n      overflow-x: auto; }\n\nbody .pop-code-box > div:first-child {\n        display: flex;\n        -webkit-align-items: center;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        background: rgba(0, 0, 0, 0.25);\n        text-align: center;\n        padding: 0 15px;\n        color: white; }\n\nbody .pop-code-box .pop-code-box-icon {\n      max-width: 50px;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      user-select: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcZ2l0XFxuZ3gtdG91ci13aXphcmQvc3JjXFxzY3NzXFxjb2RlLWhpZ2hsaWdodC5zY3NzIiwic3JjL0M6XFxnaXRcXG5neC10b3VyLXdpemFyZC9ub2RlX21vZHVsZXNcXG5neC1wb3BwZXJqc1xcc2Nzc1xcdGhlbWUuc2NzcyIsInNyYy9DOlxcZ2l0XFxuZ3gtdG91ci13aXphcmQvcHJvamVjdHNcXG5neC10b3VyLXdpemFyZFxcc3JjXFxsaWJcXHNjc3NcXHRvdXItd2l6YXJkLXZhcnMuc2NzcyIsInNyYy9DOlxcZ2l0XFxuZ3gtdG91ci13aXphcmQvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9DOlxcZ2l0XFxuZ3gtdG91ci13aXphcmQvc3JjXFxzY3NzXFx2YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzTkFBc047RUFDdE4sZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gscUJBQXFCO0VBRXJCLGFBQ0YsRUFBQTs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFDRixFQUFBOztBQUhBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUNGLEVBQUE7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFDRixFQUFBOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsMkNBQXdDO0lBQ3hDLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQ0YsRUFBQSxFQUFDOztBQUdIO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixxQkFDRixFQUFBOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUNGLEVBQUE7O0FBSkE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25C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QkFBdUIsRUFBQTs7QUFuSTNCO0lBdUlJLG1CQUFtQixFQUFBOztBQXZJdkI7SUErSUksY0MxSjBCLEVBQUE7O0FEVzlCO0lBbUpJLGtCQUFrQixFQUFBOztBQW5KdEI7SUF1SkksaUJBQWlCLEVBQUE7O0FBdkpyQjtJQTJKSSx1Q0FBdUMsRUFBQTs7QUEzSjNDO0lBK0pJLGNDM0tvQixFQUFBOztBRFl4QjtJQXdLSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3RUFBd0U7SUFDeEUsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTs7QUFwTHBCO01BdUxNLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFJbkIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsY0FBYztNQUNkLHdFQUF3RTtNQUN4RSxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsZUFBZTtNQUNmLGdCQUFnQixFQUFBOztBQXRNdEI7UUE0TVEsYUFBYTtRQUNiLDJCQUEyQjtRQUMzQix5QkFBeUI7UUFDekIsc0JBQXNCO1FBQ3RCLCtCQUErQjtRQUMvQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLFlBQVksRUFBQTs7QUFuTnBCO01Bd05NLGVBQWU7TUFDZix5QkFBeUI7TUFDekIsc0JBQXNCO01BRXRCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNvZGVbY2xhc3MqPWxhbmd1YWdlLV0sIHByZVtjbGFzcyo9bGFuZ3VhZ2UtXSB7XHJcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBNZW5sbywgTW9uYWNvLCBBbmRhbGUgTW9ubyBXVCwgQW5kYWxlIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBMdWNpZGEgU2FucyBUeXBld3JpdGVyLCBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIExpYmVyYXRpb24gTW9ubywgTmltYnVzIE1vbm8gTCwgQ291cmllciBOZXcsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGRpcmVjdGlvbjogbHRyO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHByZTtcclxuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcclxuICB3b3JkLWJyZWFrOiBub3JtYWw7XHJcbiAgLW1vei10YWItc2l6ZTogNDtcclxuICAtby10YWItc2l6ZTogNDtcclxuICB0YWItc2l6ZTogNDtcclxuICAtd2Via2l0LWh5cGhlbnM6IG5vbmU7XHJcbiAgLW1zLWh5cGhlbnM6IG5vbmU7XHJcbiAgaHlwaGVuczogbm9uZVxyXG59XHJcblxyXG5jb2RlW2NsYXNzKj1sYW5ndWFnZS1dOjpzZWxlY3Rpb24sIGNvZGVbY2xhc3MqPWxhbmd1YWdlLV0gOjpzZWxlY3Rpb24sIHByZVtjbGFzcyo9bGFuZ3VhZ2UtXTo6c2VsZWN0aW9uLCBwcmVbY2xhc3MqPWxhbmd1YWdlLV0gOjpzZWxlY3Rpb24ge1xyXG4gIHRleHQtc2hhZG93OiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICM4ZjUxZTZcclxufVxyXG5cclxucHJlW2NsYXNzKj1sYW5ndWFnZS1dIHtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgbWFyZ2luOiAxZW0gLTE1cHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogIzI4MWUzNjtcclxuICBjb2xvcjogI2ZmZTY5ZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICBwcmVbY2xhc3MqPWxhbmd1YWdlLV0ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgaHNsYSgwLCAwJSwgMTAwJSwgLjA1KTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gIH1cclxufVxyXG5cclxuOm5vdChwcmUpID4gY29kZVtjbGFzcyo9bGFuZ3VhZ2UtXSB7XHJcbiAgY29sb3I6ICNmZjZiODE7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXBcclxufVxyXG5cclxuOm5vdChwcmUpID4gY29kZVtjbGFzcyo9bGFuZ3VhZ2UtXTo6c2VsZWN0aW9uLCA6bm90KHByZSkgPiBjb2RlW2NsYXNzKj1sYW5ndWFnZS1dIDo6c2VsZWN0aW9uIHtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjOGY1MWU2O1xyXG4gIGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi50b2tlbi1saW5lIHtcclxuICBtaW4taGVpZ2h0OiAxZW1cclxufVxyXG5cclxuLnRva2VuLmNkYXRhLCAudG9rZW4uY29tbWVudCwgLnRva2VuLmRvY3R5cGUsIC50b2tlbi5wcm9sb2cge1xyXG4gIGNvbG9yOiAjOTViMmRiXHJcbn1cclxuXHJcbi50b2tlbi5rZXl3b3JkLCAudG9rZW4ucHVuY3R1YXRpb24ge1xyXG4gIGNvbG9yOiAjNGVkZWU1XHJcbn1cclxuXHJcbi50b2tlbi5uYW1lc3BhY2Uge1xyXG4gIG9wYWNpdHk6IC43XHJcbn1cclxuXHJcbi50b2tlbi5ib29sZWFuLCAudG9rZW4ubnVtYmVyLCAudG9rZW4ub3BlcmF0b3IsIC50b2tlbi50YWcge1xyXG4gIGNvbG9yOiAjZWQ2NTVlXHJcbn1cclxuXHJcbi50b2tlbi5mdW5jdGlvbiwgLnRva2VuLnByb3BlcnR5IHtcclxuICBjb2xvcjogI2I4ODZmZFxyXG59XHJcblxyXG4udG9rZW4uYXRydWxlLWlkLCAudG9rZW4uc2VsZWN0b3IsIC50b2tlbi50YWctaWQge1xyXG4gIGNvbG9yOiAjZjNlYmZmXHJcbn1cclxuXHJcbi50b2tlbi5hdHRyLW5hbWUsIGNvZGUubGFuZ3VhZ2UtamF2YXNjcmlwdCB7XHJcbiAgY29sb3I6ICNkNmI5ZmVcclxufVxyXG5cclxuLmxhbmd1YWdlLWNzcyAudG9rZW4uc3RyaW5nLCAubGFuZ3VhZ2Utc2NzcyAudG9rZW4uc3RyaW5nLCAuc3R5bGUgLnRva2VuLnN0cmluZywgLnRva2VuLmF0cnVsZSwgLnRva2VuLmF0dHItdmFsdWUsIC50b2tlbi5jb250cm9sLCAudG9rZW4uZGlyZWN0aXZlLCAudG9rZW4uZW50aXR5LCAudG9rZW4ucGxhY2Vob2xkZXIsIC50b2tlbi5yZWdleCwgLnRva2VuLnN0YXRlbWVudCwgLnRva2VuLnN0cmluZywgLnRva2VuLnVuaXQsIC50b2tlbi51cmwsIC50b2tlbi52YXJpYWJsZSwgY29kZS5sYW5ndWFnZS1jc3MsIGNvZGUubGFuZ3VhZ2Utc2NzcyB7XHJcbiAgY29sb3I6ICNmZmI2YjNcclxufVxyXG5cclxuLnRva2VuLmRvbSB7XHJcbiAgY29sb3I6ICNhNWM4ZmZcclxufVxyXG5cclxuLnRva2VuLmRlbGV0ZWQge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoXHJcbn1cclxuXHJcbi50b2tlbi5pbnNlcnRlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZjNlYmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG59XHJcblxyXG4udG9rZW4uaXRhbGljIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWNcclxufVxyXG5cclxuLnRva2VuLmJvbGQsIC50b2tlbi5pbXBvcnRhbnQge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDBcclxufVxyXG5cclxuLnRva2VuLmltcG9ydGFudCB7XHJcbiAgY29sb3I6ICNkNmI5ZmVcclxufVxyXG5cclxuLnRva2VuLmVudGl0eSB7XHJcbiAgY3Vyc29yOiBoZWxwXHJcbn1cclxuXHJcbnByZSA+IGNvZGUuaGlnaGxpZ2h0IHtcclxuICBvdXRsaW5lOiAuNGVtIHNvbGlkICNhYTc1ZjU7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IC40ZW1cclxufVxyXG5cclxuLmxpbmUtbnVtYmVycyAubGluZS1udW1iZXJzLXJvd3Mge1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzM3MmY0MlxyXG59XHJcblxyXG4ubGluZS1udW1iZXJzLXJvd3MgPiBzcGFuOmJlZm9yZSB7XHJcbiAgY29sb3I6ICMzNzJmNDJcclxufVxyXG5cclxuLmxpbmUtaGlnaGxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNywgMTAxLCA5NCwgLjIpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMzcsIDEwMSwgOTQsIC4yKSA3MCUsIHJnYmEoMjM3LCAxMDEsIDk0LCAwKSlcclxufVxyXG5cclxuLmdhdHNieS1oaWdobGlnaHQtY29kZS1saW5lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxNDI1O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogLTFlbTtcclxuICBtYXJnaW4tbGVmdDogLTFlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAuNzVlbTtcclxuICBib3JkZXItbGVmdDogLjI1ZW0gc29saWQgI2ZmNmI4MVxyXG59IiwiQG1peGluIG5neC1wb3BwZXJqcy10aGVtZSgkYmFja2dyb3VuZCwgJHRleHQsICRtYXgtd2lkdGg6IDI1MHB4LCAkei1pbmRleDogOTk5KSB7XHJcblxyXG4gIGRpdi5uZ3hwX19jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XHJcbiAgICBjb2xvcjogJHRleHQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgei1pbmRleDogJHotaW5kZXg7XHJcblxyXG4gICAgPiAubmd4cF9fYXJyb3cge1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCIkdG91ci1wb3BwZXItY29sb3I6ICNGRkYgIWRlZmF1bHQ7XHJcbiR0b3VyLXBvcHBlci10ZXh0LWNvbG9yOiAjNDQ0ICFkZWZhdWx0O1xyXG4kdG91ci1kZWZhdWx0LXppbmRleDogOTk5ICFkZWZhdWx0O1xyXG4kdG91ci16aW5kZXgtZmFjdG9yOiAxMDAgIWRlZmF1bHQ7XHJcbiR0b3VyLXBhZC1mYWN0b3I6IDhweCAhZGVmYXVsdDtcclxuJHRvdXItcG9wcGVyLXdpZHRoOiAyNTBweCAhZGVmYXVsdDsiLCJAaW1wb3J0IFwic2Nzcy92YXJzXCI7XHJcbkBpbXBvcnQgXCJzY3NzL2NvZGUtaGlnaGxpZ2h0XCI7XHJcbkBpbXBvcnQgXCJzY3NzL3BvcHBlci10aGVtZVwiO1xyXG5AaW1wb3J0IFwifm5neC1wb3BwZXJqcy9zY3NzL3RoZW1lXCI7XHJcbkBpbXBvcnQgXCJ0b3VyLXdpemFyZFwiO1xyXG5cclxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHNjc3MgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IEx1Y2tpZXN0IEd1eTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgc3JjOiBsb2NhbChcIkx1Y2tpZXN0IEd1eSBSZWd1bGFyXCIpLCBsb2NhbChcIkx1Y2tpZXN0R3V5LVJlZ3VsYXJcIiksIHVybChhc3NldHMvZm9udHMvbHVja2llc3QtZ3V5LWxhdGluLTQwMC53b2ZmMikgZm9ybWF0KFwid29mZjJcIiksIHVybChhc3NldHMvZm9udHMvbHVja2llc3QtZ3V5LWxhdGluLTQwMC53b2ZmKSBmb3JtYXQoXCJ3b2ZmXCIpXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgYmFja2dyb3VuZDogbWFwLWdldCgkcG9wLWNvbG9ycywgYmFja2dyb3VuZCk7XHJcbiAgY29sb3I6IG1hcC1nZXQoJHBvcC1jb2xvcnMsIGFjY2VudCk7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSBOZXVlLCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICosIDphZnRlciwgOmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG4gIH1cclxuXHJcbiAgZGl2Lm5neHBfX2NvbnRhaW5lciB7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICB9XHJcblxyXG4gIC8vIENPTU1PTiBFTEVNRU5UUyAtIFNUQVJUXHJcblxyXG4gIGgxLFxyXG4gIGgyLFxyXG4gIGgzLFxyXG4gIGg0LFxyXG4gIGg1LFxyXG4gIGg2IHtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgJi5wb3AtbGluay15ZWxsb3cge1xyXG4gICAgICBjb2xvcjogI2ZmZTY5ZDtcclxuICAgICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyMjgsIDE0OCwgMC4yNSk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjE1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjI4LCAxNDgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgJi5wb3AtbGlzdCB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG4gICAgICA+IGxpID4gc3ZnIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdG9wOiA2cHg7XHJcbiAgICAgICAgbGVmdDogMnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBjb2xvcjogbWFwLWdldCgkcG9wLWNvbG9ycywgcHJpbWFyeS1saWdodCk7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRvdXItd2l6YXJkLXNwYWNlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgfVxyXG5cclxuICAvLyBDT01NT04gRUxFTUVOVFMgLSBFTkRcclxuXHJcbiAgLnBvcC10aXRsZS1saWdodCB7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2tpZXN0IEd1eScsIHNhbnMtc2VyaWY7XHJcbiAgICAtd2Via2l0LWxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIC1tb3otbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgLW1zLWxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgIGNvbG9yOiBtYXAtZ2V0KCRwb3AtY29sb3JzLCBhY2NlbnQpO1xyXG4gIH1cclxuXHJcbiAgLnBvcC1idXR0b24td2hpdGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogbWFwLWdldCgkcG9wLWNvbG9ycywgcHJpbWFyeSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IC00cHggcmdiYSgyMDAsIDU5LCA4MCwgMC41KTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICA+IHN2ZyB7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiAtN3B4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wb3AtYm94IHtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgI2ZmNmI4MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODFlMzY7XHJcbiAgfVxyXG5cclxuICAvLyBMQVlPVVQgLSBTVEFSVFxyXG5cclxuICAucG9wLWQtZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgID4gKiB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucG9wLWZsZXgtanVzdGlmeS1jZW50ZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucG9wLWZsZXgtYWxpZ24tY2VudGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAvLyBMQVlPVVQgLSBFTkRcclxuXHJcbiAgLy8gVFlQT0dSQVBIWSAtIFNUQVJUXHJcblxyXG4gIHN0cm9uZyB7XHJcbiAgICBjb2xvcjogbWFwLWdldCgkcG9wLWNvbG9ycywgcHJpbWFyeS1saWdodCk7XHJcbiAgfVxyXG5cclxuICAucG9wLXRleHQtY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5wb3AtdGV4dC1ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLnBvcC1sdWNreS1mb250IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVja2llc3QgR3V5Jywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC5wb3AtY29sb3ItcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogbWFwLWdldCgkcG9wLWNvbG9ycywgcHJpbWFyeSk7XHJcbiAgfVxyXG5cclxuICAvLyBUWVBPR1JBUEhZIC0gRU5EXHJcblxyXG4gIC5wb3AtY29kZS1ib3gge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICM2NDJmNDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogI2ZmZDNmODtcclxuICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgU0ZNb25vLVJlZ3VsYXIsIENvbnNvbGFzLCBMaWJlcmF0aW9uIE1vbm8sIG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG5cclxuICAgID4gZGl2IHtcclxuICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYmFja2dyb3VuZDogIzY0MmY0NTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZDNmODtcclxuICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBTRk1vbm8tUmVndWxhciwgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgbW9ub3NwYWNlO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcblxyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucG9wLWNvZGUtYm94LWljb24ge1xyXG4gICAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSIsIiRwb3AtY29sb3JzOiAoXHJcbiAgICAgICAgYmFja2dyb3VuZDogIzJmMjYzYyxcclxuICAgICAgICB2aW9sZXQ6ICMzNjJjNGYsXHJcbiAgICAgICAgcHJpbWFyeTogI2M4M2I1MCxcclxuICAgICAgICBwcmltYXJ5LWxpZ2h0OiAjZmY2YjgxLFxyXG4gICAgICAgIGFjY2VudDogI2Y0ZTBmMSxcclxuICAgICAgICB0ZXh0OiAjZDJjYmU0XHJcbik7XHJcblxyXG4kcG9wLWFuZ3VsYXItbG9nby1zaXplOiA0MHB4O1xyXG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\git\ngx-tour-wizard\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map