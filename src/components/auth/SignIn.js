import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    state = {
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
        this.props.signIn(this.state);
    }
    render() {
        const { authError, auth } = this.props;
        if(auth.uid) return <Redirect to='/' />

        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <form onSubmit={this.handleSubmit} className="white">
                            <h4 className="teal-text darken-1">Sign In</h4>
                            <div className="input-field">
                                <label htmlFor="email">Email:</label>
                                <input type="text" name="email" id="email" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Password:</label>
                                <input type="password" name="password" id="password" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <button className="btn pink lithen-1 z-depth-0">Sign In</button>
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

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (cred) => dispatch(signIn(cred))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
