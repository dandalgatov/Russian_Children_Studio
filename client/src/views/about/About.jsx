
import React from 'react'
import {withRouter} from 'react-router';
import { Card, Row, Col } from 'antd';
// import Anya from '../../assets/images/StaffPhotos/Anya.jpeg'
// import Ayna from '../../assets/images/StaffPhotos/Ayna.jpeg'
// import Illya from '../../assets/images/StaffPhotos/Illya.jpeg'
// import Luba from '../../assets/images/StaffPhotos/Luba.jpeg'
// import Masha_b from '../../assets/images/StaffPhotos/Masha_b.jpeg'
// import Masha_d from '../../assets/images/StaffPhotos/Masha_d.jpeg'
// import Masha_f from '../../assets/images/StaffPhotos/Masha_f.jpeg'
// import Madya from '../../assets/images/StaffPhotos/Nadya.jpeg'
// import Natasha from '../../assets/images/StaffPhotos/Natasha.jpeg'
// import Nina from '../../assets/images/StaffPhotos/Nina.jpeg'
// import Tonya from '../../assets/images/StaffPhotos/Tonya.jpeg'



import TeamMemberCard from '../../components/teamMember/TeamMemberCard'


function About(props) {
    const { about } = props
    const {mission, team} = about
    const { p1, p2, p3,} = mission
    const { people, moreInfo} = team


    return (
        <div>
            <a href="mission">
                <h1 className='fg900' style={{ textAlign: 'center' }} >{mission.title}</h1>
            </a>

            <Card style={{ height: '100%', paddingTop: '10vh', paddingBottom: '10vh' }} bordered={false}>
                        <p className='book' style={{ textAlign: 'center' }}>
                            <b style={{ color: '#708A86', paddingRight: '.4em' }}>{p1.b}</b>
                            {p1.p}
                            <br /><br />
                            <b style={{ color: '#708A86', paddingRight: '.4em' }}>{p2.b}</b>
                            {p2.p}
                            <br /><br />
                            <b style={{ color: '#708A86', paddingRight: '.4em' }}>{p3.b}</b>
                            {p3.p}
                        </p>
            </Card>
            <a href="team">
                <h1 className='fg900' style={{ textAlign: 'center', paddingBottom: '10vh' }} >{team.title}</h1>
            </a>
            <Row justify='center' gutter={[16, 16]}>

                {people && people.map((user) =>
                    <Col xs={24} sm={24} md={12} lg={6} xl={6} key={user.img}>
                        <TeamMemberCard user={user} moreInfo={moreInfo}/>
                    </Col>

                )}
            </Row>

        </div>
    )
}
export default withRouter(About)


