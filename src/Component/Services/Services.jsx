import React from 'react';
import './Services.css';
import Services_Data from '../../assets/services_data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-format">
            <div className="service-font"> {typeof service.s_img === "object" && (
              <FontAwesomeIcon icon={service.s_img} size="2x" className='service-font-image'/>
            )}</div>
           
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
