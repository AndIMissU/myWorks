// 组件  react认为纯函数也是一个组件
// React和 Vue 一样  都有Component
// 函数也是类
// JSX 模板编译语法 
// import Link from 'umi/link';
// export default () => {
//   return <Link to="/list" >Go to list page</Link>
// }

// import Link from 'umi/link'
// // 一切皆资源皆可打包 .js
// // {color:red} Element.style.color = 'red'
// // base64 可以直接换成字符串  所以也可以变成js表达的东西
// import styles from './index.css'
// // antd ants-mobile dva
// import {Button} from 'antd'
// export default () => <div className={styles.normal}>
//     Index Page
//     <br/>
//     <Link to="/list">
//       <Button type="primary">go to /list</Button>
//     </Link>
    
//   </div>
import Home from './home/page';
export default Home;