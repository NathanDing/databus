import React from 'react';
// 引入ant design样式
import 'antd/dist/antd.css';
// 引入自定义样式
import './index.css'
import { Form, Icon, Input, Button } from 'antd';
import HttpUtils from '../../utils/HttpUtils';
import createHistory from 'history/createHashHistory';


const FormItem = Form.Item;
const history = createHistory();


//内部使用ant design，不做export default，而是Form.create({})(LoginPageForm);
class LoginPageForm extends React.Component {
    // 构造函数声明
    constructor(props){
        super(props);//第一步，这是必须的
        //不能调用state
        this.state = {//第二步，赋初始值
            loginError:false,
            userName:''
        };
    }
    //表单提交
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('表单内容格式错误: ', values);
            }else {
                console.log('表单内容格式正确: ', values);
                HttpUtils.getFetch('http://localhost:13000/users', values.userName)
                .then((json) => {
                    console.log(json)
                    console.log(json[0].userName)
                    console.log(json[0].password)

                    //处理 请求success
                    if(json[0].userName === values.userName && json[0].password === values.password){
                        console.log('用户名密码验证结果：',true)
                        history.push("/index");
                    }else {
                        this.setState({userName: values.userName})
                        this.setState({loginError: true})
                    }
                },(json) => {
                    //处理请求异常
                })
            }
        });
    }

    //渲染
    render() {
        //用于和表单进行双向绑定
        const { getFieldDecorator } = this.props.form;
        // console.log("state:",this.state)
        return (
            <div className="main">
                <h2>DataBusAdmin</h2>
                <h4 className="title2">基于React的后台管理系统模板(用户名/密码:admin/admin)</h4>
                {this.state.loginError === true?<h4 className="loginErrorMsg">用户名&密码错误</h4>:""}
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                                rules: [
                                    { required: true, message: '请输入您的用户名!' },
                                    { pattern:'^[A-Za-z]+$', message: '用户名是字母组成!' },
                                ],
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
