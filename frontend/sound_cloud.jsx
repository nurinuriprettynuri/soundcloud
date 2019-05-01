//React
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

//Component
// import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore()
    // const root1 = Root
    //TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //TESTING END
    // debugger
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});