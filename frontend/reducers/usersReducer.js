import { merge } from 'lodash';
import {
    RECEIVE_ALL_USERS,
    RECEIVE_USER,
    REMOVE_USER,
} from '../actions/userActions'

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = merge({}, oldState);
        switch (action.type) {
            case RECEIVE_ALL_USERS:
                return action.users;
            case RECEIVE_USER:
                nextState = merge({}, nextState, action.users);
                return nextState;
            case REMOVE_USER:
                delete nextState[action.userId];
                return nextState;
            default:
                break;
        }
    return nextState;
};

export default UsersReducer;