import React, { Component } from 'react'
import { ProjectItem } from './index';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import { getBacklog } from '../Actions/ProjectTaskActions';

class ProjectBoard extends Component {

    componentDidMount() {
        this.props.getBacklog();
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
                            <ProjectItem/>
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
    getBacklog: propTypes.func.isRequired,
    project_tasks: propTypes.object.isRequired,
}

const mapStateToProps = state => ({
    project_tasks: state.project_task,
});

export default connect(mapStateToProps, {getBacklog}) (ProjectBoard);
