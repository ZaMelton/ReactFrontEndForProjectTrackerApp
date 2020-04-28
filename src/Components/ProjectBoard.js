import React, { Component } from 'react'
import { ProjectItem } from './index';

class ProjectBoard extends Component {
    render() {
        return (
            <div className="container">
                <a href="/ProjectTaskForm.html" className="btn btn-primary mb-3">
                    <i> Create Project Task</i>
                </a>
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

export default ProjectBoard;
