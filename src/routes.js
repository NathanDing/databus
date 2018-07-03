import React from 'react';
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';
import LoginPage from './pages/login';
import Index from './container'
const routes = (
    <HashRouter histor>
        <Switch>
            {/*<Route path="/" component={LoginPage}/>*/}
            <Route path="/login" component={LoginPage}/>
            <Route path="/index" component={Index}/>
            <Redirect from='*' to='/login' />
        </Switch>
    </HashRouter>
);
export default routes;