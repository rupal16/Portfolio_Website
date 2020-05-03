import React, { Component } from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Navbar, Nav } from 'react-bootstrap';

import './style.scss';


class Routes extends Component {

    render() {
        return (
        <div>
            {/* <Router>
            <Switch>
                <Route path="/hello" component={Hello} />
            </Switch>
            </Router> */}
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Swapnil Sharma</Navbar.Brand>
    <Nav className="ml-auto">
    
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>
  
 
        </div>
        );
    }
    }

export default Routes;
