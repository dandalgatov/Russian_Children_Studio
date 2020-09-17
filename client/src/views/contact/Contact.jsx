import React from 'react'
import { Alert } from 'antd';
import { LoadingOutlined  } from '@ant-design/icons';

export default function Contact() {
    return (
        <div>
            <h1 style={{paddingLeft: '12px'}}>CONTACT PAGE UNDER CONSTRUCTION</h1>
            <Alert type="info" showIcon
                style={{
                    backgroundColor: '#fff',
                    border: 'none',
                    height: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#768E8A'
                }}

                icon={<LoadingOutlined  style={{
                    fontSize: '22px',
                    color: '#768E8A',
                    top: '5px',
                    left: '10px'
                }} />}
                message="We'll announce when this section goes live!"
            />
        </div>
    )
}
