import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import { deleteTask } from '../Actions/ProjectTaskActions';

class ProjectItem extends Component {

    onDeleteClick(pt_id) {
        this.props.deleteTask(pt_id);
    }

    render() {
        return (
            <div className="card mb-1 bg-light">

                <div className="card-header text-primary">
                    {this.props.summary}
                </div>
                <div className="card-body bg-light">
                    <p className="card-text text-truncate ">
                        {this.props.acceptanceCriteria}
                    </p>
                    <Link to={`UpdateProjectTaskForm/${this.props.id}`} className="btn btn-primary">
                        View / Update
                    </Link>

                    <button className="btn btn-danger ml-4" onClick={this.onDeleteClick.bind(this, this.props.id)}>
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

ProjectItem.propTypes = {
    deleteTask: propTypes.func.isRequired,
};

export default connect(null, {deleteTask}) (ProjectItem);