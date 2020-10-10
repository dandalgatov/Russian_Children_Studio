import React, { useState } from 'react'
import { withRouter } from 'react-router';

import ClassDetails from '../../components/classDetails/index'

import { Row, Col, Card,} from 'antd';
import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';




import ClassesAccordion from '../../components/classesAccordion'


function ChildrenLearningCenter(props) {
    const { clc } = props
    const [classId, setClassId] = useState(0)
    return (
        <div >
            <h1 className="fg900" style={{ textAlign: 'left' }} >

            </h1>

            <Row gutter={[16, 16]}>
                <Col span={24} lg={16} >
                    <Card style={{ height: '100%', }}>
                        {classId ?
                            <ClassDetails details={clc[classId - 1].details} setClassId={setClassId}/>
                            :
                            <>
                            <h1 className="fg900" >
                                Children Learning Center
                            </h1>
                            <h2 className="demi600">
                                Press <PlusOutlined /> for summary
                            </h2>
                            <h2 className="demi600">
                                Press <InfoCircleOutlined /> for additional details
                            </h2>
                    </>
                    }
                    </Card>
                </Col>

                <Col span={24} lg={8}>
                    <ClassesAccordion clc={clc} setClassId={setClassId} />
                </Col>

            </Row>
        </div>

    )
}
export default withRouter(ChildrenLearningCenter)