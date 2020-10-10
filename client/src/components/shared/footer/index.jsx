import React from 'react'
import { Row, Col } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './Footer.css'


export default function index(props) {
    const { call_to_action } = props.footer

    const iconStyle = {
        paddingLeft: '.5rem',
        paddingRight: '.5rem'
    }
    return (
        <>



            <div style={{ borderTop: "1px solid #CCCDCB", paddingTop: '1rem', paddingBottom: '1rem', marginTop: '2rem' }}>
                <Row>
                    <Col span={24} md={14} flex='center' >
                        <Row className='fg900' align='middle' style={{ color: '#708A86', fontSize: '2rem', }}>
                            {call_to_action}
                        </Row>
                        <Row >
                            Copyright © 2020 Russian Children Studio
                        </Row>
                    </Col>

                    <Col span={24} md={10}>

                        <Row justify='end' align='middle'>
                                <PhoneOutlined style={{ ...iconStyle }} />
                                +1 (917) 324-1740
                        </Row>
                        <Row justify='end' align='middle'>
                            <MailOutlined style={{ ...iconStyle }} />
                                office@russianchildrenstudio.org
                            </Row>
                        <Row justify='end' align='middle'>
                            <EnvironmentOutlined style={{ ...iconStyle }} />
                                225 W 99th St, New York, NY 10025
                            </Row>

                    </Col>





                </Row>

            </div>
        </>
    )
}
