import React, {Component} from 'react'

export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            userName: '',
            password: ''
        }
    }

    updateUserName = (value) => {
        this.setState({userName: value});
    }
    updatePassword = (value) => {
        this.setState({password: value});
    }

    loginUser = () => {
        alert(`Logged in user: ${this.state.userName}. with password: ${this.state.password}`);
        this.setState({
            userName: '',
            password: ''
        })
    }

    render() {
        return(
            <div>
                <input value={this.state.userName} onChange={(e) => {this.updateUserName(e.target.value)}} />
                <input value={this.state.password} onChange={(e) => {this.updatePassword(e.target.value)}} />
                <button onClick={this.loginUser}>Login</button>
            </div>
        );
    }
}