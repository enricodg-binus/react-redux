import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from './store/store';
import {ConnectedRouter} from "react-router-redux";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
