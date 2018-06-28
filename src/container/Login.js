import React from 'react';
import './Login.css';
import Menu from '../component/Menu';
import PageTitle from '../component/PageTitle';
import { BrowserRouter, Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import Alert from '../component/Alert';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: {
        email: '',
        password: ''
      },
      alertMessage: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { login } = this.state;

    this.setState({
      login: {
        ...login,
        [name]: value
      }
    });
  }

  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  isValid() {
    let errorMsg = '';
    const { login } = this.state;

    if (login.email === '') {
      errorMsg = 'Please provide your email\n';
      this.setState({
        alertMessage: errorMsg
      });
      return false;
    } else if (!this.validateEmail(login.email)) {
      errorMsg = 'Please provide your valid email\n';
      this.setState({
        alertMessage: errorMsg
      });
      return false;
    }

    if (login.password === '') {
      errorMsg = 'Please provide your password\n';
      this.setState({
        alertMessage: errorMsg
      });
      return false;
    }

    this.setState({
      alertMessage: errorMsg
    });
    return true;
  }

  handleSubmit() {
    if (this.isValid()) {
      fetch('http://localhost:4001/api/v1/login', {
        method: 'POST',
        body: JSON.stringify(this.state.login),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        return response.json();
      }).then(parsedJSON => {
        console.log('parsedjson: ', parsedJSON);
      });
    }
  }

  render() {

    const loginForm = <React.Fragment>
      <input
        className='Form-Input'
        type='text'
        name='email'
        placeholder='Email'
        value={this.state.login.email}
        onChange={(event) => this.handleChange(event)} />

      <input
        className='Form-Input'
        type='password'
        name='password'
        placeholder='Password'
        value={this.state.login.password}
        onChange={(event) => this.handleChange(event)} />

      <button
        className='Form-Submit'
        onClick={this.handleSubmit}>Submit</button>

      <div>
        <BrowserRouter >
          <Link to="/auth/login">
            <button
              className='btn-google ripple'>
              <SocialIcon network="google" color='#fff' style={{ height: 30, width: 30 }} className='social-icon' />
              &nbsp;Continue with Google</button>
          </Link>
        </BrowserRouter>
        <button
          className='btn-facebook ripple'>
          <SocialIcon network="facebook" color="#fff" style={{ height: 30, width: 30 }} />
          &nbsp;Continue with Facebook</button>

      </div>
      <div>
        <p>OR</p>
        <Link to='/signup/login'>New Account?</Link>
      </div>

    </React.Fragment>;

    let alertSuccess = null;
    if (this.state.alertMessage) {
      alertSuccess = <Alert message={this.state.alertMessage} />;
    }

    return (
      <React.Fragment>
        <Menu />
        <PageTitle title='Login' />
        {alertSuccess}
        <div className='LoginForm'>
          {loginForm}
        </div>
      </React.Fragment>
    );
  }
}

export default Login;