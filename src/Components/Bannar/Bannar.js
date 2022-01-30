import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Bannar.css'

const Bannar = () => {
    return (
      <div>
        <div className="carousel-height">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/PTDhqqS/cover-ehealth.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="text-danger fw-bold">We privide service</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/vDL4twH/innovators-medicine-science.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/TTssMKD/leaving-canada-for-medical-care-2017-1.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 className="text-danger">Emergency</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
};

export default Bannar;