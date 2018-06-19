import {Controlled as CodeMirror} from 'react-codemirror2'
import CodeMirror from 'react-codemirror2';
// @import 'codemirror/lib/codemirror.css';
// @import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

<CodeMirror
  value={this.state.value}
  options={options}
  onBeforeChange={(editor, data, value) => {
    this.setState({value});
  }}
  onChange={(editor, data, value) => {
  }}
/>