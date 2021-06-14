import jp from 'jsonpath';

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

const validate = ([ path ]) => {
    if (typeof(path) !== 'string') {
        return false;
    }
    return true;
};

const apply = (document, [ path, newValue ]) => {
    jp.apply(document, path, () => newValue);
    return document;
};

export default { validate, apply };
