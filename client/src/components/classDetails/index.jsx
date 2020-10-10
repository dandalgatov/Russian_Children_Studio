import React from 'react'
import { CloseCircleOutlined } from '@ant-design/icons' 


export default function index(props) {
    const { setClassId } = props
    const { title, subtitle, topics } = props.details || []
    return (
        <div style={{ display: "flex", flexFlow: 'column nowrap', }}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h1 className="demi600">{title}</h1>
                <CloseCircleOutlined onClick={()=> setClassId(0)}/>
            </div>
            
            <p >{subtitle}</p>
            {topics && topics.map((topic, idx) =>
                <div key={idx} style={{ margin: '2rem' }}>
                    <b>{topic.name}</b>
                    {topic.bullets && topic.bullets.map((bullet, idx) =>
                        <div key={idx}> *{bullet.point}</div>
                    )}
                </div>
            )}
        </div>
    )
}
