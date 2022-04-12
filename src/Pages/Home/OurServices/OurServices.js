import React, { useEffect, useState } from "react";
import OurService from "../OurService/OurService";

const OurServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);

  return (
    <div className="container my-5 py-4">
      <h1 className="text-center text-primary my-4">Our Services</h1>
      <div className="row gy-5 gx-4">
        {services.map((service) => (
          <OurService key={service.id} service={service}></OurService>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
