import React from 'react'
import { useHistory } from "react-router-dom";
import './Header.css'
import { Menu } from 'antd'
// import { Badge } from 'antd'
// import { BellFilled } from '@ant-design/icons'

export default function DesktopMenu(props) {
    const { SubMenu } = Menu
    const { currentKey, setCurrentKey } = props
    const history = useHistory()

    const handleClick = e => {
        setCurrentKey(e.key)
        history.push(`/${e.key}`)
    }

    return (
        <div>
            
            {/* <Badge.Ribbon
                color= '#708A86' text={<>
                <BellFilled style={{ fontSize: '16px', color: 'gold', paddingTop: '3px', paddingRight: '10px',}} />
                Open for in-person, blended and fully remote learning!
            </>} /> */}
            <Menu
                className='book'
                onClick={handleClick}
                selectedKeys={currentKey}
                mode="horizontal"
            >
                <SubMenu key="about" title="About" onTitleClick={handleClick}
                    // style={{ marginLeft: '5px'}}
                >
                    <Menu.Item key="mission">Mission</Menu.Item>
                    <Menu.Item key="team">Team</Menu.Item>
                </SubMenu>
                <Menu.Item key="clc">Children Learning Center</Menu.Item>
                <Menu.Item key="calendar">Calendar</Menu.Item>
                <Menu.Item key="contact">Contact</Menu.Item>
            </Menu>
        </div>
    )
}
