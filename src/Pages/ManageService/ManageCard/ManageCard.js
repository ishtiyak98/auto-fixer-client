import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ManageCard = ({ service }) => {
  const navigate = useNavigate();
  const { img, name, description, price, _id } = service;

  const handleDelete = ()=> {
    const proceed = window.confirm("Are your sure?");

    if (proceed) {
      console.log("deleting... ", _id);
      
      fetch(`http://localhost:5000/deleteService/${_id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          Swal.fire({
              title: "Deleted",
              text: "Successfully Deleted",
              icon: "success",
          });
          navigate("/home");
       }
      })

    }
  }

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
                <button className="btn btn-primary me-2" onClick={()=>{navigate(`/updateService/${_id}`)}}>Edit</button>
                <button className="btn btn-danger me-2" onClick={handleDelete}>Delete</button>
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
