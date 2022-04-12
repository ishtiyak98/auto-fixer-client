import React from "react";
import { Button, Card } from "react-bootstrap";

const OurExpert = ({ expert }) => {
  const { name, img } = expert;
  console.log(expert);
  return (
    <div className="col-md-6 col-lg-4">
      <div className="d-flex justify-content-center">
        <Card style={{ width: "18rem" }} className="shadow">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="text-center">{name}</Card.Title>
            <Card.Text className="text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="text-center">
              <Button variant="primary">Visit Profile</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default OurExpert;
