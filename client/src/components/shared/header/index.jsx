import React from 'react'
import './Header.css'

import HeaderDash from './HeaderDash'
import DesktopMenu from './DesktopMenu'

export default function Header(props) {
    return (
        <>
            <HeaderDash />
            <DesktopMenu />
        </>
    )
}