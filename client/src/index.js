import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

window.store = store; //for dev

store.subscribe(() => {
    console.log('state: ', store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
