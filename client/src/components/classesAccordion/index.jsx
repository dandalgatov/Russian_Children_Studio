import React from 'react'
import { Collapse } from 'antd';
import { PlusOutlined, MinusOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { Panel } = Collapse;







export default function classesAccordion(props) {
  const { clc, setClassId } = props
  console.log(clc)
  return (
    <Collapse
      // onChange={callback}
      expandIconPosition={'right'}
      expandIcon={({ isActive }) => <span> {isActive ? <MinusOutlined /> : <PlusOutlined />}</span>}
    >
      {clc && clc.map((item, idx) =>
        <Panel
          key={idx}
          header={
            <>
              <b>{item.titleAge} | {item.titleLocation} |</b> {item.title}
            </>}
          extra={item.details ?
            <InfoCircleOutlined onClick={(e) => {
              e.stopPropagation()
              setClassId(idx + 1)
              window.scrollTo({top: 0, behavior: 'smooth'})
          }
          } /> : ''}
        >
          <div style={{ display: "flex", flexFlow: "column nowrap" }}>
            {item && item.summary.map((line, idx) =>
              <line key={idx}>{line.name} | <b>{line.text}</b></line>
            )}
          </div>

        </Panel>
      )}
    </Collapse>
  )
}