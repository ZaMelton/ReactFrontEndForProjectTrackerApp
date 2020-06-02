import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { getProjectTask } from '../Actions/ProjectTaskActions'

class UpdateProjectTaskForm extends Component {

    componentDidMount() {
        const {pt_id} = this.props.match.params;
        this.props.getProjectTask(pt_id);
    }

    render() {
        return (
            <div className="addProjectTask">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h4 className="display-4 text-center">Add /Update Project Task</h4>

                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" name="summary" placeholder="Project Task summary" />
                                </div>

                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" placeholder="Acceptance Criteria" name="acceptanceCriteria"></textarea>
                                </div>

                                <div className="form-group">
                                    <select className="form-control form-control-lg" name="status">
                                        <option value="">Select Status</option>
                                        <option value="TO_DO">TO DO</option>
                                        <option value="IN_PROGRESS">IN PROGRESS</option>
                                        <option value="DONE">DONE</option>
                                    </select>
                                </div>

                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-sm-1'></div>
                                        <Link to="/" className="btn btn-primary col-sm-4">Back to Board</Link>
                                        <div className='col-sm-2'></div>
                                        <input type="submit" className="btn btn-success col-sm-4" />
                                        <div className='col-sm-1'></div>
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

UpdateProjectTaskForm.propTypes = {
    project_task: propTypes.object.isRequired,
    getProjectTask: propTypes.func.isRequired,
    errors: propTypes.object.isRequired,
}

const mapStateToProps = state => ({
    project_task: state.project_task,
    errors: state.errors,
});

export default connect(mapStateToProps, {getProjectTask} )(UpdateProjectTaskForm);
