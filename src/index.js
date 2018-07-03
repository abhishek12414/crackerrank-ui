import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './Router';
import {Provider} from 'react-redux';
import {store}  from './store';

// eslint-disable-next-line no-unused-vars
class App extends React.Component {
  render() {
    return (
      <Routers/>
    );
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));