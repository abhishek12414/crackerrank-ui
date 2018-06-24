import React from 'react';
import './Login.css';
import Menu from '../component/Menu';
import PageTitle from '../component/PageTitle';
import { Link } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login : {
        email: "",
        password: ""
      }
    }
  }
  
  handleChange = (event) =>{
    const { name, value } = event.target;
    const { login } = this.state;
    
    this.setState({
      login: {
        ...login,
        [name]: value
      }
    })
  }
  
  handleSubmit = () => {
    fetch('http://localhost:4001/api/v1/login', {
      method: 'POST',
      body: JSON.stringify(this.state.login),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json();
    }).then(parsedJSON => {
      console.log(parsedJSON);
    })
  }

  render() {

    const loginForm = <React.Fragment>
    <input 
    className="Form-Input"
    type="text" 
    name="email" 
    placeholder="Email" 
    value={this.state.login.email}
    onChange = {(event)=>this.handleChange(event)}/>
    
    <input 
    className="Form-Input"
    type="password" 
    name="password" 
    placeholder="Password" 
    value={this.state.login.password}
    onChange = {(event)=>this.handleChange(event)}/>
    
    <button 
    className="Form-Submit"
    onClick={this.handleSubmit}>Submit</button>
    <div>
      <p>OR</p>
      <Link to="/signup/user">New Account?</Link>
    </div>

    </React.Fragment>;

    return(
      <React.Fragment>
      <Menu />
      <PageTitle title="Login"/>
      <div className="LoginForm">
      {loginForm}
      </div>
      </React.Fragment>
    );
  }
}

export default Login;