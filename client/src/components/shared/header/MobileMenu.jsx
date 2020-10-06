import React from 'react'
import { useHistory } from "react-router-dom"
import './Header.css'
import { Drawer, Menu } from 'antd'

import {
    CloseOutlined,
} from '@ant-design/icons';

export default function MobileMenu(props) {
    const { showDrawer, setShowDrawer, setCurrentKey, desktopMenu  } = props
    // const { SubMenu } = Menu;
    const history = useHistory()

    const handleClick = e => {
        setCurrentKey(e.key)
        setShowDrawer(false)
        history.push(`/${e.key}`)
    }

    return (
        <Drawer
            cloasable="true"
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
            // title={
            //     "Menu"
            // }
            footer={
                <div className='fg500'>
                    TEL: +1 (917) 324-1740 <br />
                    EMAIL: office@russianchildrenstudio.org <br />
                    ADDRESS: 225 W 99TH ST, FL 2, NY NY 10025
                </div>
            }
        >
            <div style={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center', width: '100', alignItems: "center"}}>
                <Menu
                    className='demi600'
                    mode="inline"
                    onClick={handleClick}
                    // defaultOpenKeys={['about']}
                    style={{ color: '#708A86', display:'grid', margin: '0', padding: '0', width: '100%'}}
                >
                    <Menu.Item key="about">About</Menu.Item>
                    <Menu.Item key="clc">Children Learning Center</Menu.Item>
                    <Menu.Item key="calendar">Calendar</Menu.Item>
                    <Menu.Item key="contact">Contact</Menu.Item>
                </Menu>
            </div>
        </Drawer>
    )
}
