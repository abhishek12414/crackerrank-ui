import React from 'react';
import Menu from '../component/Menu';
import './RegisterUser.css';
import PageTitle from '../component/PageTitle';
import Alert from '../component/Alert';
import {Link} from 'react-router-dom'

class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: {
        name: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
      },
        submitted: false,
        userRegisterd: false
    };    
  }
  
  handleChange(event) {
    const {name, value} = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  };
  
  handleSubmit = (event) => {
    fetch('http://localhost:4001/api/v1/user', {
    method: 'POST',
    body:JSON.stringify(this.state.user),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).then(parsedJSON => {
    this.setState({
      user: {
        name: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
      },
      userRegisterd: true
    });
  });
}

render() {
  const registrationForm = <React.Fragment>
  <input 
    className="Form-Input"
    type="text" 
    name="name" 
    placeholder="Name" 
    value={this.state.user.name}
    onChange = {(event)=>this.handleChange(event)}/>
  
  <input 
  className="Form-Input"
  type="text" 
  name="email" 
  placeholder="Email" 
  value={this.state.user.email}
  onChange = {(event)=>this.handleChange(event)}/>

  <input 
  className="Form-Input"
  type="text" 
  name="mobile" 
  placeholder="Mobile" 
  value={this.state.user.mobile}
  onChange = {(event)=>this.handleChange(event)}/>
  
  <input 
  className="Form-Input"
  type="password" 
  name="password" 
  placeholder="Password" 
  value={this.state.user.password}
  onChange = {(event)=>this.handleChange(event)}/>
  
  <input 
  className="Form-Input"
  type="password" 
  name="confirmPassword" 
  placeholder="Confirm Password" 
  value={this.state.user.confirmPassword}
  onChange = {(event)=>this.handleChange(event)}/>
  
  <button 
  className="Form-Submit"
  onClick={this.handleSubmit}>Submit</button>
  <div>
      <p>OR</p>
      Already have an account <Link to="/">Login</Link>
    </div>
  </React.Fragment>;

  let alertSuccess = null;
  if(this.state.userRegisterd)
    alertSuccess = <Alert message="Successfully Registerd."/>;

  return(
    <div>
      <Menu />
      <PageTitle title="Registration"/>
      { alertSuccess }
      <div className="RegisterUser">
        {registrationForm}
      </div>
    </div>
  );
}
}

// const mapStateToProps = state => {
//   return {
//     user: state.user
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     // onIncrementCounter: () => dispatch({type: 'INCREMENT'})
//     // onStore: () => dispatch({type: actionTypes.REGISTER}),
//     change: (e) => dispatch({type: actionTypes.UPDATE, target:e})
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Register);
export default RegisterUser;