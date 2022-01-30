import React, { useEffect, useState } from 'react';
import './Service.css'

const Service = () => {
    const [service, setService] =useState([])
    useEffect(() => {
        const url = "./service.json";
        console.log(url);
        fetch(url)
          .then((res) => res.json())
          .then((data) => console.log(data));

    },[]);
    return (
      <div className="">
        <div className="container mt-5 ">
          <div className="row service">
            <div className="col-md-4">
              <h2 className="fs-1 mt-5">We Offer</h2>
              <h1 className="fw-bold">Medical Services</h1>
              <p className="mt-4">
                We specialize in a wide array of medical fields and have some of
                the best facilities.
              </p>
              <h4 className="mt-2">EMERGENCY CALL:</h4>
              <h3 className="text-warning">1-800-373-5678</h3>
            </div>
            <div className="col-md-8">

            </div>
          </div>
        </div>
      </div>
    );
};

export default Service;