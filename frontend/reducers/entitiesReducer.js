import { combineReducers } from 'redux';
import tasks from './tasksReducer';
import users from './usersReducer';

export default combineReducers({
    tasks,
    users
});