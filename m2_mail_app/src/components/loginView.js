import React from "react";
import { login } from "./functions";

class LoginView extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        login(user).then(res => {
            if(res){ 
                this.props.history.push('/read');
            }
        });
    }

    render() {
        return(
            <div className="Login">
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>
                    <input type="email" name="email" placeholder="Email" onChange={this.onChange} />
                    <input type="password" name="password" placeholder="Password" onChange={this.onChange} />
                    <br/>
                    <input type="submit" value="Login now!" />
                </form>
            </div>
        );
    }
}

export default LoginView;