import { GET_PROJECT_TASKS } from '../Actions/Types';

const initialState = {
    project_tasks: [],
};
    
export default function(state = initialState, action) {
    switch(action.type){
        case GET_PROJECT_TASKS:
            return {
                ...state,
                project_tasks: action.payload,
            };

        default:
            return state;
    }
}