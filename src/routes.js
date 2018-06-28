import React from 'react';
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';
import LoginPage from './pages/login'
const routes = (
    <HashRouter histor>
        <Switch>
            <Route path="/" component={LoginPage}/>
            <Route path="/login" component={LoginPage}/>
            <Redirect from='*' to='/login' />
        </Switch>
    </HashRouter>
);