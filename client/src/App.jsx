import React from 'react'
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

    return (
        <div className='App'>
            <div className='app-container'>
                < Header />
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