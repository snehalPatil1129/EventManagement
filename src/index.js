import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';


import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import '../scss/style.scss'
import '../scss/core/_dropdown-menu-right.scss'
// Containers
import main from './containers/main'
// Views
import Login from './components/Login'
import Register from './components/Register'
import HomePage from './components/HomePage'
//import Page404 from './views/Pages/Page404/'
//import Page500 from './views/Pages/Page500/'

ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route exact path="/login" name="Login Page" component={Login}/>
      <Route exact path="/register" name="Register Page" component={Register}/>
      <Route exact path="/HomePage" name="HomePage" component={main}/>
       {/*<Route exact path="/500" name="Page 500" component={Page500}/> */}
      <Route path="/" name="Login" component={Login}/>
    </Switch>
  </HashRouter>
), document.getElementById('root'));
