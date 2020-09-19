import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import './Header.css'
import NewsAlert from './NewsAlert.jsx'

import { BellFilled } from '@ant-design/icons'
import { Tabs, Menu, Badge } from 'antd'

const { TabPane } = Tabs
const { SubMenu } = Menu;


export default function DesktopMenu() {
    const history = useHistory()
    const [currentKey, setCurrentKey] = useState('')

    const handleClick = e => {
        setCurrentKey(e.key)
        history.push(`/${e.key}`)
    }

    // const tabBarStyle = {
    //     margin: 0,
    //     backgroundColor: '#cccdcb'
    // }

    return (
        <>
            <Badge.Ribbon offset={[-50,-50]} color='#708A86' text={<>
                <BellFilled style={{ fontSize: '16px', color: 'gold', paddingTop: '3px', paddingRight: '10px' }} />
                Open for in-person, blended and fully remote learning!
            </>} />
            <Menu onClick={handleClick} selectedKeys={currentKey} mode="horizontal">
                <SubMenu key="about" title="About" onTitleClick={handleClick}>
                    <Menu.Item key="mission">Mission</Menu.Item>
                    <Menu.Item key="team">Team</Menu.Item>
                </SubMenu>
                <SubMenu key="clc" title="Children Learning Center" onTitleClick={handleClick}>
                    {/* <Menu.Item key="154">1.5-4 Y/O</Menu.Item>
                    <Menu.Item key="417">4-17 Y/O</Menu.Item>
                    <Menu.Item key="online">Online</Menu.Item>
                    <Menu.Item key="jlp">Joint Learning Program</Menu.Item> */}
                </SubMenu>
                <Menu.Item key="calendar">Calendar</Menu.Item>
                <Menu.Item key="contact">Contact</Menu.Item>
            </Menu>
            {/* <Tabs tabBarStyle={{ margin: 0}} onChange={handleClick}  >           
                <TabPane tab="About" key="about">
                    <Tabs onChange={handleClick} activeKey={currentKey} tabBarStyle={tabBarStyle}>
                        <TabPane tab="Mission" key="mission" />
                        <TabPane tab="Team" key="team" />
                    </Tabs>
                </TabPane>

                <TabPane tab="Children Learning Center" key="clc">
                    <Tabs onChange={handleClick} activeKey={currentKey} tabBarStyle={tabBarStyle}>
                        <TabPane tab="1.5-4 y.o" key="154" />
                        <TabPane tab="4-17 y.o." key="417" />
                        <TabPane tab="Online" key="online" />
                        <TabPane tab="Joint Learning Program" key="jlp" />
                    </Tabs>
                </TabPane>

                <TabPane tab="Events" key="events" ><NewsAlert /></TabPane>
                <TabPane tab="Calendar" key="calendar" ><NewsAlert /></TabPane>
                <TabPane tab="Contact" key="contact" ><NewsAlert /></TabPane>
            </Tabs> */}

        </>
    )
}
