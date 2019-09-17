import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = (props) => {
    const { project, auth } = props;
    if(!auth.uid) return <Redirect to='/signIn' />
    
    if(project){
        return(        
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title} </span>
                        <p>{project.content}</p>                   
                    </div>
                    <div className="card-action gray darken-4 gray-text">
                        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                        <p>{moment(project.createdAt.toDate()).calendar()}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className="container section">
                Project loading...
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return{
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails);