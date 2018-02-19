import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import { Container } from 'reactstrap';

import './full.css';
import Header from '../Header/Header.js';
import SideBar from '../SideBar/SideBar.js';
import Footer from '../Footer/Footer.js';


class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <SideBar />
          <div className="main-div">
            <Container>
              Hello
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
