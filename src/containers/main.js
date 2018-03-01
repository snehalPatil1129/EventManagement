import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../components/Header'
import SideBar from './../components/SideBar/SideBar'
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import HomePage from '../components/HomePage';
import Register from '../components/Register';
import Cards from '../components/Base/Cards/';
//import Breadcrumb from '../components/Breadcrumbs/Breadcrumbs';

class main extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <div className="app-body">
          <SideBar {...this.props}/>
          <main className="main">
           <Breadcrumb/>
            <Container fluid>
              <Switch>
                <Route path="/HomePage" name="Home" component={HomePage}/>
                <Route path="/Register" name="Home" component={Register}/>
                <Route path="/Base/Cards" name="Cards" component={Cards}/>
                <Redirect from="/" to="/HomePage"/>
              </Switch>
            </Container>
          </main>
          {/* <Aside/> */}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default main;