import React from 'react';
import { Link  } from 'react-router-dom'
// 引入ant design样式
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Switch, Icon } from 'antd';
import Top from './top'
import Contents from './content'

import HttpUtils from '../utils/HttpUtils';
const {  Sider } = Layout;
const { SubMenu } = Menu;

export default class Container extends React.Component {
    // 构造函数声明
    constructor(props){
        super(props);//第一步，这是必须的
        this.state = {//第二步，赋初始值
            theme: 'dark',
            mode: 'inline',
            collapsed: false,
            menus:[],
            // 将传递过来的数据加入到state
            ...this.props.location.state
        };
    }
    changeTheme = (value) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    }
    // 折叠
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            mode: this.state.collapsed ? 'inline' : 'vertical',
        });
    }
    handleClick = (e, special) => {
        this.setState({
            current: e.key || special,
        });
    }
    // 挂载节点
    componentWillMount(){
        console.log("this.state.token",this.state.token)
        if(this.state.token !== '' && typeof(this.state.token)!== 'undefined'){
            HttpUtils.getFetch('http://localhost:13000/getMenus', this.state.token)
                .then((json) => {
                    console.log("menus json :", json)
                    if(json.length > 0){
                        this.setState({
                            menus:json
                        })
                    }else {
                        this.props.history.push("/")
                    }
                    console.log("this.state.menus:",this.state.menus)
                },(json) => {
                    //处理请求异常
                    this.props.history.push("/")
                });
        }else {
            this.props.history.push("/")
        }

    }

    // 渲染
    render() {
        console.log("home-state:",this.state)
        return(
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    { this.state.theme === 'light' ?
                        <Icon type="ant-design" className="logo-c" /> :
                        <Icon type="ant-design" className="logo-c white" />
                    }
                    { this.state.collapsed === false ? (this.state.theme === 'light' ? <span className="author">远望</span> : <span className="author white">远望</span>):"" }
                    <Menu
                        theme={this.state.theme}
                        onClick={this.handleClick}
                        defaultOpenKeys={['10']}
                        selectedKeys={[this.state.current]}
                        className="menu"
                        mode={this.state.mode}
                    >
                    {
                        this.state.menus.map((subMenu) => {
                            if (subMenu.children && subMenu.children.length) {
                                return (
                                    <SubMenu key={subMenu.key} title={<span><Icon type={subMenu.icon} /><span>{subMenu.title}</span></span>}>
                                        {subMenu.children.map(menu => (
                                            <Menu.Item key={menu.key}><Link to={`/${menu.path}`}>{menu.title}</Link></Menu.Item>
                                        ))}
                                    </SubMenu>
                                )
                            }
                            return (
                                <Menu.Item key={subMenu.key}>
                                    <Link to={`/${subMenu.path}`}>
                                        <Icon type={subMenu.icon} /><span className="nav-text">{subMenu.title}</span>
                                    </Link>
                                </Menu.Item>
                            )
                        })
                    }
                    </Menu>
                    <div className="switch">
                        <Switch
                            checked={this.state.theme === 'dark'}
                            onChange={this.changeTheme}
                            checkedChildren="Dark"
                            unCheckedChildren="Light"
                        />
                    </div>
                </Sider>
                <Layout>

                    <Top toggle={this.toggle} collapsed={this.state.collapsed} clear={this.clear} />
                    <Contents/>

                </Layout>
            </Layout>
        );
    }
}

// export default withRouter(Container);

