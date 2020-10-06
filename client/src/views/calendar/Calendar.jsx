import React from 'react'
import { withRouter } from 'react-router';
import { Row, Col, Card, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './Calendar.css'
// const { SubMenu } = Menu;

function Calendar() {



    return (

        <Row gutter={[16, 16]} justify='center'>
            <Col xs={24} sm={24} md={24} lg={16}>
                <Card bodyStyle={{ height: '70vh' }}>
                    <iframe title="RCS School Calendar" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=Y19uNjZsMzlqanAwN2EwcTEwNDM4M2cwa2EzMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23EF6C00&amp;showTitle=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;hl=en" width="100%" height="100%" frameBorder="0" scrolling="no"></iframe>
                </Card>


            </Col>
            <Col xs={24} sm={24} md={24} lg={8} style={{ justifyContent: 'center' }}>

                <a id="PDF Download" href="https://drive.google.com/uc?export=download&id=1NPK68MSRztZR0etnoX5EuIV1j6GmShaA" >
                    <Button block default className='fg500'
                        icon={<DownloadOutlined />} size="large"
                        style={{ color: "#768E8A", marginBottom: "5rem" }}
                    >
                        Download PDF
                </Button>
                </a>

                <div className="fg500" style={{ color: "#768E8A" }}>
                    <h1 style={{ color: "#768E8A" }}>The Studio is closed:</h1>
                    <ul>
                        <li>September 28, 2020 - Yom Kippur;</li>
                        <li>November 25-27, 2020 - Thanksgiving Recess;</li>
                        <li>December 23, 2020 - January 1, 2021 - Winter Recess;</li>
                        <li>January 18, 2021 - Rev. Dr. Martin Luther King Jr. Day;</li>
                        <li>February 12-19, 2021 – Lunar New Year & Mid-Winter Recess;</li>
                        <li>March 29 – April 2, 2021 – Spring Recess;</li>
                        <li>May 31, 2021 – Memorial Day;</li>
                        <li>June 25, 2021 – the last day of school.</li>
                    </ul>
                </div>
            </Col>


        </Row>
    )
}


export default withRouter(Calendar)