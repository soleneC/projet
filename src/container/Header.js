import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, 
  Row, 
  Col} from 'reactstrap';
  import './Header.css';

class Header extends Component {
  constructor(props) {
   super(props);
   this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
   
  


  render() {
    return (
      <header class="barre">
     <div>
       <Navbar  light expand="md">
          <NavbarBrand style={{color: '#919DC4'}} href="/">My Dashboard</NavbarBrand>
          <NavbarToggler  onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{color: '#919DC4'}} href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: '#919DC4'}} href="/">Page administrative</NavLink>
              </NavItem>
              </Nav>
          </Collapse>
        </Navbar>
      </div>
      </header>
    );
  }
}

export default Header;