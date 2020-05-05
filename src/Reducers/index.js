import { combineReducers } from 'redux';
import ErrorsReducer from './ErrorsReducer';

export default combineReducers({
    errors: ErrorsReducer
});