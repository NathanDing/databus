import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import './content.css'
import Home from '../pages/home'
import Test from '../pages/testpage'


const { Content } = Layout

export default class Contents extends React.Component {

    // constructor(props){
    //     super(props);//第一步，这是必须的
    // }
    render() {
        return (
            <Content className="content" style={{ background: '#ECECEC'}}>
                <Route path="/index/home"  component={Home}/>
                <Route path="/index/test" component={Test} />
            </Content>
        );
    }
}