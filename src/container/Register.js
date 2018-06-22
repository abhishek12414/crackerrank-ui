import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../_store/action';

class Register extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
      },
      submitted: false
    };
    
  }

  handleChange = (event) => {
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
    
    // event.preventDefault();
    // this.setState({ submitted: true });
    // const { user } = this.state;
    // const { dispatch } = this.props;
    // dispatch()
    fetch('http://localhost:4001/api/v1/register', {
      method: 'post',
      body: JSON.stringify(this.props.user)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log('Created Gist:', data.html_url);
    });
}

render() {
  return(
    <div>
    <form onSubmit={this.handleSubmit}>
    {/* <form onSubmit={this.props.onStore}> */}
    <input 
    type="text" 
    name="firstName" 
    placeholder="Firstname" 
    value={this.state.user.firstName}
    handleChange = {(event)=>this.state.change(event.target)}
    onChange={(event)=>this.props.change(event.target)}/>
    
    <input 
    type="text" 
    name="lastName" 
    placeholder="Lastname" 
    value={this.props.user.lastName}
    onChange={(event)=>this.props.change(event.target)}/>
    
    <input 
    type="text" 
    name="email" 
    placeholder="Email" 
    value={this.props.user.email}
    onChange={(event)=>this.props.change(event.target)}/>
    
    <input 
    type="password" 
    name="password" 
    placeholder="Password" 
    value={this.props.user.password}
    onChange={(event)=>this.props.change(event.target)}/>
    
    <button>Submit</button>
    </form>
    </div>
  );
}
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onIncrementCounter: () => dispatch({type: 'INCREMENT'})
    // onStore: () => dispatch({type: actionTypes.REGISTER}),
    change: (e) => dispatch({type: actionTypes.UPDATE, target:e})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);