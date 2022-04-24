import React, { useEffect, useState } from "react";
import OurService from "../Home/OurService/OurService";
import ManageCard from "./ManageCard/ManageCard";

const MangeService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container my-5 py-4" id="services">
      <div className="row gy-5 gx-4">
        {services.map((service) => (
          <ManageCard key={service._id} service={service}></ManageCard>
        ))}
      </div>
    </div>
  );
};

export default MangeService;
