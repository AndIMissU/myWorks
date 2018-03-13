// reducers 是一个纯函数 旧状态 + 参数 返回新状态
export default (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
}