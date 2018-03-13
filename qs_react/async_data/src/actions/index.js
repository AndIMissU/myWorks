export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVW_POSTS = 'RECEIVE_POSTS';

export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  subreddit
});
export const receivePosts = (subreddit, json) => ({
  type: RECEIVW_POSTS,
  subreddit,
  posts: json.data.children.map( child => child.data ),
  receivedAt: Date.now
})
// 进行数据api交流
const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit));
  return fetch(`http://www.reddit.com/r/${subreddit}.json`)
  .then( response => response.json() )
  .then( json => dispatch(receivePosts, json) )
}