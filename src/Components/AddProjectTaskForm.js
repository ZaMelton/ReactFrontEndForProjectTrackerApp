import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddProjectTaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            summary: '',
            acceptanceCriteria: '',
            status: ''
        };
        
        this.onChange = this.handleChange.bind(this);
        this.onSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const newProjectTask = {
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status: this.state.status,
        };
        console.log(newProjectTask);
    }

    render() {
        return (
            <div className="addProjectTask">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            
                            <h4 className="display-4 text-center">Add/Update Project Task</h4>
                            <hr/>

                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input 
                                        className="form-control form-control-lg" 
                                        type="text"
                                        name="summary" 
                                        value={this.state.summary}
                                        placeholder="Project Task summary" 
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <textarea 
                                        className="form-control form-control-lg" 
                                        placeholder="Acceptance Criteria" 
                                        name="acceptanceCriteria"
                                        value={this.state.acceptanceCriteria}
                                        onChange={this.handleChange}
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <select 
                                        className="form-control form-control-lg" 
                                        name="status"
                                        value={this.state.status}
                                        onChange={this.handleChange}
                                    >
                                        <option value="">Select Status</option>
                                        <option value="TO_DO">To Do</option>
                                        <option value="IN_PROGRESS">In Progress</option>
                                        <option value="DONE">Done</option>
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

export default AddProjectTaskForm;
