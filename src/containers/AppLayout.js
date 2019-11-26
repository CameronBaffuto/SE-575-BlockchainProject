import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import LiveSportsLayout from './LiveSports';
import CheckoutLayout from './Checkout';

class AppLayout extends Component {
    render() {
        return (
            <Router>
                <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/LiveSports">One View Sports</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/LiveSports">Live Sports</Nav.Link>
      <Nav.Link href="/Checkout">Checkout</Nav.Link>
    </Nav>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={LiveSportsLayout} />
                    <Route path="/LiveSports" component={LiveSportsLayout} />
                    <Route path="/Checkout" component={CheckoutLayout} />
                </Switch>
            </Router>
        );
    }
}

export default AppLayout;