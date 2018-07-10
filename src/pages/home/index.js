import React from "react";
import { Card, Col, Row } from 'antd';
// 引入ant design样式
import 'antd/dist/antd.css';

export default class Home extends React.Component {
    render() {
        return (
            <div style={{ background: '#ECECEC',height:"100%"}}>
                <Row gutter={16}>
                    <Col span={6}>
                        <Card title="硬件资产数量" bordered={false}>Card content</Card>
                    </Col>
                    <Col span={6}>
                        <Card title="每日风险数量" bordered={false}>Card content</Card>
                    </Col>
                    <Col span={6}>
                        <Card title="当前运行状态" bordered={false}>Card content</Card>
                    </Col>
                    <Col span={6}>
                        <Card title="违规行为" bordered={false}>Card content</Card>
                    </Col>
                </Row>
                <Row gutter={16} style={{ padding: '10px 0' }}>
                    <Col span={16}>
                        <Card title="风险趋势" bordered={false} style={{height:'300px' }}>Card content</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="风险排名" bordered={false} style={{height:'300px' }}>Card content</Card>
                    </Col>
                </Row>
                <Row gutter={16} style={{ padding: '0 0' }}>
                    <Col span={8}>
                        <Card title="应急联动任务" bordered={false}>Card content</Card>
                    </Col>
                    <Col span={16}>
                        <Card title="事件处置任务" bordered={false}>Card content</Card>
                    </Col>
                </Row>

            </div>

        );
    }
}