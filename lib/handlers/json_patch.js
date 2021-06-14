import { applyPatch } from 'fast-json-patch';
import Ajv from 'ajv';

import PATCH_SCHEMA from '../schema/json_patch';

const ajv = new Ajv();

// Here goes some documentation about the action type, params, etc.

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

const validate = ([ patch ]) => {
    const validatePatch = ajv.compile(PATCH_SCHEMA);
    if (!validatePatch(patch)) {
        return false;
    }
    return true;
};

const apply = (document, params) => {
    return applyPatch(document, params[0], true).newDocument;
};

export default { validate, apply };
