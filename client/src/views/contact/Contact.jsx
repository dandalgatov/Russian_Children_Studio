import React from 'react'
import {withRouter} from 'react-router';

import { Row, Col, Card } from 'antd';

function Contact(props) {
    const { phone, email, location } = props.contacts
    return (
        <>
            <Row gutter={[24, 24]}>
                <Col span={24} lg={16}>
                    <Card bodyStyle={{ height: '70vh' }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.441301772124!2d-73.97127938466932!3d40.79629534039132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f62642afffff%3A0x4f6c0a23d48f9841!2srussian%20children%20studio!5e0!3m2!1sen!2sus!4v1600901611324!5m2!1sen!2sus" width="100%" height="100%" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0" title='iframe' />
                    </Card>
                </Col>
                <Col span={24} lg={8}>
                    <div>
                        <h1 className='fg900'>{phone}</h1>
                        <p className='fg500'>+1 (917) 409-2888</p>
                    </div>
                    <div>
                        <h1 className='fg900'>{email}</h1>
                        <p className='fg500'>office@russianchildrenstudio.org</p>
                    </div>
                    <div>
                        <h1 className='fg900'>{location}</h1>
                        <p className='fg500'>225 W 99th St, New York, NY 10025</p>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default withRouter(Contact)