import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import './App.css'

import Header from './components/shared/header/Header'
import Home from './views/home/Home'

export default function App() {
    const [rus, setRus] = useState(false);

    return (
        <div className='App' >
        <Container>
                <Header
                    rus={rus}
                    handleToggle={() => setRus(!rus)}
                />
            
                
                <Switch >
                <Route exact path="/"
                    render={() =>
                        <Home />
                    }
                /> 
            </Switch > 
        </Container> 
        </div>
    )
}