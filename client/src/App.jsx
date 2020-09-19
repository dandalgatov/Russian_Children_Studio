import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'


//Views
import Home from './views/home/Home'
import About from './views/about/About'
import Mission from './views/mission/Mission'
import OurTeam from './views/ourTeam/OurTeam'
import ChildrenLearningCenter from './views/clc/ChildrenLearningCenter'
import Online from './views/clc/Online'
import Events from './views/eventsPage/Events'
import Calendar from './views/calendar/Calendar'
import Contact from './views/contact/Contact'
import Register from './views/register/Register'

//Componenets
import Header from './components/shared/header'




export default function App() {
    const [rus, setRus] = useState(false);
    const [activeMenu, setActiveMenu] = useState('')

    useEffect(() => {
        setActiveMenu(window.location.pathname);
    }, [])

    return (
        <div className='App' style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '90%', maxWidth: '1440px' }}>
                < Header
                    isOn={rus}
                    handleToggle={() => setRus(!rus)}
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                />
                <div style={{height: '10px'}}/>
                <Switch >
                    <Route exact path="/"
                        render={() =>
                            <Home />
                        } />

                    <Route exact path="/about"
                        render={() =>
                            <About />
                        } />

                    <Route exact path="/mission"
                        render={() =>
                            <Mission />
                        } />

                    <Route exact path="/our_team"
                        render={() =>
                            <OurTeam />
                        } />

                    <Route exact path="/clc"
                        render={() =>
                            <ChildrenLearningCenter />
                        } />

                    <Route exact path="/online"
                        render={() =>
                            <Online />
                        } />

                    <Route exact path="/events"
                        render={() =>
                            <Events />
                        } />

                    <Route exact path="/calendar"
                        render={() =>
                            <Calendar />
                        } />

                    <Route exact path="/contact"
                        render={() =>
                            <Contact />
                        } />

                    <Route exact path="/register"
                        render={() =>
                            <Register />
                        } />
                </Switch >
            </div>
        </div>
    )
}