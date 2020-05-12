import { combineReducers } from 'redux';
import ErrorsReducer from './ErrorsReducer';
import ProjectTaskReducer from './ProjectTaskReducer';

export default combineReducers({
    errors: ErrorsReducer,
    project_task: ProjectTaskReducer,
});