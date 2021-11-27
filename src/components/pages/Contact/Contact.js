import {
  faMapMarkedAlt,
  faPhone,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ContactInfo from "../../ContactInfo/ContactInfo";

const Contact = () => {
  return (
    <div className="my-3 mb-5 container d-flex justify-content-center">
      <Container>
        <h1 className="mb-5">Contact</h1>
        <Row>
          <Col className="text-start">
            <h4>Send a Message</h4>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Your massage"
                />
              </Form.Group>

              <Button className="custom-btn" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col className="ms-5">
            <h4 className="text-start ms-5">Contact Info</h4>

            <ContactInfo
              item1="Phone: +780 123 452"
              item2="Mail: contact@eduskill.com"
              icon={faPhone}
            >
              Contact Details
            </ContactInfo>
            <ContactInfo
              item1="PO Box 97845 Baker st. 567"
              item2="Los Angeles, California, US."
              icon={faMapMarkedAlt}
            >
              Location
            </ContactInfo>
            <ContactInfo
              item1="Monday-Friday"
              item2="10:30am-7:00pm"
              icon={faUserClock}
            >
              Opening Hours
            </ContactInfo>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
