import React from 'react'
import Slider from "react-slick";
import './Home.css'

import 'antd/dist/antd.css';

import Bell from '../../assets/icons/bell.svg'

import { Carousel } from 'antd'

import { NotificationFilled, EllipsisOutlined, BellOutlined } from '@ant-design/icons';
import { Descriptions, PageHeader, Menu, Dropdown, Button, Tag, Typography, Row, Badge, Col  } from 'antd';


import Slide1 from '../../assets/images/mission_slider_img1.jpg'
import Slide2 from '../../assets/images/mission_slider_img2.jpg'
import Slide4 from '../../assets/images/mission_slider_img4.jpg'
import Slide5 from '../../assets/images/mission_slider_img5.jpg'



export default function Home() {

    const settings = {
        autoplay: true,
        pauseOnHover: true,
        // slidesToShow: 2,
        swipeToSlide: true,
        arrows: false,
        autoplaySpeed: 6000,
        useCSS: true,
        // adaptiveHeight: true
    };

    const onChange = (a, b, c) => {
        console.log(a, b, c);
      }
      
      const carouselStyle = {
          height: '100%',
          width: '100%',
        color: '#000',
        lineHeight: '160px',
        textAlign: 'center',
      }

    return (
        <>

                <Carousel afterChange={onChange} dotPosition='bottop' style={{height: '160px'}}>

                <div style={{carouselStyle}}>
                    <img src={Slide1} alt="Slide1" style={{carouselStyle}}/>
                </div>
                <div >
                    <img src={Slide2} alt="Slide2" style={{carouselStyle}}/>
                </div>
                <div>
                    <img src={Slide4} alt="Slide4"/>
                </div>
                <div>
                    <img src={Slide5} alt="Slide5"/>
                </div>
            </Carousel>

            {/* <Row gutter={[12, 12]}>
                <Col span={10}>
                    <Descriptions vertical>
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

                </Col>
            </Row> */}




            {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}> */}

                {/* <Slider {...settings} style={{ width: '49%' }} >
                    <img src={Slide1} alt='gallery slide' style={{ height: 'auto', width: '100%' }} />
                    <img src={Slide2} alt='gallery slide' style={{ height: 'auto', width: '100%' }} />
                    <img src={Slide4} alt='gallery slide' style={{ height: 'auto', width: '100%' }} />
                    <img src={Slide5} alt='gallery slide' style={{ height: 'auto', width: '100%' }} />
                </Slider> */}

                {/* <div className='mission-body' style={{ flexDirection: 'column', width: '50%', padding: '1%' }}>
                    <div className='basics'>
                        <div >
                            <h1 className='wwwwwh'>what</h1>
                            <p><b>Russian Language and Culture Immersion</b></p>
                        </div>
                        <div>
                            <h1 className='wwwwwh'>who</h1>
                            <p><b>Children and youth 1.5-17 years old</b></p>
                        </div>
                        <div>
                            <h1 className='wwwwwh'>where</h1>
                            <p><b>Manhattan, New York City physically and everywhere online</b></p>
                        </div>
                        <div>
                            <h1 className='wwwwwh'>how</h1>
                            <p><b>Children Learning Center & Cultural Programs</b></p>
                        </div>
                    </div>
                    <div style={{ width: '100%', textAlign: 'left' }}>
                        <p>Our mission is to inspire bilingual children –  Russian-native speakers to achieve literacy and most importantly fall in love with Russian language and culture.
                    </p>
                        <p>The Studio offers a physical and virtual environment for immersion into Russian language and culture, nurturing a sense of community and belonging for all interested families.
                    </p>
                        <p>Founded almost a decade ago by Maria Bernsteyn in collaboration with Alla Kovgan, our Studio is a 501c3 non-profit organization, which consists of the Children Learning Center and Cultural Programs.
                    </p>
                    </div>


                </div>


            </div>
            <div style={{ width: '100%', backgroundColor: '#c6c6c1', height: 'auto', fontFamily: 'FranklinGothicITC', fontWeight: '900', color: 'white', fontSize: '1.5rem' }}>
                <p>Reach out and join us!</p>
            </div>

            <div class='programs'>



            </div> */}

        </>
    )
}
