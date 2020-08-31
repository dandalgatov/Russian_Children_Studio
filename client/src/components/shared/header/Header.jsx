import React from 'react'

// CSS
import './Header.css'
//Conmpnents
import Nav from '../nav/Nav'
//Assets
import EngLogo from '../../../assets/icons/logoRCSeng.svg'
import RusLogo from '../../../assets/icons/logoRCSrus.svg'
import InstagramLogo from '../../../assets/icons/instagram.svg'
import FacebookLogo from '../../../assets/icons/facebook.svg'
import GmailLogo from '../../../assets/icons/gmail.svg'

export default function Header(props) {
    // const { rus, handleToggle } = props
    const { activeMenu, setActiveMenu} = props 


    return (
        <>
            <header style={{
                height: '15vh',
                display: 'flex'
            }}>
                <div style={{
                    height: '100%',
                    width: '30%',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}>
                    <img
                        src={EngLogo}
                        alt="English Style Logo"
                        style={{
                            height: '80%',
                            width: 'auto%',
                            maxHeight: '100%',
                            maxWidth: '100%',
                        }}
                    />
                </div>

                <div style={{
                    height: '100%',
                    width: '25%',
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'space-around'
                }}>
                    <div>
                        <input className="toggle" type="checkbox" />
                    </div>
                    <div style={{display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center'}}>
                        <img src={GmailLogo} alt="Gmail Logo" style={{ height: '5vh', padding: '0 2px 0 2px'}} />
                        <img src={FacebookLogo} alt="Facebook Logo" style={{ height: '5vh', padding: '0 2px 0 2px' }} />
                        <img src={InstagramLogo} alt="Instagram Logo" style={{  height: '5vh', padding: '0 2px 0 2px'}}/>
                    </div>


                </div>

                <div style={{
                    height: '100%',
                    width: '45%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}>
                    <img
                        src={RusLogo}
                        alt="Russian Style Logo"
                        style={{
                            height: '55%',
                            maxHeight: '100%',
                            maxWidth: '100%',
                            width: 'auto'
                        }}
                    />
                </div>
            </header>

            <Nav activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
        </>

    )
}