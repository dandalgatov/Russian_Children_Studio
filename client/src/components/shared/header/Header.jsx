import React from 'react'
import { Radio, Icon, Flag } from 'semantic-ui-react'
import Logo from '../../../assets/images/rcs_logo.png'
import LanguageToggle from '../languageToggle/LanguageToggle'

export default function Header(props) {

    const { rus, handleToggle } = props
    return (
        <div style={{height: '15vh'}}>
            <img src={Logo} style={{ height: '100%' }} alt="" />
            <Icon name='mail outline' />
            <Icon name='facebook' />
            <Icon name='instagram' />
            <Flag name='ru' />
            Header
           
            <LanguageToggle rus={rus} handleToggle={handleToggle}/>

        </div>
    )
}
