import React from 'react'
import { Collapse, Table } from 'antd';
import { HomeOutlined, UserOutlined, TeamOutlined, CalendarOutlined } from '@ant-design/icons';

import Vinni from '../../assets/images/Vinni.png'

const { Panel } = Collapse;


function callback(key) {
    console.log(key);
}

const header =
  <div>
    <img src={Vinni} style={{height: '30px'}} alt="Vinni Pooh"/>
    {/* <HomeOutlined />  */}
    <span style={{paddingLeft: '10px'}}>4 Y.O. | IN PERSON | Winnie the Pooh / «Винни-Пухи» </span>
  </div>


const data = [
    {
      key: '1',
      mon: '3:45 Arts | Luba B',
      thu: '3:30 Logic & Math | Maria D',
      fri: '3:30 Russian | Maria F',
    },
    {
      key: '2',
      mon: '4:45 Speech Development & Movement | Nina R',
    },
];


const col = [
    {
      title: 'Monday | IN PERSON',
      dataIndex: 'mon',
      key: 'mon',
    },
    {
      title: 'Thursday | ZOOM',
      dataIndex: 'thu',
      key: 'thu',
    },
    {
      title: 'Friday | ZOOM',
      dataIndex: 'fri',
      key: 'fri',
    },
  ];



const text = <Table pagination={false} dataSource={data} columns={col} />

export default function classesAccordion() {
    return (
        <>
            <Collapse
                defaultActiveKey={['1']}
                onChange={callback}
                expandIconPosition={'right'}
            >
                <Panel style={{textAlign: 'left'}} header={header} key="1">
                    <div>{text}</div>
                </Panel>
                <Panel header={header} key="2">
                    <div>{text}</div>
                </Panel>
                <Panel header={header} key="3">
                    <div>{text}</div>
                </Panel>
            </Collapse>
        </>
    )
}


