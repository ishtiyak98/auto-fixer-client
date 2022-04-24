import React from "react";
import { Button, Card } from "react-bootstrap";

const ManageCard = ({ service }) => {
  const { img, name, description, price, _id } = service;
  return (
    <div className="col-md-6 col-lg-4">
      <div className="d-flex justify-content-center">
        <Card style={{ width: "18rem" }} className="shadow">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="text-secondary">{description}</Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <button className="btn btn-primary me-2">Edit</button>
                <button className="btn btn-danger me-2">Delete</button>
              </div>
              <p className="mb-0 fw-bold fs-5 text-dark">${price}</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ManageCard;
