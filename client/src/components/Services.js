import React from 'react';

const Services = () => {
  return (
    <div className="services-section" id="services">
      <div className="container">
        <h2 className="text-center mb-4">Services</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="service-box">
              <h3>Seminars and Keynotes</h3>
              <p>Delivering impactful speeches to inspire action.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <h3>1-on-1 Coaching</h3>
              <p>Personalized sessions to help you achieve your goals.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <h3>Life Plans</h3>
              <p>Comprehensive plans to lead your best life.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;