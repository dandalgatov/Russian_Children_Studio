import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;



export default function TeamMemberCard(props) {
    const { user, moreInfo } = props
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Card
                hoverable
                bordered
                style={{ width: 240, boder: '1px solid black'}}
                cover={
                    <img
                        // style={{border: '10px solid black'}}
                        alt={user && user.fn}
                        src={user && user.img}
                    />
                }
            >
                <Meta title={user && `${user.fn} ${user.ln}`} description={moreInfo} />
            </Card>
        </div>
    )
}
