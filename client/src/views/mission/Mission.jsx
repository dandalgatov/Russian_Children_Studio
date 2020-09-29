import React from 'react'
import Slider from "react-slick";
import './Mission.css'

import Slide1 from '../../assets/images/mission_slider_img1.jpg'
import Slide2 from '../../assets/images/mission_slider_img2.jpg'
import Slide4 from '../../assets/images/mission_slider_img4.jpg'
import Slide5 from '../../assets/images/mission_slider_img5.jpg'

export default function Mission() {

    const settings = {
        autoplay: true,
        pauseOnHover: true,
        slidesToShow: 2,
        swipeToSlide: true,
        arrows: false,
        autoplaySpeed: 6000,
        useCSS: true,
    }


    return (
        <div >
            <Slider {...settings} >
                <img src={Slide1} alt='gallery slide' style={{ height: 'auto', width: '100%' }} />
                <img src={Slide2} alt='gallery slide' style={{ height: 'auto', width: '100%' }} />
                <img src={Slide4} alt='gallery slide' style={{ height: 'auto', width: '100%' }} />
                <img src={Slide5} alt='gallery slide' style={{ height: 'auto', width: '100%' }} />
            </Slider>
            <div className='mission-body'>
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
            <div style={{width: '100%', backgroundColor: '#CCCDCB', height: 'auto', fontFamily: 'FranklinGothicITC', fontWeight: '900', color: 'white', fontSize: '1.5rem'}}>
                    <p className='fg900'>Reach out and join us!</p>
                </div>

        </div>
    )
}
