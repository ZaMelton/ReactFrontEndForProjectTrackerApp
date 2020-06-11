import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProjectTask, addProjectTask } from '../Actions/ProjectTaskActions'


class UpdateProjectTaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            summary: "",
            acceptanceCriteria: "",
            status: "",
            errors: {},
        };
        
        this.onChange = this.handleChange.bind(this);
        this.onSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
    
        const { id, summary, acceptanceCriteria, status } = nextProps.project_task;
        this.setState({
          id,
          summary,
          acceptanceCriteria,
          status
        });
      }

    componentDidMount() {
        const {pt_id} = this.props.match.params;
        this.props.getProjectTask(pt_id);
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const projectTaskToUpdate = {
            id: this.state.id,
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status: this.state.status,
        };
        this.props.addProjectTask(projectTaskToUpdate, this.props.history);
    }

    render() {
        return (
            <div className="addProjectTask">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h4 className="display-4 text-center">Add /Update Project Task</h4>

                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        name="summary" 
                                        value={this.state.summary} 
                                        onChange={this.handleChange} 
                                    />
                                </div>

                                <div className="form-group">
                                    <textarea 
                                        className="form-control form-control-lg" 
                                        name="acceptanceCriteria"
                                        value={this.state.acceptanceCriteria}
                                        onChange={this.handleChange}>
                                    </textarea>
                                </div>

                                <div className="form-group">
                                    <select className="form-control form-control-lg" name="status" value={this.state.status} onChange={this.handleChange}>
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
    addProjectTask: propTypes.func.isRequired,
    errors: propTypes.object.isRequired,
}

const mapStateToProps = state => ({
    project_task: state.project_task.project_task,
    errors: state.errors,
});

export default connect(mapStateToProps, {getProjectTask, addProjectTask} )(UpdateProjectTaskForm);
