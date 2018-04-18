import React from 'react';
import { Layout, Menu, Tabs, Form, Message }
  from 'antd';
import LoginTab from '../../components/LoginTab';
const { Header, Content, Footer } = Layout
const TabPane = Tabs.TabPane;
class App extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo"/>
          <Menu 
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{lineHeight: '64px'}}>
            <Menu.Item key="/home">login</Menu.Item>
            <Menu.Item key="/main">article</Menu.Item>
            <Menu.Item key="/editor">editor</Menu.Item>
          </Menu>
        </Header>
        <Content style={{padding: '0 50px'}}>
          <div style={{background: '#fff', padding: 24,
           minHeight: 280}}>
            <Tabs defaultActiveKey="1" size="small">
              <TabPane tab="登录" key="1">
                <LoginTab />
              </TabPane>
              <TabPane tab="注册" key="2">
                <div>注册</div>
              </TabPane>
            </Tabs>
          </div>
        </Content>
      </Layout>
    )
  }
}
export default App;