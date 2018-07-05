import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Container from './container'
import Login from './pages/login';

const routes = (
    <BrowserRouter>
        {/* react-router4.0 后的路由写法 */}
        <Switch>
            {/*默认页面是登录页面，和Redirect配合使用*/}
            <Route path="/" exact component={Login}/>
            {/*容器页面，项目的所有路径以/index为前缀*/}
            <Route path="/index" component={Container}/>
            {/*重定向*/}
            <Redirect from="*" to='/' />
        </Switch>
    </BrowserRouter>
);
export default routes;