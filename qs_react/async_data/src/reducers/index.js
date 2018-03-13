const posts = (state = {
    isFetching: false,
    items: [],
    didInvalidate: false
  }, action) => {
  switch (action.type) {
    case 'REQUEST_POSTS': 
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case 'RECEIVE_POSTS': 
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state;
  }
} 