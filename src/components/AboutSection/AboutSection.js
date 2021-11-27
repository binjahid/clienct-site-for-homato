import React from "react";
import { Col, Row } from "react-bootstrap";

const AboutSection = (props) => {
  const customStyle = `align-items-center mb-5 ${props?.display}`;
  return (
    <div>
      <Row className={customStyle}>
        <Col className="text-start">
          <h1 className="custom-color">{props.children}</h1>
          As a committed team, we work in Berlin-Mitte. We deliver the whole
          spectrum of skin and venereal diseases, deliver your product safely to
          your customers accomadation, and provide best service you could get
          ever . An additional focus of our delivery system we have achieved a
          mielstone in our sucess, we deliver pizza , burgar and more
        </Col>
        <Col>
          <img className="img-fluid" src={props.img} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default AboutSection;
