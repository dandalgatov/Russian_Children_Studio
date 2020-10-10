import React from 'react'
import { Card, Col, Collapse, Row,  } from 'antd';
import './Home.css'
import 'antd/dist/antd.css';
import AntCarousel from '../../components/carousel/AntCarousel'

import { PlusOutlined, MinusOutlined } from '@ant-design/icons';


const { Panel } = Collapse;

export default function Home(props) {

    const { about, clc, events, publishing } = props.homepage
    const { p1, p2, p3, } = props.about.mission
    const { what, who, where } = about


    return (
        <>
            {/* <Card bordered={false} bodyStyle={{ height: '100%' }}> */}
            <Row gutter={[16, 16]}>
                <Col span={24} md={12} >
                    <AntCarousel />

                    <Collapse
                        className='fg900'
                        expandIconPosition={'right'}
                        expandIcon={({ isActive }) => <span> {isActive? <MinusOutlined /> : <PlusOutlined/>}</span>}
                        
                        // expandIcon={({ isActive }) => <Icon type={isActive ? "plus": "minus"}  theme="outlined" />}
                        // defaultActiveKey={['1', '2']}
                        
                    >
                        <Panel header={`${clc.title}`} key="1" >
                            <p className='book'>
                                {clc.what} <br />
                                {clc.who.l1}<br />
                                {clc.who.l2}<br />
                                {clc.who.l3}<br />
                                {clc.who.l4}<br />
                                {clc.when}

                            </p>
                        </Panel>
                        <Panel header={`${events.title}`} key="2">
                            <p className='book'>
                                {events.text}
                            </p>
                        </Panel>
                        <Panel header={`${publishing.title}`} key="3">
                        <p className='book'>
                                {publishing.text}
                            </p>
                        </Panel>
                    </Collapse>

                    

                </Col>
                <Col span={24} md={12}>
                    <Card bordered={false}>
                        <Row>

                            <Col span={24} sm={12}>
                                <h1 style={{ textAlighn: "center", lineHeight: ".5", paddingBottom: '1rem' }} className='fg900'>{what.q}</h1>
                            </Col>


                            <Col  span={24} sm={12} >
                                <div>
                                    <p className='fg500'>{what.a1}</p>
                                    <p className='fg500'>{what.a2}</p>
                                    <p className='fg500' style={{ color: "#CCCDCB" }}>{what.a3}</p>
                                </div>
                            </Col>

                        </Row>
                    </Card>

                    <Card bordered={false} bodyStyle={{marginBottom: "2rem"}}>
                        <Row>
                            <Col span={24} sm={12}>
                                <h1 style={{ lineHeight: ".5", color: "#708A86", paddingBottom: '1rem' }} className='fg900'>{who.q}</h1>
                            </Col>
                            <Col span={24} sm={12}>
                                <div>
                                    <p className='fg500'>{who.a}</p>
                                </div>
                            </Col>
                        </Row>
                    </Card>

                    <Card bordered={false}>
                        <Row>
                            <Col span={24} sm={12}>
                                <h1 style={{ lineHeight: ".5", paddingBottom: '1rem' }} className='fg900'>{where.q}</h1>
                            </Col>
                            <Col span={24} sm={12}>
                                <div>
                                    <p className='fg500'>{where.a1}
                                        <em style={{ color: "#708A86" }}> {where.a1b}</em>
                                    </p>
                                    <p className='fg500'>{where.a2}
                                        <em style={{ color: "#708A86" }}> {where.a2b}</em>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Card>

                    <Card bordered={false}>
                        <p className='book' style={{ textAlign: 'left' }}>
                            <b style={{ color: '#708A86', paddingRight: '.4em' }}>{p1.b}</b>
                            {p1.p}
                            <br /><br />
                            <b style={{ color: '#708A86', paddingRight: '.4em' }}>{p2.b}</b>
                            {p2.p}
                            <br /><br />
                            <b style={{ color: '#708A86', paddingRight: '.4em' }}>{p3.b}</b>
                            {p3.p}
                        </p>
                    </Card>
                </Col>
            </Row>

            {/* </Card> */}









            {/* Reach out and join us!
                 <img src={RusLogo} alt="" style={{height: '10vh' , maxWidth: '50%'}} /> */}


            <Row>

            </Row>



        </>
    )
}
