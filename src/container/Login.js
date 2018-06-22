import React from 'react';
import './Login.css';
import Menu from '../component/Menu';


class Login extends React.Component {
    
    render() {
        return(
            <div className="Landing">
                <Menu/>
                <div className="container">
                    <div className="banner">
                        Pratice Coding, Participate Events, Find Jobs
                    </div>
                    <div className="form-container">
                        <form method="POST" action="http://localhost:4001/api/v1/login">
                            <input type="text" name="username" placeholder="Username or email"/>
                            <input type="password" name="password" placeholder="Password"/>
                            <a href="/">Forget Password?</a>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;