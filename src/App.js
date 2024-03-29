import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Page from './components/Page'
import PageMobile from './components/PageMobile'
import Form from './components/Form'
import './styles/App.scss'

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Page />
                        <PageMobile />
                    </Route>
                    <Route exact path="/form"><Form /></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
