import React from "react";
import {
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "./BannarCard.css";

const BannarCard = () => {
  return (
    <div className="container mt-5 border border-warning">
      <div className="row bannarCard">
        <div className=" d-flex justify-content-center align-items-center text-center ">
          <div className="col-md-4">
            <h2 className="text-warning">Find a Doctor</h2>
            <div className="px-4">
              <InputGroup className="mb-3">
                <DropdownButton
                  variant="outline-secondary"
                  title="Doctors"
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#">alick</Dropdown.Item>
                  <Dropdown.Item href="#">joe</Dropdown.Item>
                  <Dropdown.Item href="#">koddos</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">shamim</Dropdown.Item>
                </DropdownButton>
                <FormControl aria-label="Text input with dropdown button" />
              </InputGroup>{" "}
            </div>
          </div>
          <div className="col-md-4">
            <h2 className="text-primary">Find a Location</h2>
            <div className="px-4">
              <InputGroup className="mb-3">
                <DropdownButton
                  variant="outline-secondary"
                  title="Location"
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#">Gazipur</Dropdown.Item>
                  <Dropdown.Item href="#">Rongpur</Dropdown.Item>
                  <Dropdown.Item href="#">Borisal</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Pabna</Dropdown.Item>
                </DropdownButton>
                <FormControl aria-label="Text input with dropdown button" />
              </InputGroup>{" "}
            </div>
          </div>
          <div className="col-md-4">
            <h2 className="text-danger">Find a Service</h2>
            <div className="px-4">
              <InputGroup className="mb-3">
                <DropdownButton
                  variant="outline-secondary"
                  title="Services"
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#">Medical cit</Dropdown.Item>
                  <Dropdown.Item href="#">Ambulance</Dropdown.Item>
                  <Dropdown.Item href="#">Child Care</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Mother Care</Dropdown.Item>
                </DropdownButton>
                <FormControl aria-label="Text input with dropdown button" />
              </InputGroup>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannarCard;
