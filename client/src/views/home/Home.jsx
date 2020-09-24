import React from 'react'
import { Card, Row, Col, Collapse, } from 'antd';
import './Home.css'
import 'antd/dist/antd.css';
import AntCarousel from '../../components/carousel/AntCarousel'

const { Panel } = Collapse;

export default function Home() {
    return (
        <>
            <Card bordered={false}>
                <AntCarousel />
            </Card>

            <Row gutter={[24, 24]}>

                <Col  sm={24} md={10} >

                    <Card bordered={false} style={{
                        height: '100%',
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        alignContent: 'space-between'
                    }}>
                        <div>
                            <h1 className='fg900'>HOW</h1>
                            <p className='fg500'> Russian Language and Culture Immersion </p>
                        </div>

                        <div>
                            <h1 className='fg900'>WHO</h1>
                            <p className='fg500'>Children and youth 1.5-17 years old</p>
                        </div>

                        <div>
                            <h1 className='fg900'>WHERE</h1>
                            <p className='fg500'>Manhattan, New York City (physically) and everywhere (virtually/online)</p>
                        </div>
                    </Card>
                </Col>

                <Col sm={24} md={14} 
                    style={{
                        height: 'auto',
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        alignContent: 'space-between'
                    }}>
                    <Card style={{ height: '100%' }} bordered={false}>
                        <p className='book' style={{ textAlign: 'right' }}>
                            <b style={{ color: '#708A86', paddingRight: '.5em' }}>
                                Our mission
                            </b>
                        is to inspire bilingual children – Russian-native speakers to achieve literacy and most importantly fall in love with Russian language and culture.<br /><br />

                            <b style={{ color: '#708A86', paddingRight: '.5em' }}>
                                The Studio offers
                            </b>
                        a physical and virtual environment for immersion into Russian language and culture, nurturing a sense of community and belonging for all interested families.<br /><br />

                            <b style={{ color: '#708A86', paddingRight: '.5em' }}>
                                Founded almost a decade ago
                            </b>
                        by Maria Bernsteyn in collaboration with Alla Kovgan, our Studio is a
                        501c3 non-profit organization, which consists of the Children Learning Center and Cultural Programs.</p>
                    </Card>
                </Col>

            </Row>
            <Card bordered={false}>
                <Collapse
                defaultActiveKey={['1', '2']}
                expandIconPosition={'right'}
            >
                <Panel style={{ textAlign: 'left' }} header='Children Learning Center' key="1">
                    <div>''</div>
                </Panel>
                <Panel header='Events' key="2">
                    <div>'</div>
                </Panel>
            </Collapse>
            </Card>
            

            <Row>

            </Row>
            <Row>

            </Row>



        </>
    )
}
