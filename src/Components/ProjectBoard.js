import React, { Component } from 'react'
import { ProjectItem } from './index';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import { getAllTasks } from '../Actions/ProjectTaskActions';

class ProjectBoard extends Component {

    componentDidMount() {
        this.props.getAllTasks();
    }

    render() {
        const {project_tasks} = this.props.project_tasks;

        let toDoItems = [];
        let inProgressItems = [];
        let doneItems = [];

        const DetermineTaskData = project_tasks => {
            if(project_tasks.length < 1) {
                return (
                    <div className="alert alert-info text-center" role="alert">
                        There are no tasks to display...
                    </div>
                )
            } else {
                const tasks = project_tasks.map(project_task => (
                    <ProjectItem 
                        key={project_task.id} 
                        summary={project_task.summary} 
                        acceptanceCriteria={project_task.acceptanceCriteria}
                        status={project_task.status}
                    />
                ));

                for (let i = 0; i < tasks.length; i++) {
                    console.log(tasks[i]);
                    console.log(i);

                    if(tasks[i].props.status === "TO_DO"){
                        toDoItems.push(tasks[i]);
                    }

                    if(tasks[i].props.status === "IN_PROGRESS"){
                        inProgressItems.push(tasks[i]);
                    }

                    if(tasks[i].props.status === "DONE"){
                        doneItems.push(tasks[i]);
                    }
                }

                return (
                    <React.Fragment>
                        <div className="container">

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card text-center mb-2">
                                        <div className="card-header bg-secondary text-dark">
                                            <h3>TO DO</h3>
                                        </div>
                                    </div>
                                    {toDoItems}
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="card text-center mb-2">
                                        <div className="card-header bg-primary text-white">
                                            <h3>In Progress</h3>
                                        </div>
                                    </div>
                                    {inProgressItems}
                                </div>

                                <div className="col-md-4">
                                    <div className="card text-center mb-2">
                                        <div className="card-header bg-success text-white">
                                            <h3>Done</h3>
                                        </div>
                                    </div>
                                    {doneItems}
                                </div>

                            </div>
                        </div>
                    </React.Fragment>
                )
            }
        };

        const boardContent = DetermineTaskData(project_tasks);

        return (
            <div className="container">
                <Link to="/addProjectTaskForm" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"></i> Create Project Task
                </Link>
                <br />
                <hr />
                {boardContent}
            </div>
        )
    }
}

ProjectBoard.propTypes = {
    getAllTasks: propTypes.func.isRequired,
    project_tasks: propTypes.object.isRequired,
}

const mapStateToProps = state => ({
    project_tasks: state.project_task,
});

export default connect(mapStateToProps, {getAllTasks}) (ProjectBoard);
