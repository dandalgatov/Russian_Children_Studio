import React, { useState } from 'react'
import { Menu, Row, Col, Card } from 'antd';
import { CalendarOutlined, AppstoreOutlined } from '@ant-design/icons';
import './Calendar.css'
const { SubMenu } = Menu;

export default function Calendar() {

    const[ menu, setMenu] = useState('school')

    const handleClick = e => {
        setMenu(e.key)
        console.log('click ', e);

        
    };
    return (
        
        <Row  gutter={[16,16]}  justify='center'>
            <Col xs={24} sm={24} md={16} lg={16}>
                <Card bodyStyle={{height: '70vh'}}>
                {menu === 'school' ? 
                    <iframe title='School Calenddar'src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;showCalendars=0&amp;showTz=0&amp;showTabs=0&amp;showTitle=0&amp;showDate=1&amp;title=School%20Calendar&amp;src=Y18zMW0wZGxmMWZ0dWxnZnAxbmMzcjdvOWJmb0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y19uNjZsMzlqanAwN2EwcTEwNDM4M2cwa2EzMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y19qdGhmMHFsdDdsc3Q2YWYya28xOWNwbHJ2Z0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y19mMDI5ZnZsMWxlNHNkNjdub29wMmlxbHM1a0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%2333B679&amp;color=%234285F4&amp;color=%23F6BF26&amp;color=%238E24AA" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
                    :
                    <iframe title='Homework Calenddar' src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;showCalendars=0&amp;showTz=0&amp;showTabs=0&amp;showTitle=0&amp;showDate=1&amp;title=School%20Calendar&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
                }

                </Card>
                
   
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} style={{ justifyContent: 'center' }}>
                <Menu
                className='fg500'
                // direction='rtl'
                onClick={handleClick}
                // style={{ width: 256 }}
                defaultSelectedKeys={['school']}
                defaultOpenKeys={['homework']}
                    mode="inline"
                    style={{ width: '100%', margin: '0', display: 'grid',}}
            >
                <Menu.Item key="school" icon={<CalendarOutlined />}>School Calendar</Menu.Item>
                <SubMenu key="homework" icon={<AppstoreOutlined />} title="Homework">
                    <Menu.Item key="HW1">Русский язык. ПИНГВИНЫ</Menu.Item>
                    <Menu.Item key="HW2">Another Class</Menu.Item>
                    <Menu.Item key="HW3">Another Class</Menu.Item>
                </SubMenu>
            </Menu>
            </Col>
            

            </Row>
    )
}
