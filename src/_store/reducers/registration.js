import * as actionTypes from '../action';

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
  
  return state;
};

export default reducer;