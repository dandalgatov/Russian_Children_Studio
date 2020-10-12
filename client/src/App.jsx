import React, {useState} from 'react'
import { Route,Switch,} from 'react-router-dom'
import './App.css'


//Views
import Home from './views/home/Home'
import About from './views/about/About'

import CLCPrograms from './views/clc/CLCPrograms'

import Calendar from './views/calendar/Calendar'
import Contact from './views/contact/Contact'
import HealthForm from './views/healthForm/healthForm'


//Componenets
import Header from './components/shared/header'
import Footer from './components/shared/footer'

//Languages

import English from './assets/translations/en.json'
import Russian from './assets/translations/ru.json'




export default function App() {

    const [ru, setRu] = useState(false)

    const { homepage, header, about, contacts, clc, footer } = ru ? Russian : English



    return (
        <div className='App'>
            <div className='app-container'>
                < Header header={header} setRu={setRu}/>
                <Switch >
                    <Route exact path="/"
                        render={() =>
                            <Home homepage={homepage} about={about} />
                        } />
                    <Route exact path="/about"
                        render={() =>
                            <About about={about}/>
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
                            <CLCPrograms clc={clc}/>
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
                            <Contact contacts={contacts}/>
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
                <Footer footer={footer}/>
            </div>
           
        </div>
    )
}