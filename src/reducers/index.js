import {combineReducers} from 'redux';
import todos from './todos';
import uiReduser from './visibilityElements'

export default combineReducers({
    todos,
    uiReduser
})