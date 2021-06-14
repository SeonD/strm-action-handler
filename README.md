# Strm Action Handler


## How to use this module

``` javascript
import actionHandlers from 'strm-action-handler';

// With actionType, params

if (!actionHandlers[actionType]) {
    console.log('Invalid action type');
}

if (!actionHandlers[actionType].validate(params)) {
    console.log('Invalid parameters');
}

const newState = actionHandlers[actionType].apply(oldState, params);

```