import React, { useState, useEffect } from 'react'
import './Header.css'
import HeaderDash from './HeaderDash'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import { Anchor } from 'antd';

export default function Header() {
    // const [rus, setRus] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const [desktopMenu, setDesktopMenu] = useState(true)
    const [showDrawer, setShowDrawer] = useState(false)
    const [currentKey, setCurrentKey] = useState('')

    useEffect(() => {
        setDesktopMenu(window.innerWidth > 767)
        document.addEventListener('scroll', () => {
            setMobileMenu(window.innerWidth < 767 || window.scrollY > 0)
        })
    }, [])

    return (
        <>
            <Anchor
                showInkInFixed={false}
                style={{
                    padding: '0',
                    margin: '0',
                    borderBottom: '1px solid #CCCDCB'
                }}
            >
                <HeaderDash
                    mobileMenu={mobileMenu}
                    setShowDrawer={setShowDrawer}
                />
            </Anchor>
            <MobileMenu
                desktopMenu ={desktopMenu}
                showDrawer={showDrawer}
                setShowDrawer={setShowDrawer}
                currentKey={currentKey}
                setCurrentKey={setCurrentKey}
            />
            {desktopMenu ?
                <DesktopMenu
                    currentKey={currentKey}
                    setCurrentKey={setCurrentKey}
                /> : ''
            }
        </>
    )
}
