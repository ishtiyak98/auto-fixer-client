import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  console.log(service);

  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <Card style={{ width: "40rem" }} className="shadow">
          <Card.Img variant="top" src={service.img} />
          <Card.Body>
            <Card.Title>{service.name}</Card.Title>
            <Card.Text className="text-secondary">{service.description}</Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <Button variant="primary" className="">
                Checkout
              </Button>
              <p className="mb-0 fw-bold fs-5 text-dark">${service.price}</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ServiceDetails;
