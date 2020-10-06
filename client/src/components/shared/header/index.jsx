import React, { useState, useEffect } from 'react'
import './Header.css'
import HeaderDash from './HeaderDash'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import { Anchor } from 'antd';

export default function Header(props) {

    const { setRu, header } = props

    const [mobileMenu, setMobileMenu] = useState(false)
    const [desktopMenu, setDesktopMenu] = useState(true)
    const [showDrawer, setShowDrawer] = useState(false)
    const [currentKey, setCurrentKey] = useState('')

    useEffect(() => {
        setDesktopMenu(window.innerWidth > 767)
        setMobileMenu(window.innerWidth < 767)
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
                    setRu={setRu}
                    mobileMenu={mobileMenu}
                    setShowDrawer={setShowDrawer}
                />
            </Anchor>
            <MobileMenu
                header={header}
                desktopMenu ={desktopMenu}
                showDrawer={showDrawer}
                setShowDrawer={setShowDrawer}
                currentKey={currentKey}
                setCurrentKey={setCurrentKey}
            />
            {desktopMenu ?
                <DesktopMenu
                    header={header}
                    currentKey={currentKey}
                    setCurrentKey={setCurrentKey}
                /> : ''
            }
        </>
    )
}
