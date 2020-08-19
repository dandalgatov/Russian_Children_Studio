import React from 'react'
import './LanguageToggle.css'
import RusFlag from '../../../assets/images/russia_flag_round.svg'
import EngFlag from '../../../assets/images/usa_flag_round.svg'

export default function LanguageToggle(props) {
    const { rus, handleToggle } = props
    return (
        <>
            <input
                checked={rus}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
                
                
            />
            <label
                // style={{ backgroundImage: rus ? `url(${EngFlag})` : `url(${RusFlag})` }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >

                <span
                    className={`react-switch-button`}
                    style={{ backgroundImage: rus ? `url(${RusFlag})` : `url(${EngFlag})` }}
                />
            </label>
        </>
    )
}
