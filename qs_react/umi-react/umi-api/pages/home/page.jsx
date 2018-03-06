import router from 'umi/router';
import * as React from 'react';
export default class extends React.Component {
  constructor(props) {
    super(props);
    if(window.location.pathname.indexOf('/home') < 0) {
      router.replace('/home');
      return;
    }
  }
  render() {
    return (
      <div></div>
    )
  }
}