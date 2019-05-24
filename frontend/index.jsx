import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import Root from './components/root';
//START TESTING!!!

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
    
    //END TESTING!!!



    ReactDOM.render(<Root store={store} />, root);
});