import React, { Component } from 'react';
import Notes from './components/Notes';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import './index.css'
// 最小但愿的react组建就是带有render方法的component类实现
class App extends Component {
  render() {
    return (
      <Notes/>
    );
  }
}
export default App;
