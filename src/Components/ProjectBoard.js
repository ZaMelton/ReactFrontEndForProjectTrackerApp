import React, { Component } from 'react'
import { ProjectItem } from './index';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import { getAllTasks } from '../Actions/ProjectTaskActions';

class ProjectBoard extends Component {

    componentDidMount() {
        this.props.getAllTasks();

        const {project_tasks} = this.props.project_tasks;
        this.DetermineTaskData(project_tasks);
    }

    DetermineTaskData = (projectTasks) => {

        let boardContent;
        let toDoItems = [];
        let inProgressItems = [];
        let doneItems = [];

        if(projectTasks.length < 1) {

                console.log("asdfasdfas");
                console.log("asdfasdfas");

        } else {
            const tasks = projectTasks.map(projectTask => (
                <ProjectItem 
                    key={projectTask.id} 
                    summary={projectTask.summary} 
                    acceptanceCriteria={projectTask.acceptanceCriteria}
                    status={projectTask.status}
                />
            ));

            for (let i = 0; i < tasks.length; i++) {
                console.log(tasks[i]);
                console.log(tasks.length);

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
        }
    }

    render() {
        

        return (
            <div className="container">
                <Link to="/addProjectTaskForm" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"></i> Create Project Task
                </Link>
                <br />
                <hr />

                <div className="container">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-secondary text-dark">
                                    <h3>TO DO</h3>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-primary text-white">
                                    <h3>In Progress</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-success text-white">
                                    <h3>Done</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
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
