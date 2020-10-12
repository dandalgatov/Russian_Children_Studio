import React, { useState } from 'react'
import { Collapse, Row, Col, Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import ClassImage from '../../assets/images/AntCarousel/mission_slider_img1.jpeg'
const { Panel } = Collapse;

export default function ChildrenLearningCenter(props) {
    const { clc } = props
    const [showDetails, setShowDetails] = useState(false)

    return (
        <Collapse
            expandIconPosition={'right'}
            expandIcon={({ isActive }) => <span>
                {isActive ? <MinusOutlined /> : <PlusOutlined />}
            </span>}
        >
            {/* Itteration of Classes and HEADER for each */}
            {clc && clc.map((item, idx) =>
                <Panel
                    key={idx}
                    header={<>
                        <b>{item.titleAge} | {item.titleLocation} |</b> {item.title}
                    </>}
                >
                    {/* Body of the Panel */}
                    <Row>
                        {/* left side of the Panel */}
                        <Col span={24} md={12}>
                            {/* Itteration of SUMMARY */}
                            <div style={{ display: "flex", flexFlow: 'column nowrap' }}>
                                {item && item.summary.map((line, idx) =>
                                    <line key={idx}>{line.name} | <b>{line.text}</b></line>
                                )}
                            </div>
                            {/* Option to see DETAILS */}
                            <div style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                                {item.details ?
                                    <>{showDetails ?
                                        <Button onClick={() => setShowDetails(false)}>
                                            Hide Details -
                                        </Button> :
                                        <Button onClick={() => setShowDetails(true)}>
                                            Show Details +
                                        </Button>}
                                    </>
                                    : ''}
                            </div>
                            {/* Itteration of DETAILS */}
                            {showDetails ?
                                <div style={{ display: "flex", flexFlow: 'column nowrap' }}>
                                    <p >{item.details && item.details.subtitle}</p>
                                    {item.details && item.details.topics.map((topic, idx) =>
                                        <p key={idx}>
                                            <b>{topic.name}</b>
                                            <ul>
                                                {topic.bullets && topic.bullets.map((bullet, idx) =>
                                                    <li key={idx}> {bullet.point}</li>
                                                )}
                                            </ul>
                                        </p>
                                    )}
                                </div>
                                : ''}
                        </Col>
                        {/* right side of the Panel */}
                        <Col span={0} md={12}>
                            <img src={ClassImage} alt="Class" style={{ width: '90%' }} />
                            {showDetails ?
                                <>
                                    <img src={ClassImage} alt="Class" style={{ width: '90%', paddingTop: '1rem' }} />
                                    <img src={ClassImage} alt="Class" style={{ width: '90%', paddingTop: '1rem' }} />
                                    <img src={ClassImage} alt="Class" style={{ width: '90%', paddingTop: '1rem' }} />
                                </> :
                                ''}
                        </Col>
                    </Row>
                </Panel>
            )}
        </Collapse>
    )
}