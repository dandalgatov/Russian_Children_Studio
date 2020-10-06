import React from 'react'
import { Card, Col, Collapse, Row } from 'antd';
import './Home.css'
import 'antd/dist/antd.css';
import AntCarousel from '../../components/carousel/AntCarousel'
import RusLogo from '../../assets/icons/logoRCSrus.svg'

const { Panel } = Collapse;

export default function Home(props) {

    const { about, clc, events, footer } = props.homepage
    const { p1, p2, p3, } = props.about.mission
    const { what, who, where } = about

    const { call_to_action } = footer






    return (
        <>
            <Card bordered={false} bodyStyle={{ height: '100%' }}>
                <AntCarousel />
            </Card>

            <Row justify='space-between'>
                {/* Mission */}
                <Col sm={24} md={10}
                    style={{
                        height: 'auto',
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        alignContent: 'space-between'
                    }}>
                    <Card style={{ height: '100%' }} bordered={false}>
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

                <Col  span={24} sm={24} md={14} >
                    
                    <Card bordered={false}>
                        <Row>

                            <Col span={10} sm={12} md={10}>
                                <h1 style={{ textAlighn: "center", lineHeight: ".5" }} className='fg900'>{what.q}</h1>
                                </Col>


                            <Col span={12} sm={10} md={12} offset={2}>
                                <div>
                                    <p className='fg500'>{what.a1}</p>
                                    <p className='fg500'>{what.a2}</p>
                                    <p className='fg500' style={{color: "#CCCDCB"}}>{what.a3}</p>
                                </div>
                                </Col>

                        </Row>
                    </Card>

                    <Card bordered={false}>
                        <Row>
                            <Col span={10} sm={12} md={10}>
                                <h1 style={{ lineHeight: ".5", color: "#708A86" }} className='fg900'>{who.q}</h1>
                            </Col>
                            <Col span={12} sm={10} md={12} offset={2}>
                                <div>
                                    <p className='fg500'>{who.a}</p>
                                </div>
                            </Col>
                        </Row>
                    </Card>

                    <Card bordered={false}>
                        <Row>
                            <Col span={10} sm={12} md={10}>
                                <h1 style={{ lineHeight: ".5" }} className='fg900'>{where.q}</h1>
                            </Col>
                            <Col span={12} sm={10} md={12} offset={2}>
                                <div>
                                    <p className='fg500'>{where.a1}
                                        <em style={{color: "#708A86"}}> {where.a1b}</em>
                                    </p>
                                    <p className='fg500'>{where.a2}
                                    <em style={{color: "#708A86"}}> {where.a2b}</em>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>

            </Row>
            <Card bordered={false}>
                <Collapse
                    className='fg900'
                    defaultActiveKey={['1', '2']}
                    expandIconPosition={'right'}
                >
                    <Panel header={`${clc.title}`} key="1">
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
                </Collapse>
            </Card>




            <Row justify='space-between' style={{ height: '10vh', padding: '0 5vh 0 5vh', }} >
                <Col className='fg900' sm={24} md={24} lg={12}>

                    <a href='/contact' style={{ color: '#708A86' }}>{call_to_action}</a>
                </Col>
                <Col sm={24} md={24} lg={12}>
                    <img src={RusLogo} alt="" style={{ mahHeight: '5vh', width: '100%' }} />
                </Col>
            </Row>





            {/* Reach out and join us!
                 <img src={RusLogo} alt="" style={{height: '10vh' , maxWidth: '50%'}} /> */}


            <Row>

            </Row>



        </>
    )
}
