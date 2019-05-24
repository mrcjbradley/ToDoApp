import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import Root from './components/root';
//START TESTING!!!
import {
    fetchAllUsers,
    fetchUser,
    postUser,
    updateUser,
    deleteUser
} from './actions/userActions'
//END TESTING!!!

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = { session: { currentUser: window.currentUser.user }, ui: { recentNotes: window.currentUser.recentNotes } };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');

    //START TESTING!!!
    window.fetchAllUsers = fetchAllUsers;
    window.fetchUser = fetchUser;
    window.postUser = postUser;
    window.updateUser = updateUser;
    window.deleteUser = deleteUser;

    window.store = store
    //END TESTING!!!



    ReactDOM.render(<Root store={store} />, root);
});