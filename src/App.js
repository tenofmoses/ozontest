import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Page from './components/Page'
import Form from './components/Form'
import './styles/App.scss'

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Switch>
                    <Route exact path="/"><Page /></Route>
                    <Route exact path="/form"><Form /></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
