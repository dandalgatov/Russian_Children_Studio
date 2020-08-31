import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { Icon, Menu, Dropdown } from 'semantic-ui-react'

import './Nav.css'

export default function Nav() {


    const [aboutSecondaryVisible, setAboutSecondaryVisible] = useState('hidden')
    const [clcSecondaryVisible, setCLCSecondaryVisible] = useState('hidden')



    return (
        <nav>
            <div className='primary-nav'>
                <Link
                    to="/about"
                    className='link'
                    onMouseOver={() => setAboutSecondaryVisible('visible')}
                    onMouseLeave={() => setAboutSecondaryVisible('hidden')}
                >About</Link>

                <Link
                    to="/children_learning_center" className='link'
                    onMouseOver={() => setCLCSecondaryVisible('visible')}
                    onMouseLeave={() => setCLCSecondaryVisible('hidden')}
                >Children Learning Center</Link>

                <Link to="/events" className='link'> Events </Link>
                <Link to="/calendar" className='link'> Calendar </Link>
                <Link to="/contact" className='link'> Contact </Link>
                <Link to="/register" className='link'> Register </Link>
            </div>

            <div className='secondary-nav'>
                <div
                    className={`secondary-nav-section ${aboutSecondaryVisible}`}
                    onMouseOver={() => setAboutSecondaryVisible('visible')}
                    onMouseLeave={() => setAboutSecondaryVisible('hidden')}
                >
                    <Link to="/mission" className='link'>Mission</Link>
                    <Link to="/our_team" className='link'>Our Team</Link>
                </div>

                <div
                    className={`secondary-nav-section ${clcSecondaryVisible}`}
                    onMouseOver={() => setCLCSecondaryVisible('visible')}
                    onMouseLeave={() => setCLCSecondaryVisible('hidden')}
                >
                    <Link to="/1.5_4yo" className='link'>1.5-4 y.o.</Link>
                    <Link to="/4_17yo" className='link'>4-17 y.o.</Link>
                    <Link to="/online_program" className='link'>Online Program</Link>
                    <Link to="/joint_learning_program" className='link'>Joint Learning Program</Link>
                </div>
            </div>
        </nav>
    )
}