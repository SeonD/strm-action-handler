"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fastJsonPatch = require("fast-json-patch");

var _ajv = _interopRequireDefault(require("ajv"));

var _json_patch = _interopRequireDefault(require("../schema/json_patch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ajv = new _ajv.default(); // Here goes some documentation about the action type, params, etc.
// Example action request payload
// {
//     "action_key": "a0932bb5508e4c377672d4af1a8f9761",
//     "revision_number": 16,
//     "action_type": "json_patch",
//     "params": [
//         [
//             {
//                 "op": "add", "path": "/new_field", "value": "Added in level0, with name new_field"
//             }
//         ]
//     ]
// }

const validate = ([patch]) => {
  const validatePatch = ajv.compile(_json_patch.default);

  if (!validatePatch(patch)) {
    return false;
  }

  return true;
};

const apply = (document, params) => {
  return (0, _fastJsonPatch.applyPatch)(document, params[0], true).newDocument;
};

var _default = {
  validate,
  apply
};
exports.default = _default;
//# sourceMappingURL=json_patch.js.map