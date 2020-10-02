import React, { useEffect  } from 'react'
import {
    Route,
    Switch,
    useHistory
} from 'react-router-dom'
import './App.css'


//Views
import Home from './views/home/Home'
import About from './views/about/About'

import ChildrenLearningCenter from './views/clc/ChildrenLearningCenter'

import Calendar from './views/calendar/Calendar'
import Contact from './views/contact/Contact'
import HealthForm from './views/healthForm/healthForm'


//Componenets
import Header from './components/shared/header'





export default function App() {
    const history = useHistory()

    useEffect(() => {
        history.push(window.location)
    })
    

    return (
        <div className='App'>
            <div className='app-container'>
                < Header />
                {/* <Router history={history}> */}
                <Switch >
                    <Route exact path="/"
                        render={() =>
                            <Home />
                        } />
                    <Route exact path="/about"
                        render={() =>
                            <About />
                        } />
                    {/* <Route exact path="/mission"
                        render={() =>
                            <Mission />
                        } />
                    <Route exact path="/our_team"
                        render={() =>
                            <OurTeam />
                        } /> */}
                    <Route exact path="/clc"
                        render={() =>
                            <ChildrenLearningCenter />
                        } />
                    {/* <Route exact path="/online"
                        render={() =>
                            <Online />
                        } /> */}
                    {/* <Route exact path="/events"
                        render={() =>
                            <Events />
                        } /> */}
                    <Route exact path="/calendar"
                        render={() =>
                            <Calendar />
                        } />
                    <Route exact path="/contact"
                        render={() =>
                            <Contact />
                        } />
                    <Route exact path="/healthform"
                        render={() =>
                            <HealthForm />
                        } />
                    {/* <Route exact path="/register"
                        render={() =>
                            <Register />
                        } /> */}
                </Switch >
                {/* </Router> */}
            </div>
        </div>
    )
}