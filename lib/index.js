import JsonPatch from './handlers/json_patch';
import JsonPath from './handlers/json_path';

// Map that keeps action type to action handler relations
export default {
    json_patch: JsonPatch,
    json_path: JsonPath
};
