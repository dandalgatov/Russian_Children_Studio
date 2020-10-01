import React from 'react'
import {withRouter} from 'react-router';

import "antd/dist/antd.css";
import ReactPlayer from 'react-player'
import { Descriptions, Badge, Row, Col, Collapse, } from "antd";
const { Panel } = Collapse;


function Online() {

  function callback(key) {
    console.log(key);
  }


  const header = <span>TUESDAY |  6:00pm | Bedtime Story | Nina R</span>
  const text =
    <div>
      Every class engages children visually, aurally and verbally. We use diafilms to present each fairy tale, meaning that the story is divided into 30-60 slides. Each slide contains an illustration and several lines of text. The teacher acts out the story, using music, songs, and sometimes musical instruments, guiding children through culture, history and everyday life of the characters and the worlds they come from. The “Bedtime Story” suggests a relaxed atmosphere. This is an evening class – a gentle immersion into Russian language, fairy tales and their characters. The parents can enjoy a quiet moment, making dinner or working while their children are absorbed by their bedtime story. <br /><br />

      The upcoming semester  includes 4 sections:<br /><br />
      <b>Section 1:</b> Russian Fairy Tales and Oral Folk Traditions<br />
      <b>Section 2:</b> Fables and Stories of Kievan Rus<br />
      <b>Section 3:</b> Italian Fairy Tales and Commedia dell'Arte<br />
      <b>Section 4:</b> Fairy Tales and Legends of Scotland<br />
    </div>


  return (
    <div>
      <h1>NEW!! ONLINE REMOTE LEARNING GROUP “POCHEMUCHKI ONLINE”</h1>



      <Row gutter={[12, 12]}>
        <Col span={10}>
          <Descriptions bordered>
            <Descriptions.Item label="WHO" span={3}>
              Children 7-8 Y.O.
        </Descriptions.Item>
            <Descriptions.Item label="WHERE" span={3}>
              Residing IN/CLOSE to NYC (Tri-State area)
        </Descriptions.Item>
            <Descriptions.Item label="WHEN" span={24}>
              Academic Year 2020-2021
        </Descriptions.Item>
            <Descriptions.Item label="WHY" span={24}>
              Designed for children who can visit the studio once in a while, but live too far to attend our 'in-person' program regularly. Full benefit of our program in a flexible format.
        </Descriptions.Item>
            <Descriptions.Item label="PRE-REQUISITES" span={24}>
              age-appropriate reading and writing skills in Russian
        </Descriptions.Item>
            <Descriptions.Item label="REGISTER" span={3}>
              <Badge status="processing" text="SEP-DEC SEMESTER IS LIVE" /><br />
              <a href='mailto:office@russianchildrenstudio.org'>office@russianchildrenstudio.org</a>
            </Descriptions.Item>
          </Descriptions>
        </Col>

        <Col span={14}>
          <ReactPlayer
            width='100%'
            height='100%'
            url='https://www.youtube.com/watch?v=3pZHgZfNhc0' />
        </Col>
      </Row>

      <Row >
        <Col span={24}>
          <Collapse
            defaultActiveKey={['1']}
            onChange={callback}
            expandIconPosition={'right'}
          >
            <Panel style={{ textAlign: 'left' }} header={header} key="1">
              <div>{text}</div>
            </Panel>
            <Panel header={header} key="2">
              <div>{text}</div>
            </Panel>
            <Panel header={header} key="3">
              <div>{text}</div>
            </Panel>
          </Collapse>
        </Col>
      </Row>

    </div>
  )
}
export default withRouter(Online)