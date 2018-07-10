import React from 'react'
import { Menu, Icon, Layout,Avatar  } from 'antd'
import { Link } from 'react-router-dom'
// import screenfull from 'screenfull'
import './top.css'

const SubMenu = Menu.SubMenu
const { Header } = Layout

export default class Top extends React.Component {
    // 构造函数声明
    constructor(props) {
        super(props);
        this.state = {//第二步，赋初始值
            ...props
        };
    }
    componentDidMount() {
    }
    // 退出
    clear = (item) => {
        if (item.key === 'logout') {
            // 清空sessionStorage中的token&&userName
            sessionStorage.token = ''
            sessionStorage.userName = ''
        }
    }

    render() {
        console.log("top state:", this.state)
        console.log("top props:", this.props)
        return (
            <Header style={{ background: '#fff'}}>
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                />
                <Menu mode="horizontal" className="logout" onClick={this.clear}>
                    <SubMenu title={<span><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />{ this.props.userName }</span>} >
                        <Menu.Item  key="info"><Link to="/" ><Icon type="user"></Icon>个人中心</Link></Menu.Item>
                        <Menu.Item key="set"><Link to="/" ><Icon type="setting"></Icon>设置</Link></Menu.Item>
                        <Menu.Divider />
                        <Menu.Item key="logout"><Link to="/login" >退出登录</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>
        );
    }
}