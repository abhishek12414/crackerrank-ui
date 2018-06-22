import * as actionTypes from './action';

const initialState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
};

const reducer = (state=initialState, action) => {
  
  if(action.type === actionTypes.REGISTER) {
    return {
      user: {
        firstName: state.user.firstName,
        lastName: state.user.lastName,
        email: state.user.email,
        password: state.user.password
      }, 
    }
  }
  
  if(action.type === actionTypes.UPDATE) {
    fetch('http://localhost:4001/api/v1/register', {
      method: 'post',
      body: JSON.stringify(this.props.user)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log('Created Gist:', data.html_url);
    });
  return {
    user: {        
      [action.target.name]: action.target.value
    }
  }
}

return state;
};

export default reducer;