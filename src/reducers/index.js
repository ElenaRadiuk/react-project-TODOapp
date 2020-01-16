import {combineReducers} from 'redux';
import todos from './todos';
import uiReducer from './visibilityElements'

export default combineReducers({
    todos,
    uiReducer
})