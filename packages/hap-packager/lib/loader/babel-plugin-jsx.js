"use strict";var _pluginSyntaxJsx=_interopRequireDefault(require("@babel/plugin-syntax-jsx"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}module.exports=function(e){const t=e.types;return{inherits:_pluginSyntaxJsx.default,visitor:{JSXNamespacedName(e){throw e.buildCodeFrameError("不支持带命名空间的标签/属性")},JSXElement:{exit(e,r){const s=function(e,r){e.parent.children=t.react.buildChildren(e.parent);const s=n(e.node.name),a=[];let o;t.isIdentifier(s)?(o=s.name,a.push(t.stringLiteral(o))):a.push(s);let l=e.node.attributes;l=l.length?function(e){let n=[];const r=[];let s=!1;function a(){n.length&&(r.push(t.objectExpression(n)),n=[])}for(;e.length;){const o=e.shift();t.isJSXSpreadAttribute(o)?(a(),s=!0,r.push(o.argument)):n.push(i(o))}a(),s?(r.unshift(t.objectExpression([])),e=t.callExpression(t.identifier("__extend"),r)):e=r[0];return e}(l):t.nullLiteral();return a.push(l),t.callExpression(t.identifier("__elem"),a)}(e.get("openingElement")),a=n(e.get("openingElement").node.name);let o;t.isIdentifier(a)&&(o=a.name);const l=e.node.children.map(e=>t.isStringLiteral(e)?function(e,n){const i=[];return i.push(t.stringLiteral(e)),i.push(t.objectExpression([t.objectProperty(t.identifier("value"),t.callExpression(t.identifier("__s"),[t.stringLiteral(n)]))])),t.callExpression(t.identifier("__elem"),i)}("text"===o?"span":"text",e.value):e);s.arguments.push(t.arrayExpression(l)),e.replaceWith(t.inherits(s,e.node))}},Program(e){e.traverse({"ObjectMethod|FunctionExpression|ClassMethod"(e){const n={hasJsx:!1};e.traverse({JSXElement(){this.hasJsx=!0}},n),n.hasJsx&&(e.get("body").unshiftContainer("body",t.variableDeclaration("const",[t.variableDeclarator(t.identifier("__s"),t.memberExpression(t.thisExpression(),t.identifier("$stringify")))])),e.get("body").unshiftContainer("body",t.variableDeclaration("const",[t.variableDeclarator(t.identifier("__extend"),t.memberExpression(t.thisExpression(),t.identifier("$extend")))])),e.get("body").unshiftContainer("body",t.variableDeclaration("const",[t.variableDeclarator(t.identifier("__elem"),t.memberExpression(t.thisExpression(),t.identifier("$createElement")))])))}})}}};function n(e){return t.isJSXIdentifier(e)&&(e.type="Identifier"),e}function i(e){const n=function(e){return t.isJSXExpressionContainer(e)?e.expression:e}(e.value||t.booleanLiteral(!0));return t.isStringLiteral(n)&&!t.isJSXExpressionContainer(e.value)&&(n.value=n.value.replace(/\n\s+/g," ")),t.isValidIdentifier(e.name.name)?e.name.type="Identifier":e.name=t.stringLiteral(e.name.name),t.inherits(t.objectProperty(e.name,n),e)}};
//# sourceMappingURL=babel-plugin-jsx.js.map