import { merge } from 'lodash';

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = merge({}, oldState);
    
    return nextState;
};

export default UsersReducer;