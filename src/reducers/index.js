import { combineReducers } from 'redux';
/* reducer to manage routing */
import { routerReducer } from 'react-router-redux';
import counter from './counter';
export default combineReducers({
    router: routerReducer,
    // counter
});