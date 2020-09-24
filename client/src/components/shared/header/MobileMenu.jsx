import React from 'react'
import { useHistory } from "react-router-dom"
import './Header.css'
import { Drawer, Button, Menu, Row, Col, Switch, Badge, } from 'antd'

import {
    CloseOutlined,
    MailOutlined,
    FacebookOutlined,
    InstagramOutlined,
    BellFilled,
} from '@ant-design/icons';

export default function MobileMenu(props) {
    const { showDrawer, setShowDrawer, setCurrentKey, desktopMenu  } = props
    const { SubMenu } = Menu;
    const history = useHistory()

    const handleClick = e => {
        setCurrentKey(e.key)
        setShowDrawer(false)
        history.push(`/${e.key}`)
    }

    return (
        <Drawer
            cloasable={true}
            style={{ color: '#708A86', }}
            placement="right"
            width={ desktopMenu ? '40vw' : '100vw'}
            visible={showDrawer}
            closeIcon={<CloseOutlined style={{ fontSize: '54px', color: '#708A86' }} />}
            closable={true}
            onClose={(e) => {
                e.preventDefault();
                setShowDrawer(false)
            }}
            title={
                <Row
                    justify='space-between'
                    style={{
                        height: '5em',
                        position: 'relative'
                    }}
                >
                    <Col align='top'>
                        <Row align="middle" justify="space-between">
                            <Badge dot offset={[-25, 7]} >
                                <Button type="link" size='middle'
                                    icon={
                                        <BellFilled
                                            style={{
                                                fontSize: '24px',
                                                color: 'gold',
                                            }}
                                        />
                                    }
                                />
                            </Badge>
                            <Button type='link' size='middle' target='_blank'
                                href='mailto: office@russianchildrenstudio.org'
                                icon={
                                    <MailOutlined
                                        style={{
                                            fontSize: '24px',
                                            color: '#D44638',
                                        }}
                                    />
                                }
                            />
                            <Button type='link' size='middle' target='_blank'
                                href='https://www.facebook.com/Russianchildrenstudio/'
                                icon={
                                    <FacebookOutlined
                                        style={{
                                            fontSize: '24px',
                                            color: '#3b5998'
                                        }}
                                    />
                                }
                            />
                            <Button type='link' size='middle' target='_blank'
                                href='https://www.instagram.com/russianchildrenstudio/'
                                icon={
                                    <InstagramOutlined
                                        style={{
                                            fontSize: '24px',
                                            color: '#C13584'
                                        }}
                                    />
                                }
                            />
                        </Row>
                        <Row align="middle" justify="start" >
                            <Button className='book-i' type='text' size='small'>eng</Button>
                            <Switch size='small' style={{ backgroundColor: '#708A86' }} />
                            <Button className='book-i' type='text' size='small'>rus</Button>
                        </Row>
                    </Col>
                </Row>
            }
            footer={
                <div className='fg500'>
                    TEL: +1 (917) 324-1740 <br />
                    EMAIL: office@russianchildrenstudio.org <br />
                    ADDRESS: 225 W 99TH ST, FL 2, NY NY 10025
                </div>
            }
        >
            <div style={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center', width: '100'}}>
                <Menu
                    className='demi600'
                    mode="inline"
                    onClick={handleClick}
                    defaultOpenKeys={['about']}
                    style={{ color: '#708A86', margin: '0', padding: '0', width: '100%'}}
                >
                    <SubMenu key="about" title="About" >
                        <Menu.Item key="mission" style={{ color: '#708A86' }}>Mission</Menu.Item>
                        <Menu.Item key="team" style={{ color: '#708A86' }}>Team</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="clc">Children Learning Center</Menu.Item>
                    <Menu.Item key="calendar">Calendar</Menu.Item>
                    <Menu.Item key="contact">Contact</Menu.Item>
                </Menu>
            </div>
        </Drawer>
    )
}
