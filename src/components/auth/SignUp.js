import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signUp(this.state);
    }
    render() {
        const { auth, authError } = this.props;
        if(auth.uid) return <Redirect to='/' />

        return (
        <div className="container">
            <div className="row">
                <div className="col s12 m6 offset-m3">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h4 className="teal-text darken-1">Sign Up</h4>
                        <div className="input-field">
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" name="firstName" id="firstName" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" name="lastName" id="lastName" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email" id="email" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <button className="btn pink lithen-1 z-depth-0">Sign Up</button>
                            <div className="red-text center">
                                { authError? <p>{authError}</p>: null }
                            </div>
                        </div>
                    </form> 
                </div>
            </div>            
        </div>
        )
    }
}

const mapStateToProps =(state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
