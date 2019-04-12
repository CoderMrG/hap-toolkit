"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderPage=renderPage,exports.trimSlash=trimSlash,Object.defineProperty(exports,"KnownError",{enumerable:!0,get:function(){return _sharedUtils.KnownError}});var _fs=_interopRequireDefault(require("fs")),_path=_interopRequireDefault(require("path")),_util=_interopRequireDefault(require("util")),_sharedUtils=require("@hap-toolkit/shared-utils");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const read=_util.default.promisify(_fs.default.readFile);async function renderPage(e,r){const t=await read(e,"utf8");return(0,_sharedUtils.renderString)(t,r)}function trimSlash(e){return _path.default.normalize(e).replace(/\\/g,"/").replace(/(^\/+|\/+$)/g,"")}
//# sourceMappingURL=shared.js.map