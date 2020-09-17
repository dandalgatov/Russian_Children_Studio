import React from 'react'
import EngLogo from '../../../assets/icons/RCS_logo.svg'
import { Row, Col, Button, Switch } from 'antd';
import { MailOutlined, FacebookOutlined, InstagramOutlined, MenuOutlined } from '@ant-design/icons';

export default function HeaderDash() {
    return (
        <Row style={{ height: '5em', position: 'relative' }} justify='end'>
            <img src={EngLogo} alt="Logo"
                style={{ height: "100%", position: 'absolute', left: '0px' }}
            />
            <Col align='top'>
                <Row align="middle" justify="center">

                    {/* <Button type='text' size='small' >eng</Button>
                    <Switch size='small' style={{ backgroundColor: '#708A86' }} />
                    <Button type='text' size='small' >rus</Button> */}

                    <Button type='link' size='middle' target='_blank'
                        href='mailto: office@russianchildrenstudio.org'
                        icon={<MailOutlined style={{ fontSize: '24px', color: '#D44638' }} />}
                    />
                    <Button type='link' size='middle' target='_blank'
                        href='https://www.facebook.com/Russianchildrenstudio/'
                        icon={<FacebookOutlined style={{ fontSize: '24px', color: '#3b5998' }} />}
                    />
                    <Button type='link' size='middle' target='_blank'
                        href='https://www.instagram.com/russianchildrenstudio/'
                        icon={<InstagramOutlined style={{ fontSize: '24px', color: '#C13584' }} />}
                    />
                </Row>
                <Row align="middle" justify="center" >
                    <Button type='text' size='small' >eng</Button>
                    <Switch size='small' style={{ backgroundColor: '#708A86' }} />
                    <Button type='text' size='small' >rus</Button>
                </Row>
            </Col>
            <Col align='top'>
                <MenuOutlined style={{ fontSize: '54px', color: '#708A86', }} />
            </Col>
        </Row>
    )
}
