"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _json_patch = _interopRequireDefault(require("./handlers/json_patch"));

var _json_path = _interopRequireDefault(require("./handlers/json_path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Map that keeps action type to action handler relations
var _default = {
  json_patch: _json_patch.default,
  json_path: _json_path.default
};
exports.default = _default;
//# sourceMappingURL=index.js.map