import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import './content.css'
import Home from '../pages/home'
import Test from '../pages/testpage'


const { Content } = Layout

export default class Contents extends React.Component {
    render() {
        return (
            <Content className="content">
                <Route path="/index/home" component={Home} />
                <Route path="/index/test" component={Test} />
            </Content>
        );
    }
}