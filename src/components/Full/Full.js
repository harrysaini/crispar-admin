import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import { Container } from 'reactstrap';

import './full.css';
import Header from '../Header/Header.js';
import SideBar from '../SideBar/SideBar.js';
import Footer from '../Footer/Footer.js';
import Dashboard from '../Dashboard/Dashboard';
import AddUserPage from '../AddUserPage/AddUserPage';


class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <SideBar />
          <div className="main-div">
            <Container fluid>
              <Switch>
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/users/add' component={AddUserPage} />
                <Redirect from='/' to='/dashboard' />
              </Switch>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
