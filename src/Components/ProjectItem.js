import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProjectItem extends Component {
    render() {
        return (
            <div className="card mb-1 bg-light">

                <div className="card-header text-primary">
                    {this.props.summary}
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">summary</h5>
                    <p className="card-text text-truncate ">
                        {this.props.acceptanceCriteria}
                    </p>
                    <Link to='/addProjectTaskForm' className="btn btn-primary">
                        View / Update
                    </Link>

                    <button className="btn btn-danger ml-4">
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

export default ProjectItem;