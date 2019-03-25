import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Store from './Ducks/Store';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
    <Provider store={Store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();