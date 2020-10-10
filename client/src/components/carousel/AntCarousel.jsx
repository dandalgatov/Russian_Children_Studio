import React from 'react';
import { Carousel, } from 'antd';


// import Slide1 from '../../assets/images/AntCarousel/mission_slider_img1.jpeg'
// import Slide2 from '../../assets/images/AntCarousel/mission_slider_img2.jpeg'
// import Slide4 from '../../assets/images/AntCarousel/mission_slider_img4.jpeg'
// import Slide5 from '../../assets/images/AntCarousel/mission_slider_img5.jpeg'

// import Stock1 from '../../assets/images/AntCarousel/stock1.jpg'
// import Stock2 from '../../assets/images/AntCarousel/stock2.jpg'
// import Stock3 from '../../assets/images/AntCarousel/stock3.jpg'

import Transparent from '../../assets/images/AntCarousel/unnamed.png'


export default function AntCarousel() {

    // const SampleNextArrow = props => <RightOutlined
    //     className={props.className} onClick={props.onClick}
    //     style={{ ...props.style, color: 'black', fontSize: '15px', }}
    // />
    // const SamplePrevArrow = props => <LeftOutlined
    //     className={props.className} onClick={props.onClick}
    //     style={{ ...props.style, color: 'black', fontSize: '15px', }}
    // />

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        swipeToSlide: true,
        centerPadding: '100px',
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        // responsive: [
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     },
        //     {
        //             breakpoint: 767,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     }
        // ]
    }

    const imgStyle = {
        height: 'auto',
        // paddingLeft: '5px',
        // paddingRight: '5px',
        margin: "0",
        width: '100%',
        maxHeight: '640px',
        maxWidth: '100%',
        borderRadius: '5px',
    }

    return (
                <Carousel {...settings} >
                    <div>
                        <img src={Transparent} alt='slide1' style={{ ...imgStyle }} />
                    </div>
                    {/* <div>
                        <img src={Stock2} alt='slide2' style={{ ...imgStyle }} />
                    </div>
                    <div>
                        <img src={Stock3} alt='slide4' style={{ ...imgStyle }} />
                    </div> */}
                </Carousel>
    )
}




