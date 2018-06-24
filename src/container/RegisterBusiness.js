import React from 'react';
import Menu from '../component/Menu';
import Alert from '../component/Alert';
import './RegisterBusiness.css';
import {Link} from 'react-router-dom'
import PageTitle from '../component/PageTitle';

class RegisterBusiness extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      company: {
        email: '',
        password: '',
        Name: '',
        mobile: '',
        companyName: '',
        address: ''
      },
      submitted: false,
      userRegisterd: false
    };
    
  }
  
  handleChange(event) {
    const {name, value} = event.target;
    const { company } = this.state;
    this.setState({
      company: {
        ...company,
        [name]: value
      }
    });
  };
  
  handleSubmit = (event) => {
    fetch('http://localhost:4001/api/v1/business', {
      method: 'POST',
      body:JSON.stringify(this.state.company),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json();
    }).then(parsedJSON => {
      this.setState({
        company: {
          email: '',
          password: '',
          Name: '',
          mobile: '',
          companyName: '',
          address: ''
        },
        userRegisterd: true
      });
    });
  }

  render() {
    const registrationForm = 
      <div>
        <input 
          className="Form-Input"
          type="text" 
          name="email" 
          placeholder="Email" 
          value={this.state.company.email}
          onChange = {(event)=>this.handleChange(event)}/>
      
        <input 
        className="Form-Input"
        type="password" 
        name="password" 
        placeholder="Password" 
        value={this.state.company.password}
        onChange = {(event)=>this.handleChange(event)}/>
        
        <input 
        className="Form-Input"
        type="text" 
        name="name" 
        placeholder="Full Name" 
        value={this.state.company.name}
        onChange = {(event)=>this.handleChange(event)}/>
        
        <input 
        className="Form-Input"
        type="text" 
        name="mobile" 
        placeholder="Mobile" 
        value={this.state.company.mobile}
        onChange = {(event)=>this.handleChange(event)}/>
        
        <input 
        className="Form-Input"
        type="text" 
        name="companyName" 
        placeholder="Company Name" 
        value={this.state.company.companyName}
        onChange = {(event)=>this.handleChange(event)}/>
        
        <input 
        className="Form-Input"
        type="text" 
        name="address" 
        placeholder="Address" 
        value={this.state.company.address}
        onChange = {(event)=>this.handleChange(event)}/>
        
        <button 
          className="Form-Submit"
          onClick={this.handleSubmit}>Submit</button>
          <div>
            <p>OR</p>
            Already have an account <Link to="/">Login</Link>
          </div>
      </div>;
      
    let alertSuccess = null;
    if(this.state.userRegisterd)
      alertSuccess = <Alert message="Successfully Registerd."/>;

    return(
      <React.Fragment>
        <Menu />
        <PageTitle title="Business Registeration"/>
        { alertSuccess }
        <div className="RegisterBusiness">
          {registrationForm}
        </div>        
      </React.Fragment>
    );
  }
}

export default RegisterBusiness;