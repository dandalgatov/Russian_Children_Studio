import React from 'react'
import { Alert } from 'antd';
import { BulbOutlined } from '@ant-design/icons';

export default function Calendar() {
    return (
        <div>
            <h1>CALENDAR PAGE UNDER CONSTRUCTION. </h1>
            <Alert type="info" showIcon
                style={{
                    backgroundColor: '#fff',
                    border: 'none',
                    height: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#768E8A'
                }}

                icon={<BulbOutlined style={{
                    fontSize: '22px',
                    color: 'orange',
                    top: '5px',
                    left: '10px'
                }} />}
                message="We'll announce when this section goes live!"
            />
        </div>
    )
}
