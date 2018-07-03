import React from 'react';
// 引入ant design样式
import 'antd/dist/antd.css';
// 引入自定义样式
import './index.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;
//内部使用ant design，不做export default，而是Form.create({})(LoginPageForm);
class LoginPageForm extends React.Component {
    //表单提交
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('表单内容格式错误: ', values);
            }
        });
    }
    //渲染
    render() {
        //用于和表单进行双向绑定
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="main">
                <h2>DataBusAdmin</h2>
                <h4 className="title2">基于React的后台管理系统模板,(用户名/密码:admin/guest,admin/guest)</h4>

                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入您的用户名!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                        )
                        }
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入您的密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                        )
                        }
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </FormItem>
                </Form>
            </div>

        );
    }
}
//通过 Form.create 创建的Form，内部有this.props.form。详见ant design官方文档
const LoginPage = Form.create({})(LoginPageForm);
export default  LoginPage;
