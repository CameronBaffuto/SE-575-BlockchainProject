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
import LiverpoolLayout from './Liverpool';
import BayernLayout from './Bayern';
import BarcaLayout from './Barca';


class AppLayout extends Component {
    render() {
        return (
            <Router>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/LiveSports">One View Sports</Navbar.Brand>
                 <Nav className="mr-auto">
                <Nav.Link href="/LiveSports">Live Sports</Nav.Link>
                <Nav.Link href="/Liverpool">Liverpool</Nav.Link>
                <Nav.Link href="/Bayern">Bayern Munich</Nav.Link>
                <Nav.Link href="/Barca">Barcalona</Nav.Link>
                </Nav>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={LiveSportsLayout} />
                    <Route path="/LiveSports" component={LiveSportsLayout} />
                    <Route path="/Liverpool" component={LiverpoolLayout} />
                    <Route path="/Bayern" component={BayernLayout} />
                    <Route path="/Barca" component={BarcaLayout} />
                </Switch>
            </Router>
        );
    }
}

export default AppLayout;
