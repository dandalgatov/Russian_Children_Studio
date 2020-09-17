import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import './Header.css'
import NewsAlert from './NewsAlert.jsx'
import { Tabs } from 'antd'
const { TabPane } = Tabs

export default function DesktopMenu() {
    const history = useHistory()
    const [currentKey, setCurrentKey] = useState('')
    
    const handleClick = e => {
        setCurrentKey(e)
        history.push(`/${e}`)
    }

    const tabBarStyle = {
        margin: 0,
        backgroundColor: '#cccdcb'
    }

    return (
        <>
            <Tabs tabBarStyle={{ margin: 0}} onChange={handleClick}  >
                
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
                <TabPane tab="Register" key="register" ><NewsAlert /></TabPane>
            </Tabs>
        </>
    )
}
