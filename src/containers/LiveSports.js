import React, { Component } from 'react';
import Card from "react-bootstrap/Card";

import './LiveSports.css';



export default class LiveSportsLayout extends Component {
    render() {
        return (
       <container id="cardContainer">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Preimer League</Card.Title>
    <Card.Text>
      Watch the Merseyside Derby live! Liverpool vs Everton, the longest running top flight derby in England since 1962.
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="./Checkout">Watch Live</Card.Link>
  </Card.Body>
            </Card>

        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Bundesliga</Card.Title>
    <Card.Text>
      Watch defending Bundesliga champions Bayern Munich take on Borussia Dortmund in Der Klassiker!
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="./Checkout">Watch Live</Card.Link>
  </Card.Body>
        </Card>

          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>La Liga</Card.Title>
    <Card.Text>
      Barcelona takes on Real Madrid at the Santiago Bernabeu in this years exciting installment of El Clasico!
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="./Checkout">Watch Live</Card.Link>
  </Card.Body>
          </Card>
       </container>
        );
    }
}
