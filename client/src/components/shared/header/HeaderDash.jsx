import React from 'react'
import EngLogo from '../../../assets/icons/RCS_logo.svg'
import { Row, Col, Button, Switch, Badge, notification, Menu } from 'antd';
import {
    MailOutlined,
    FacebookOutlined,
    InstagramOutlined,
    MenuOutlined,
    BellFilled,
} from '@ant-design/icons';
const { SubMenu } = Menu

export default function HeaderDash(props) {
    const { mobileMenu,  setRu } = props

    const openNotification = () => {
        notification.open({
            message: 'NEWS',
            description:
                'The Russian Children Studio will open for in-person, blended and fully remote learning in September, 2020 and will follow the State and NYC guidelines.',
        });
    };

    return (
        <>
            <Row
                justify='end'
                style={{
                    marginTop: '2vh',
                    marginBottom: '2vh',
                    paddingBottom: '2vh'
                }}
            >
                <a href="/">
                    <img src={EngLogo} alt="Logo"
                        style={{
                            height: "100%",
                            position: 'absolute',
                            left: '0px',
                            maxHeight: '5rem'
                        }}
                    />
                </a>
                <Col align='top'>
                    <Row align="middle" justify="space-between">
                        <Badge dot offset={[-25, 7]} >
                            <Button type="link" size='middle'
                                onClick={openNotification}
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
                        <Button type='link' size='middle' rel="noopener" target='_blank'
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
                            rel="noreferrer"
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
                            rel="noopener"

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
                    <Row align="middle" justify="end" >
                        <Button className='book-i' type='text' size='small'>eng</Button>
                        <Switch size='small' aria-label='Russian/English Switch'
                            onChange={(e) => setRu(e)}
                            style={{ backgroundColor: '#708A86' }} />
                        <Button className='book-i' type='text' size='small'>rus</Button>
                    </Row>
                </Col>
                {/* {mobileMenu ? */}
                <Col align='top'  >
                    <Menu style={{ margin: '0', height: '100%' }} >
                        <SubMenu key="mobile-menu"
                            
                            // title={
                            // // test
                            // <MenuOutlined className={mobileMenu ? 'mobile-menu-visible' : 'mobile-menu-hidden'} />
                            // // className={mobileMenu ? 'mobile-menu-visible' : 'mobile-menu-hidden'}
                            // }
                            
                        icon= {<MenuOutlined className={mobileMenu ? 'mobile-menu-visible' : 'mobile-menu-hidden'} />}
                            // style={{ fontSize: '54px', }}
                        // onTitleClick={(e) => {
                        //     e.preventDefault()
                        //     setShowDrawer(true)
                        // }}
                        >
                            <Menu.Item key="about">About</Menu.Item>
                            <Menu.Item key="clc">Children Learning Center</Menu.Item>
                            <Menu.Item key="calendar">Calendar</Menu.Item>
                            <Menu.Item key="contact">Contact</Menu.Item>
                        </SubMenu>
                    </Menu>

                    {/* <MenuOutlined
                    className={mobileMenu ? 'mobile-menu-visible' : 'mobile-menu-hidden'}
                    onClick={(e) => {
                        e.preventDefault()
                        setShowDrawer(true)
                    }}
                /> */}
                </Col>

                {/* : ''} */}

            </Row>
        </>
    )
}
