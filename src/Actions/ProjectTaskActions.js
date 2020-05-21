import axios from 'axios';
import {GET_ERRORS, GET_PROJECT_TASKS, DELETE_PROJECT_TASK} from './Types';

export const addProjectTask = (project_task, history) => async dispatch => {

    try {
        await axios.post("http://localhost:8080/api/board", project_task);
        history.push("/");

        dispatch({
            type: GET_ERRORS,
            payload: {},
        });

    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data,
        });
    }
}

export const getAllTasks = () => async dispatch => {

    const response = await axios.get("http://localhost:8080/api/board/all");
    
    dispatch({
        type: GET_PROJECT_TASKS,
        payload: response.data,
    });
}

export const deleteTask = (pt_id) => async dispatch => {

    if(Window.confirm("Are you sure you want to delete this project? This can't be undone.")){
        await axios.delete("http://localhost:8080/api/board/" + {pt_id});
        dispatch({
            type: DELETE_PROJECT_TASK,
            payload: pt_id,
        });
    }
}