"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonpath = _interopRequireDefault(require("jsonpath"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Example action request payload
// {
//     "action_key": "a0932bb5508e4c377672d4af1a8f9761",
//     "revision_number": 21,
//     "action_type": "json_path",
//     "params": [
//         "$.with_name3",
//         "new value with name 3"
//     ]
// }
const validate = ([path]) => {
  if (typeof path !== 'string') {
    return false;
  }

  return true;
};

const apply = (document, [path, newValue]) => {
  _jsonpath.default.apply(document, path, () => newValue);

  return document;
};

var _default = {
  validate,
  apply
};
exports.default = _default;
//# sourceMappingURL=json_path.js.map