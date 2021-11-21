import { Component } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import img from "../assets/furniture-998265_1920.jpg";

class HotelCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.hotelName,
      address: props.hotelAddress,
      houseNum: props.houseNum,
      number: props.number,
    };
  }
  render() {
    return (
      <div className="h-1/2">
        <Link to={`/hotel/${this.state.name}`}>
          <Card
            className="w-auto"
            onClick={() => this.props.clicked(this.state)}
          >
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{this.state.name}</Card.Title>
              <Card.Text>
                <p> {this.state.address}</p>
                <p> {this.state.houseNum}</p>
                <p> {this.state.number}</p>
              </Card.Text>
              <Button variant="primary">Contact us</Button>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  }
}
export default HotelCard;
