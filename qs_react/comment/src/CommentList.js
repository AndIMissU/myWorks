import React, {Component} from 'react';
class CommentList extends Component {
  render() {
    const comments = [
      {username:'a', content: 'f'},
      {username:'b', content: 'g'},
      {username:'c', content: 'h'},
      {username:'d', content: 'i'},
      {username:'e', content: 'j'}
    ]
    return (
      <div>
        {
          comments.map((comment, i) => {
            return (
              <div key={i}>
                {comment.username} : {comment.content}
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default CommentList;