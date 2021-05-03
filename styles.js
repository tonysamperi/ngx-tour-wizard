(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "code[class*=language-], pre[class*=language-] {\n  font-family: Consolas, Menlo, Monaco, Andale Mono WT, Andale Mono, Lucida Console, Lucida Sans Typewriter, DejaVu Sans Mono, Bitstream Vera Sans Mono, Liberation Mono, Nimbus Mono L, Courier New, Courier, monospace;\n  line-height: 1.5;\n  direction: ltr;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  hyphens: none; }\n\ncode[class*=language-]::-moz-selection, code[class*=language-] ::-moz-selection, pre[class*=language-]::-moz-selection, pre[class*=language-] ::-moz-selection {\n  text-shadow: none;\n  background: #8f51e6; }\n\ncode[class*=language-]::selection, code[class*=language-] ::selection, pre[class*=language-]::selection, pre[class*=language-] ::selection {\n  text-shadow: none;\n  background: #8f51e6; }\n\npre[class*=language-] {\n  padding: 10px 15px;\n  margin: 1em -15px;\n  overflow: auto;\n  background: #281e36;\n  color: #ffe69d;\n  font-size: 14px;\n  border-radius: 0; }\n\n@media (min-width: 600px) {\n  pre[class*=language-] {\n    font-size: 16px;\n    border: 1px solid rgba(255, 255, 255, 0.05);\n    margin-left: 0;\n    margin-right: 0;\n    border-radius: 10px; } }\n\n:not(pre) > code[class*=language-] {\n  color: #ff6b81;\n  font-weight: 700;\n  white-space: pre-wrap; }\n\n:not(pre) > code[class*=language-]::-moz-selection, :not(pre) > code[class*=language-] ::-moz-selection {\n  text-shadow: none;\n  background: #8f51e6;\n  color: #fff; }\n\n:not(pre) > code[class*=language-]::selection, :not(pre) > code[class*=language-] ::selection {\n  text-shadow: none;\n  background: #8f51e6;\n  color: #fff; }\n\n.token-line {\n  min-height: 1em; }\n\n.token.cdata, .token.comment, .token.doctype, .token.prolog {\n  color: #95b2db; }\n\n.token.keyword, .token.punctuation {\n  color: #4edee5; }\n\n.token.namespace {\n  opacity: .7; }\n\n.token.boolean, .token.number, .token.operator, .token.tag {\n  color: #ed655e; }\n\n.token.function, .token.property {\n  color: #b886fd; }\n\n.token.atrule-id, .token.selector, .token.tag-id {\n  color: #f3ebff; }\n\n.token.attr-name, code.language-javascript {\n  color: #d6b9fe; }\n\n.language-css .token.string, .language-scss .token.string, .style .token.string, .token.atrule, .token.attr-value, .token.control, .token.directive, .token.entity, .token.placeholder, .token.regex, .token.statement, .token.string, .token.unit, .token.url, .token.variable, code.language-css, code.language-scss {\n  color: #ffb6b3; }\n\n.token.dom {\n  color: #a5c8ff; }\n\n.token.deleted {\n  text-decoration: line-through; }\n\n.token.inserted {\n  border-bottom: 1px dotted #f3ebff;\n  text-decoration: none; }\n\n.token.italic {\n  font-style: italic; }\n\n.token.bold, .token.important {\n  font-weight: 700; }\n\n.token.important {\n  color: #d6b9fe; }\n\n.token.entity {\n  cursor: help; }\n\npre > code.highlight {\n  outline: .4em solid #aa75f5;\n  outline-offset: .4em; }\n\n.line-numbers .line-numbers-rows {\n  border-right-color: #372f42; }\n\n.line-numbers-rows > span:before {\n  color: #372f42; }\n\n.line-highlight {\n  background: rgba(237, 101, 94, 0.2);\n  background: linear-gradient(90deg, rgba(237, 101, 94, 0.2) 70%, rgba(237, 101, 94, 0)); }\n\n.gatsby-highlight-code-line {\n  background-color: #1c1425;\n  display: block;\n  margin-right: -1em;\n  margin-left: -1em;\n  padding-right: 1em;\n  padding-left: .75em;\n  border-left: .25em solid #ff6b81; }\n\ndiv.ngxp__container {\n  background: #FFF;\n  color: #444;\n  border: 0;\n  max-width: 250px;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 14px 0 rgba(0, 0, 0, 0.12);\n  z-index: 1099; }\n\ndiv.ngxp__container > .ngxp__arrow:before {\n    background-color: #FFF; }\n\n/* You can add global scss to this file, and also import other style files */\n\n@font-face {\n  font-family: Luckiest Guy;\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: local(\"Luckiest Guy Regular\"), local(\"LuckiestGuy-Regular\"), url('luckiest-guy-latin-400.woff2') format(\"woff2\"), url('luckiest-guy-latin-400.woff') format(\"woff\"); }\n\nbody {\n  line-height: 1.6;\n  background: #2f263c;\n  color: #f4e0f1;\n  font-family: -apple-system, Helvetica Neue, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, sans-serif;\n  margin: 0;\n  box-sizing: border-box; }\n\nbody *, body :after, body :before {\n    box-sizing: inherit; }\n\nbody div.ngxp__container {\n    line-height: 1; }\n\nbody h1,\n  body h2,\n  body h3,\n  body h4,\n  body h5,\n  body h6 {\n    margin: 8px 0; }\n\nbody p {\n    margin: 0; }\n\nbody a.pop-link-yellow {\n    color: #ffe69d;\n    -webkit-text-decoration: none;\n    text-decoration: none;\n    padding-bottom: 1px;\n    border-bottom: 2px solid rgba(255, 228, 148, 0.25);\n    transition: border-bottom-color 0.15s ease-in-out; }\n\nbody a.pop-link-yellow:hover {\n      border-bottom: 2px solid #ffe494; }\n\nbody ul {\n    padding-left: 20px;\n    margin: 0; }\n\nbody ul.pop-list {\n      list-style: none; }\n\nbody ul.pop-list > li > svg {\n        display: inline-block;\n        top: 6px;\n        left: 2px;\n        margin-right: 6px;\n        position: relative;\n        color: #ff6b81;\n        height: 25px;\n        margin-left: -30px; }\n\nbody .tour-wizard-spacer {\n    width: 100%;\n    height: 150px; }\n\nbody .pop-title-light {\n    font-family: 'Luckiest Guy', sans-serif;\n    -webkit-letter-spacing: 0.5px;\n    -moz-letter-spacing: 0.5px;\n    -ms-letter-spacing: 0.5px;\n    letter-spacing: 0.5px;\n    text-transform: uppercase;\n    font-size: 30px;\n    -webkit-font-smoothing: antialiased;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    line-height: 1.1;\n    color: #f4e0f1; }\n\nbody .pop-button-white {\n    cursor: pointer;\n    display: inline-block;\n    background: white;\n    padding: 10px 16px;\n    border-radius: 4px;\n    -webkit-text-decoration: none;\n    text-decoration: none;\n    font-size: 16px;\n    font-weight: 700;\n    color: #c83b50;\n    box-shadow: 0 8px 16px -4px rgba(200, 59, 80, 0.5);\n    transition: all 0.2s ease-in-out;\n    text-transform: uppercase;\n    margin: 5px; }\n\nbody .pop-button-white > svg {\n      vertical-align: -7px;\n      margin-right: 5px; }\n\nbody .pop-box {\n    margin: 8px;\n    padding: 16px;\n    border-radius: 10px;\n    border: 2px dashed #ff6b81;\n    background-color: #281e36; }\n\nbody .pop-d-flex {\n    display: flex; }\n\nbody .pop-d-flex > * {\n      flex: 1; }\n\nbody .pop-flex-justify-center {\n    justify-content: center; }\n\nbody .pop-flex-align-center {\n    align-items: center; }\n\nbody strong {\n    color: #ff6b81; }\n\nbody .pop-text-center {\n    text-align: center; }\n\nbody .pop-text-bold {\n    font-weight: bold; }\n\nbody .pop-lucky-font {\n    font-family: 'Luckiest Guy', sans-serif; }\n\nbody .pop-color-primary {\n    color: #c83b50; }\n\nbody .pop-code-box {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background: #642f45;\n    border-radius: 4px;\n    color: #ffd3f8;\n    font-family: Menlo, SFMono-Regular, Consolas, Liberation Mono, monospace;\n    font-size: 14px;\n    overflow: hidden;\n    font-weight: normal;\n    margin: 5px;\n    max-width: 100%;\n    overflow-x: auto; }\n\nbody .pop-code-box > div {\n      padding: 10px 15px;\n      white-space: nowrap;\n      display: flex;\n      background: #642f45;\n      border-radius: 4px;\n      color: #ffd3f8;\n      font-family: Menlo, SFMono-Regular, Consolas, Liberation Mono, monospace;\n      font-size: 14px;\n      overflow: hidden;\n      font-weight: normal;\n      margin: 5px;\n      max-width: 100%;\n      overflow-x: auto; }\n\nbody .pop-code-box > div:first-child {\n        display: flex;\n        -webkit-align-items: center;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        background: rgba(0, 0, 0, 0.25);\n        text-align: center;\n        padding: 0 15px;\n        color: white; }\n\nbody .pop-code-box .pop-code-box-icon {\n      max-width: 50px;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      user-select: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcZWFzeVBocFxcZWRzLXd3d1xcZ2l0XFxuZ3gtdG91ci13aXphcmQvc3JjXFxzY3NzXFxjb2RlLWhpZ2hsaWdodC5zY3NzIiwic3JjL0M6XFxlYXN5UGhwXFxlZHMtd3d3XFxnaXRcXG5neC10b3VyLXdpemFyZC9ub2RlX21vZHVsZXNcXG5neC1wb3BwZXJqc1xcc2Nzc1xcdGhlbWUuc2NzcyIsInNyYy9DOlxcZWFzeVBocFxcZWRzLXd3d1xcZ2l0XFxuZ3gtdG91ci13aXphcmQvcHJvamVjdHNcXG5neC10b3VyLXdpemFyZFxcc3JjXFxsaWJcXHNjc3NcXHRvdXItd2l6YXJkLXZhcnMuc2NzcyIsInNyYy9DOlxcZWFzeVBocFxcZWRzLXd3d1xcZ2l0XFxuZ3gtdG91ci13aXphcmQvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9DOlxcZWFzeVBocFxcZWRzLXd3d1xcZ2l0XFxuZ3gtdG91ci13aXphcmQvc3JjXFxzY3NzXFx2YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzTkFBc047RUFDdE4sZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gscUJBQXFCO0VBRXJCLGFBQ0YsRUFBQTs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFDRixFQUFBOztBQUhBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUNGLEVBQUE7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFDRixFQUFBOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsMkNBQXdDO0lBQ3hDLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQ0YsRUFBQSxFQUFDOztBQUdIO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixxQkFD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bkIsMEJBQTBCO0lBQzFCLHlCQUF5QixFQUFBOztBQXJIN0I7SUEySEksYUFBYSxFQUFBOztBQTNIakI7TUE4SE0sT0FBTyxFQUFBOztBQTlIYjtJQW1JSSx1QkFBdUIsRUFBQTs7QUFuSTNCO0lBdUlJLG1CQUFtQixFQUFBOztBQXZJdkI7SUErSUksY0MxSjBCLEVBQUE7O0FEVzlCO0lBbUpJLGtCQUFrQixFQUFBOztBQW5KdEI7SUF1SkksaUJBQWlCLEVBQUE7O0FBdkpyQjtJQTJKSSx1Q0FBdUMsRUFBQTs7QUEzSjNDO0lBK0pJLGNDM0tvQixFQUFBOztBRFl4QjtJQXdLSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3RUFBd0U7SUFDeEUsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTs7QUFwTHBCO01BdUxNLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFJbkIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsY0FBYztNQUNkLHdFQUF3RTtNQUN4RSxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsZUFBZTtNQUNmLGdCQUFnQixFQUFBOztBQXRNdEI7UUE0TVEsYUFBYTtRQUNiLDJCQUEyQjtRQUMzQix5QkFBeUI7UUFDekIsc0JBQXNCO1FBQ3RCLCtCQUErQjtRQUMvQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLFlBQVksRUFBQTs7QUFuTnBCO01Bd05NLGVBQWU7TUFDZix5QkFBeUI7TUFDekIsc0JBQXNCO01BRXRCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNvZGVbY2xhc3MqPWxhbmd1YWdlLV0sIHByZVtjbGFzcyo9bGFuZ3VhZ2UtXSB7XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgTWVubG8sIE1vbmFjbywgQW5kYWxlIE1vbm8gV1QsIEFuZGFsZSBNb25vLCBMdWNpZGEgQ29uc29sZSwgTHVjaWRhIFNhbnMgVHlwZXdyaXRlciwgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBMaWJlcmF0aW9uIE1vbm8sIE5pbWJ1cyBNb25vIEwsIENvdXJpZXIgTmV3LCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGRpcmVjdGlvbjogbHRyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICAtbW96LXRhYi1zaXplOiA0O1xuICAtby10YWItc2l6ZTogNDtcbiAgdGFiLXNpemU6IDQ7XG4gIC13ZWJraXQtaHlwaGVuczogbm9uZTtcbiAgLW1zLWh5cGhlbnM6IG5vbmU7XG4gIGh5cGhlbnM6IG5vbmVcbn1cblxuY29kZVtjbGFzcyo9bGFuZ3VhZ2UtXTo6c2VsZWN0aW9uLCBjb2RlW2NsYXNzKj1sYW5ndWFnZS1dIDo6c2VsZWN0aW9uLCBwcmVbY2xhc3MqPWxhbmd1YWdlLV06OnNlbGVjdGlvbiwgcHJlW2NsYXNzKj1sYW5ndWFnZS1dIDo6c2VsZWN0aW9uIHtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICM4ZjUxZTZcbn1cblxucHJlW2NsYXNzKj1sYW5ndWFnZS1dIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBtYXJnaW46IDFlbSAtMTVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICMyODFlMzY7XG4gIGNvbG9yOiAjZmZlNjlkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIHByZVtjbGFzcyo9bGFuZ3VhZ2UtXSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGhzbGEoMCwgMCUsIDEwMCUsIC4wNSk7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcbiAgfVxufVxuXG46bm90KHByZSkgPiBjb2RlW2NsYXNzKj1sYW5ndWFnZS1dIHtcbiAgY29sb3I6ICNmZjZiODE7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcFxufVxuXG46bm90KHByZSkgPiBjb2RlW2NsYXNzKj1sYW5ndWFnZS1dOjpzZWxlY3Rpb24sIDpub3QocHJlKSA+IGNvZGVbY2xhc3MqPWxhbmd1YWdlLV0gOjpzZWxlY3Rpb24ge1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZDogIzhmNTFlNjtcbiAgY29sb3I6ICNmZmZcbn1cblxuLnRva2VuLWxpbmUge1xuICBtaW4taGVpZ2h0OiAxZW1cbn1cblxuLnRva2VuLmNkYXRhLCAudG9rZW4uY29tbWVudCwgLnRva2VuLmRvY3R5cGUsIC50b2tlbi5wcm9sb2cge1xuICBjb2xvcjogIzk1YjJkYlxufVxuXG4udG9rZW4ua2V5d29yZCwgLnRva2VuLnB1bmN0dWF0aW9uIHtcbiAgY29sb3I6ICM0ZWRlZTVcbn1cblxuLnRva2VuLm5hbWVzcGFjZSB7XG4gIG9wYWNpdHk6IC43XG59XG5cbi50b2tlbi5ib29sZWFuLCAudG9rZW4ubnVtYmVyLCAudG9rZW4ub3BlcmF0b3IsIC50b2tlbi50YWcge1xuICBjb2xvcjogI2VkNjU1ZVxufVxuXG4udG9rZW4uZnVuY3Rpb24sIC50b2tlbi5wcm9wZXJ0eSB7XG4gIGNvbG9yOiAjYjg4NmZkXG59XG5cbi50b2tlbi5hdHJ1bGUtaWQsIC50b2tlbi5zZWxlY3RvciwgLnRva2VuLnRhZy1pZCB7XG4gIGNvbG9yOiAjZjNlYmZmXG59XG5cbi50b2tlbi5hdHRyLW5hbWUsIGNvZGUubGFuZ3VhZ2UtamF2YXNjcmlwdCB7XG4gIGNvbG9yOiAjZDZiOWZlXG59XG5cbi5sYW5ndWFnZS1jc3MgLnRva2VuLnN0cmluZywgLmxhbmd1YWdlLXNjc3MgLnRva2VuLnN0cmluZywgLnN0eWxlIC50b2tlbi5zdHJpbmcsIC50b2tlbi5hdHJ1bGUsIC50b2tlbi5hdHRyLXZhbHVlLCAudG9rZW4uY29udHJvbCwgLnRva2VuLmRpcmVjdGl2ZSwgLnRva2VuLmVudGl0eSwgLnRva2VuLnBsYWNlaG9sZGVyLCAudG9rZW4ucmVnZXgsIC50b2tlbi5zdGF0ZW1lbnQsIC50b2tlbi5zdHJpbmcsIC50b2tlbi51bml0LCAudG9rZW4udXJsLCAudG9rZW4udmFyaWFibGUsIGNvZGUubGFuZ3VhZ2UtY3NzLCBjb2RlLmxhbmd1YWdlLXNjc3Mge1xuICBjb2xvcjogI2ZmYjZiM1xufVxuXG4udG9rZW4uZG9tIHtcbiAgY29sb3I6ICNhNWM4ZmZcbn1cblxuLnRva2VuLmRlbGV0ZWQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaFxufVxuXG4udG9rZW4uaW5zZXJ0ZWQge1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNmM2ViZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZVxufVxuXG4udG9rZW4uaXRhbGljIHtcbiAgZm9udC1zdHlsZTogaXRhbGljXG59XG5cbi50b2tlbi5ib2xkLCAudG9rZW4uaW1wb3J0YW50IHtcbiAgZm9udC13ZWlnaHQ6IDcwMFxufVxuXG4udG9rZW4uaW1wb3J0YW50IHtcbiAgY29sb3I6ICNkNmI5ZmVcbn1cblxuLnRva2VuLmVudGl0eSB7XG4gIGN1cnNvcjogaGVscFxufVxuXG5wcmUgPiBjb2RlLmhpZ2hsaWdodCB7XG4gIG91dGxpbmU6IC40ZW0gc29saWQgI2FhNzVmNTtcbiAgb3V0bGluZS1vZmZzZXQ6IC40ZW1cbn1cblxuLmxpbmUtbnVtYmVycyAubGluZS1udW1iZXJzLXJvd3Mge1xuICBib3JkZXItcmlnaHQtY29sb3I6ICMzNzJmNDJcbn1cblxuLmxpbmUtbnVtYmVycy1yb3dzID4gc3BhbjpiZWZvcmUge1xuICBjb2xvcjogIzM3MmY0MlxufVxuXG4ubGluZS1oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNywgMTAxLCA5NCwgLjIpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjM3LCAxMDEsIDk0LCAuMikgNzAlLCByZ2JhKDIzNywgMTAxLCA5NCwgMCkpXG59XG5cbi5nYXRzYnktaGlnaGxpZ2h0LWNvZGUtbGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzE0MjU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IC0xZW07XG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gIHBhZGRpbmctbGVmdDogLjc1ZW07XG4gIGJvcmRlci1sZWZ0OiAuMjVlbSBzb2xpZCAjZmY2YjgxXG59IiwiQG1peGluIG5neC1wb3BwZXJqcy10aGVtZSgkYmFja2dyb3VuZCwgJHRleHQsICRtYXgtd2lkdGg6IDI1MHB4LCAkei1pbmRleDogOTk5KSB7XG5cbiAgZGl2Lm5neHBfX2NvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICAgY29sb3I6ICR0ZXh0O1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDVweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB6LWluZGV4OiAkei1pbmRleDtcblxuICAgID4gLm5neHBfX2Fycm93IHtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiJHRvdXItcG9wcGVyLWNvbG9yOiAjRkZGICFkZWZhdWx0O1xuJHRvdXItcG9wcGVyLXRleHQtY29sb3I6ICM0NDQgIWRlZmF1bHQ7XG4kdG91ci1kZWZhdWx0LXppbmRleDogOTk5ICFkZWZhdWx0O1xuJHRvdXItemluZGV4LWZhY3RvcjogMTAwICFkZWZhdWx0O1xuJHRvdXItcGFkLWZhY3RvcjogOHB4ICFkZWZhdWx0O1xuJHRvdXItcG9wcGVyLXdpZHRoOiAyNTBweCAhZGVmYXVsdDsiLCJAaW1wb3J0IFwic2Nzcy92YXJzXCI7XG5AaW1wb3J0IFwic2Nzcy9jb2RlLWhpZ2hsaWdodFwiO1xuQGltcG9ydCBcInNjc3MvcG9wcGVyLXRoZW1lXCI7XG5AaW1wb3J0IFwifm5neC1wb3BwZXJqcy9zY3NzL3RoZW1lXCI7XG5AaW1wb3J0IFwidG91ci13aXphcmRcIjtcblxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHNjc3MgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogTHVja2llc3QgR3V5O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiBsb2NhbChcIkx1Y2tpZXN0IEd1eSBSZWd1bGFyXCIpLCBsb2NhbChcIkx1Y2tpZXN0R3V5LVJlZ3VsYXJcIiksIHVybChhc3NldHMvZm9udHMvbHVja2llc3QtZ3V5LWxhdGluLTQwMC53b2ZmMikgZm9ybWF0KFwid29mZjJcIiksIHVybChhc3NldHMvZm9udHMvbHVja2llc3QtZ3V5LWxhdGluLTQwMC53b2ZmKSBmb3JtYXQoXCJ3b2ZmXCIpXG59XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMS42O1xuICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRwb3AtY29sb3JzLCBiYWNrZ3JvdW5kKTtcbiAgY29sb3I6IG1hcC1nZXQoJHBvcC1jb2xvcnMsIGFjY2VudCk7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBIZWx2ZXRpY2EgTmV1ZSwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgKiwgOmFmdGVyLCA6YmVmb3JlIHtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICB9XG5cbiAgZGl2Lm5neHBfX2NvbnRhaW5lciB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cblxuICAvLyBDT01NT04gRUxFTUVOVFMgLSBTVEFSVFxuXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBhIHtcbiAgICAmLnBvcC1saW5rLXllbGxvdyB7XG4gICAgICBjb2xvcjogI2ZmZTY5ZDtcbiAgICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjI4LCAxNDgsIDAuMjUpO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjE1cyBlYXNlLWluLW91dDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjI4LCAxNDgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgJi5wb3AtbGlzdCB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuXG4gICAgICA+IGxpID4gc3ZnIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgbGVmdDogMnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjb2xvcjogbWFwLWdldCgkcG9wLWNvbG9ycywgcHJpbWFyeS1saWdodCk7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50b3VyLXdpemFyZC1zcGFjZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cblxuICAvLyBDT01NT04gRUxFTUVOVFMgLSBFTkRcblxuICAucG9wLXRpdGxlLWxpZ2h0IHtcbiAgICBmb250LWZhbWlseTogJ0x1Y2tpZXN0IEd1eScsIHNhbnMtc2VyaWY7XG4gICAgLXdlYmtpdC1sZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgLW1vei1sZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgLW1zLWxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgY29sb3I6IG1hcC1nZXQoJHBvcC1jb2xvcnMsIGFjY2VudCk7XG4gIH1cblxuICAucG9wLWJ1dHRvbi13aGl0ZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogbWFwLWdldCgkcG9wLWNvbG9ycywgcHJpbWFyeSk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAtNHB4IHJnYmEoMjAwLCA1OSwgODAsIDAuNSk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbjogNXB4O1xuXG4gICAgPiBzdmcge1xuICAgICAgdmVydGljYWwtYWxpZ246IC03cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cblxuICAucG9wLWJveCB7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjZmY2YjgxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODFlMzY7XG4gIH1cblxuICAvLyBMQVlPVVQgLSBTVEFSVFxuXG4gIC5wb3AtZC1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgPiAqIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuICB9XG5cbiAgLnBvcC1mbGV4LWp1c3RpZnktY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5wb3AtZmxleC1hbGlnbi1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAvLyBMQVlPVVQgLSBFTkRcblxuICAvLyBUWVBPR1JBUEhZIC0gU1RBUlRcblxuICBzdHJvbmcge1xuICAgIGNvbG9yOiBtYXAtZ2V0KCRwb3AtY29sb3JzLCBwcmltYXJ5LWxpZ2h0KTtcbiAgfVxuXG4gIC5wb3AtdGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5wb3AtdGV4dC1ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5wb3AtbHVja3ktZm9udCB7XG4gICAgZm9udC1mYW1pbHk6ICdMdWNraWVzdCBHdXknLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgLnBvcC1jb2xvci1wcmltYXJ5IHtcbiAgICBjb2xvcjogbWFwLWdldCgkcG9wLWNvbG9ycywgcHJpbWFyeSk7XG4gIH1cblxuICAvLyBUWVBPR1JBUEhZIC0gRU5EXG5cbiAgLnBvcC1jb2RlLWJveCB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICM2NDJmNDU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGNvbG9yOiAjZmZkM2Y4O1xuICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgU0ZNb25vLVJlZ3VsYXIsIENvbnNvbGFzLCBMaWJlcmF0aW9uIE1vbm8sIG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuXG4gICAgPiBkaXYge1xuICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYmFja2dyb3VuZDogIzY0MmY0NTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGNvbG9yOiAjZmZkM2Y4O1xuICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBTRk1vbm8tUmVndWxhciwgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgbW9ub3NwYWNlO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wb3AtY29kZS1ib3gtaWNvbiB7XG4gICAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIH1cbiAgfVxuXG59IiwiJHBvcC1jb2xvcnM6IChcbiAgICAgICAgYmFja2dyb3VuZDogIzJmMjYzYyxcbiAgICAgICAgdmlvbGV0OiAjMzYyYzRmLFxuICAgICAgICBwcmltYXJ5OiAjYzgzYjUwLFxuICAgICAgICBwcmltYXJ5LWxpZ2h0OiAjZmY2YjgxLFxuICAgICAgICBhY2NlbnQ6ICNmNGUwZjEsXG4gICAgICAgIHRleHQ6ICNkMmNiZTRcbik7XG5cbiRwb3AtYW5ndWxhci1sb2dvLXNpemU6IDQwcHg7XG4iXX0= */", '', '']]

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

module.exports = __webpack_require__(/*! C:\easyPhp\eds-www\git\ngx-tour-wizard\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map