import { merge } from 'lodash';

const TasksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = merge({}, oldState);
   
    return nextState;
};

export default TasksReducer;