import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Container from './container'
import Login from './pages/login';

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/index" component={Container}/>

            <Redirect to='/' />
        </Switch>
    </BrowserRouter>
);
export default routes;