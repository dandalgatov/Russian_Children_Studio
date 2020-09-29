
import React from 'react'
import { Card, Row, Col } from 'antd';


import TeamMemberCard from '../../components/teamMember/TeamMemberCard'
export default function About() {
    const team = [
        {
            name: 'Anya',
            img: 'https://drive.google.com/uc?export=view&id=1Ri3RPYYq4LvxrRsmNqPAiRJJKhFiOebJ'
        },
        {
            name: 'Ayna',
            img: 'https://drive.google.com/uc?export=view&id=10WosTx7dVDLYgB7IxVeEV8zPqOf3mvP3'
        },
        {
            name: 'Ilya',
            img: 'https://drive.google.com/uc?export=view&id=1yULnRBK_exAsxjJV5zSFcytVCDKnDSGx'
        },
        {
            name: 'Luba',
            img: 'https://drive.google.com/uc?export=view&id=1tbrvpFF5OpNYzzZd8sHXRhwe9Xhey6G0'
        },
        {
            name: 'Masha B',
            img: 'https://drive.google.com/uc?export=view&id=11RoPyC-Wn1J3hD6CbY2yCZ6A6SWIuvMD'
        },
        {
            name: 'Masha D',
            img: 'https://drive.google.com/uc?export=view&id=1cfYmsuoxvHksJbcCcnmeBSGo9guwu9f9'
        },
        {
            name: 'Masha F',
            img: 'https://drive.google.com/uc?export=view&id=1uwPbrzcSMUYW583Y1NuiFfss1R2J0GZ4'
        },
        {
            name: 'Nadya',
            img: 'https://drive.google.com/uc?export=view&id=1ubk8EGfv8NVImL1u2eDOxALDz78ylmto'
        },
        {
            name: 'Natasha',
            img: 'https://drive.google.com/uc?export=view&id=1iIIoGlbmuRt9c9x_aKToJpB8HRmDdu33'
        },
        {
            name: 'Nina',
            img: 'https://drive.google.com/uc?export=view&id=14hjElf395UlEA7E6LJ5fs9m73F1q0HxG'
        },
        {
            name: 'Tonya',
            img: 'https://drive.google.com/uc?export=view&id=1_JX17_lyQhfO3-_DKccgMLKTIiU0n6Rk'
        },
    ]

    return (
        <div>
            <a href="mission">
                <h1 className='fg900' style={{ textAlign: 'center' }} >MISSION</h1>
            </a>

            <Card style={{ height: '100%', paddingTop: '10vh', paddingBottom: '10vh'}} bordered={false}>
                        <p className='book' style={{ textAlign: 'center' }}>
                            <b style={{ color: '#708A86', paddingRight: '.5em' }}>
                                Our mission
                            </b>
                        is to inspire bilingual children – Russian-native speakers to achieve literacy and most importantly fall in love with Russian language and culture.<br />

                            <b style={{ color: '#708A86', paddingRight: '.5em' }}>
                                The Studio offers
                            </b>
                        a physical and virtual environment for immersion into Russian language and culture, nurturing a sense of community and belonging for all interested families.<br />

                            <b style={{ color: '#708A86', paddingRight: '.5em' }}>
                                Founded almost a decade ago
                            </b>
                        by Maria Bernsteyn in collaboration with Alla Kovgan, our Studio is a
                        501c3 non-profit organization, which consists of the Children Learning Center and Cultural Programs.</p>
                    </Card>
            <a href="team">
                <h1 className='fg900' style={{ textAlign: 'center', paddingBottom: '10vh' }} >TEAM</h1>
            </a>
            <Row justify='center' gutter={[16, 16]}>
           
                {team && team.map((user) =>
                <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                    <TeamMemberCard user={user}></TeamMemberCard>
                </Col>
                
            )}
            </Row>
            
            

           


        </div>
    )
}
