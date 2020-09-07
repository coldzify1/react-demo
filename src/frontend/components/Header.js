import React from 'react'

import { LinkContainer } from "react-router-bootstrap";
import { Nav,Navbar} from 'react-bootstrap';
class Header extends React.Component {
    render() {


      return (
      <div>
        <Navbar bg="dark" variant="dark">
            <LinkContainer to='/'><Navbar.Brand >Brand</Navbar.Brand></LinkContainer>
            <Nav className="mr-auto">
              <LinkContainer to='/'><Nav.Link >Home</Nav.Link></LinkContainer>
              <LinkContainer to='/contact'><Nav.Link  >Contact</Nav.Link></LinkContainer>
                
                
                
            </Nav>
   
        </Navbar>
        
        
        
      </div>
      );
    }
}

export default Header;