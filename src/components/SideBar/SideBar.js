import React, {Component} from 'react';
import './sidebar.css';
import {Badge, Nav, NavItem, NavLink } from 'reactstrap';

class SideBar extends Component {

  

 
  render() {

    
    return (
      <div className="sidebar sidebar-fixed">
        <nav className="sidebar-nav ">
          <Nav>
            <NavItem>
              <NavLink>
                <i className="icon-speedometer"></i> Dashboard
              </NavLink>
            </NavItem>
          </Nav>
        </nav>
      </div>
    )
  }
}

export default SideBar;
