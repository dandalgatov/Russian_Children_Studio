import React from 'react';
import { Carousel, Row, Col, } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import Slide1 from '../../assets/images/mission_slider_img1.jpg'
import Slide2 from '../../assets/images/mission_slider_img2.jpg'
import Slide4 from '../../assets/images/mission_slider_img4.jpg'
import Slide5 from '../../assets/images/mission_slider_img5.jpg'

export default function AntCarousel() {
    const SampleNextArrow = props => <RightOutlined
        className={props.className} onClick={props.onClick}
        style={{ ...props.style, color: 'black', fontSize: '15px', }}
    />
    const SamplePrevArrow = props => <LeftOutlined
        className={props.className} onClick={props.onClick}
        style={{ ...props.style, color: 'black', fontSize: '15px', }}
    />

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        swipeToSlide: true,
        centerPadding: '100px',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                    breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    const imgStyle = {
        height: 'auto',
        width: '100%',
    }

    return (
        <Row justify="center" align="middle" >
            <Col span={24} justify="center">
                <Carousel {...settings} className='box-shadow'>
                    <div>
                        <img src={Slide1} alt='slide1' style={{ ...imgStyle }} />
                    </div>
                    <div>
                        <img src={Slide2} alt='slide2' style={{ ...imgStyle }} />
                    </div>
                    <div>
                        <img src={Slide1} alt='slide1' style={{ ...imgStyle }} />
                    </div>
                    <div>
                        <img src={Slide4} alt='slide4' style={{ ...imgStyle }} />
                    </div>
                    <div>
                        <img src={Slide5} alt='slide5' style={{ ...imgStyle }} />
                    </div>
                </Carousel>
            </Col>
        </Row>
    )
}




