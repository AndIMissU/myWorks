import * as React from "react";
import router from "umi/router";
// 组件页面框架
import { SearchBar } from "antd-mobile"
// 在react和vue里面  styles也可以是js
// css 也可以 in js
import * as styles from './page.less'
export default class extends React.Component {
  constructor(props) {
    super(props);
    if (window.location.pathname.indexOf('/home') < 0 ) {
      router.replace('/home');
    }
  }
  render() {
    
    return (
      <div className={styles.home}>
        <header className={styles.header}>
          <svg viewBox="0 0 26 31" id="location" width="28px" height="34px"><path fill="#FFF" fillRule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path></svg>
          &nbsp;
        </header>
        {
            <div style={{zIndex: 1, height: '1.2rem', overflow: 'hidden'}}>
              <SearchBar placeholder="搜索商家，商品名称" className={styles.search} onSubmit={this.onSearch}/>
            </div>
        }
      </div>
    )
  }
}