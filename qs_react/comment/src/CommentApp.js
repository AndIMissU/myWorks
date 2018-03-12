import React, {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
class CommentApp extends Component {
  
  handleSubmitComment(comment) {
    console.log(comment);
  }
  render() {
    return (
      // document.createElement('div').className='wrapper'.appendChild();
      // DOMBuilder('div', {className: "wrapper", children:[]})
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList />
      </div>
    )
  }
}
export default CommentApp;