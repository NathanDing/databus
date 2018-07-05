import React from 'react'
import { Menu, Icon, Layout } from 'antd'
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
        // this.getUser()
    }
    // 退出
    clear = (item) => {
        if (item.key === 'logOut') {
            // this.props.clear()
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
                <Menu mode="horizontal" className="logOut" onClick={this.clear}>
                    <SubMenu title={<span><Icon type="user" />{ this.props.userName }</span>} >
                        <Menu.Item key="logOut"><Link to="/login" >退出</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>
        );
    }
}