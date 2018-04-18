import React from 'react';
import { Layout, Form, Icon, Input, Checkbox, Button, Message } from 'antd';
import 'whatwg-fetch'
import { reject } from 'any-promise';
const FormItem = Form.Item;

class LoginTab extends React.Component {
  handleSubmit = async(e) => {
    e.preventDefault();
    let value = await this.getFormValues();
    if(value) {
      // console.log('表单OK');
      fetch('/home/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(value)
      }).then(res => {
        // console.log(res);
        res.json().then(res => {
          console.log(res);
          Message.info(res.message);
          if(res.success) {
            // location.href = '/main';
          }
        })
      })
    }
  }
  getFormValues() {
    return new Promise((resolve, reject) => {
      this.props.form.validateFields((err, values) => {
        if(!err) {
          resolve(values);
        } else {
          reject(false);
        }
      })
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{width: "280px", margin:"0 auto"}}>
       <Form onSubmit={this.handleSubmit}>
          <FormItem>
              {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请您输入账号名称！' }],
              })(
                  <Input addonBefore={<Icon type="user" />} placeholder="请您输入用户名称！" />
              )}
          </FormItem>
          <FormItem>
            { getFieldDecorator('password', {
              rules: [
                {required: true, message: '请您输入账号密码!'}
              ]
            })(
                <Input addonBefore={<Icon type="lock" />} type="password" placeholder="请您输入账号密码" />
            )}
          </FormItem>
          <FormItem>
            { getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(
                <Checkbox> Remember me</Checkbox>
            )}
            <Button type="primary" htmlType="submit" style={{width: '100%'}}>Login in</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
export default Form.create()(LoginTab);