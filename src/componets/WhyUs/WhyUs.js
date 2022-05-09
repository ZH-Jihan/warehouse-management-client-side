import React, { useEffect, useState } from "react";
import WhyUsDetails from "../WhyUsDetails/WhyUsDetails";

const WhyUs = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://secret-coast-30912.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div style={{ margin: "70px 0" }}>
      <h4 className="common-color heading">Why us</h4>
      <div className="container">
        <div className="row g-2 mt-3">
          {services.map((service) => (
            <WhyUsDetails key={service._id} service={service}></WhyUsDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
