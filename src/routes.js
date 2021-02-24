import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/home';
import About from './views/about';
import RegisterUser from './views/register-user';
import ListUser from './views/list-user';
import DetailUser from './views/detail-user';
import Login from './views/login';

const Routes = () => (
 <Switch>
   <Route exact path="/" component={Login} />
   <Route exact path="/login" component={Login} />
   <Route exact path="/home" component={Home} />
   <Route path="/about" component={About} />
   <Route path="/register-user" component={RegisterUser} />
   <Route path="/list-user" component={ListUser} />
   <Route path="/detail-user/:id" component={DetailUser} />
 </Switch>
);

export default Routes;
