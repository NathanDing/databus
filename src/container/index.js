import React, { Fragment } from 'react';
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
            current:'10',
            menus:[],
            // 将登录传递过来的数据加入到state（token,userName）
            ...this.props.location.state
        };

    }

    // 变更state的theme来控制主题颜色
    changeTheme = (value) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    }

    // 变更state的theme来控制折叠及显示
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            mode: this.state.collapsed ? 'inline' : 'vertical',
        });
    }

    // 控制左侧菜单的选中（变蓝）
    handleClick = (e, special) => {
        this.setState({
            current: e.key || special,
        });
    }

    // 挂载节点
    componentWillMount(){
        console.log("this.state.token",this.state.token)
        console.log("sessionStorage.token",sessionStorage.token)
        // 若state中存在token，则请求菜单数据，并将菜单数据设置到state的menus上
        if(this.state.token !== '' && typeof(this.state.token)!== 'undefined'){
            sessionStorage.token = this.state.token;
            sessionStorage.userName = this.state.userName;
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
            //若state中不存在token，继而判断sessionStorage中是否存在。
            // 若存在，则请求菜单数据，并将菜单数据设置到state的menus上
            if(sessionStorage.token !== '' && typeof(sessionStorage.token)!== 'undefined'){
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
    }

    // 渲染
    render() {
        console.log("this.state.token",this.state.token)
        console.log("home-state:",this.state)
        return(
            <Layout>
                <Sider
                    theme={this.state.theme}
                    trigger={null} // 去除sider底部的折叠按钮
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    { this.state.theme === 'light' ?
                        <Icon type="cloud-o" className="logo-c" /> :
                        <Icon type="cloud-o" className="logo-c white" />
                    }
                    { this.state.collapsed === false ?
                        (this.state.theme === 'light' ?
                            <span className="author">百兆100</span> :
                            <span className="author white">百兆100</span>
                        )
                        :""
                    }
                    {/*菜单目前支持三层，后期完善*/}
                    <Menu
                        theme={this.state.theme}
                        onClick={this.handleClick}
                        defaultOpenKeys={['20']} // 默认打开的菜单，根据menu数据中首页的key为"10",所以写死
                        selectedKeys={[this.state.current]} // 选中的菜单
                        className="menu"
                        mode={this.state.mode}
                    >
                        {
                            // 遍历state中的菜单数据并渲染菜单
                            this.state.menus.map((subMenu) => {
                                if (subMenu.children && subMenu.children.length) {
                                    return (
                                        <SubMenu key={subMenu.key} title={<span><Icon type={subMenu.icon} /><span>{subMenu.title}</span></span>}>
                                            {subMenu.children.map((menu) => {
                                                if (menu.children && menu.children.length) {
                                                    return (
                                                        <SubMenu key={menu.key} title={<span><Icon type={menu.icon} /><span>{menu.title}</span></span>}>
                                                            {menu.children.map(menusub => (
                                                                <Menu.Item key={menusub.key}>
                                                                    <Link to={`/${menusub.path}`}>
                                                                        <Icon type={menusub.icon} /><span className="nav-text">{menusub.title}</span>
                                                                    </Link>
                                                                </Menu.Item>
                                                            ))}
                                                        </SubMenu>
                                                     )
                                                }
                                                    return (
                                                        <Menu.Item key={menu.key}>
                                                            <Link to={`/${menu.path}`}>
                                                                <Icon type={menu.icon} /><span className="nav-text">{menu.title}</span>
                                                            </Link>
                                                        </Menu.Item>
                                                    )
                                            })}
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
                        {/*主题颜色开关*/}
                        <Switch style={{marginTop:"50px",marginBottom:"398px",marginLeft:"5px"}}
                            size="small"
                            checked={this.state.theme === 'dark'}
                            onChange={this.changeTheme}
                            checkedChildren="Dark"
                            unCheckedChildren="Light"
                        />
                    </Menu>

                </Sider>
                {/*右侧布局*/}
                <Layout>
                    {/*头部*/}
                    <Top toggle={this.toggle} collapsed={this.state.collapsed} userName={sessionStorage.userName}/>
                    {/*内容*/}
                    <Contents/>
                    <div style={{margin:"auto"}}>
                        <Fragment>Copyright <Icon type="copyright" /> 2018 百兆100出品</Fragment>
                    </div>
                </Layout>
            </Layout>
        );
    }
}

// export default withRouter(Container);

