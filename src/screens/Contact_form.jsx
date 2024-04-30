import React from "react";
import Section_name from "../components/Section_name";
import Section_heading from "../components/Section_heading";
import Description from "../components/Description";
import Skill_card from "../components/Skill_card";
import { FaHtml5 } from "react-icons/fa";
import Secondary_button from "../components/Secondary_button";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Primary_button from '../components/Primary_button'
function Contact_form() {
  return (
    <>
    <section className="py-section contact" id="contact">
      <div className="container services py-section">
        <Section_name
          name="Contact"
          style={{ transform: "rotate(-15deg)", padding: "0" }}
        />
        <Section_heading
          name="Let's Discuss Project"
          style={{ fontSize: "50px", marginBottom: "3rem" }}
        />
        <Form className="col-12 p-4 border">

        <div className="contactformheading mt-3">
        <Section_heading
          name="Get in touch"
          style={{ fontSize: "30px", margin: "0" }}
        />
        </div>

        <Description text="Our friendly team would love to hear from you." />

          <Row className="mb-3 mt-4">
            <Form.Group as={Col} controlId="formGridfname">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridlname">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridtextarea">
          <Form.Label>Message</Form.Label>
          
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </Form.Group>
          </Row>

          <Primary_button text='Send Message'/>
          {/* <Secondary_button text='Send Message'/> */}
        </Form>

      </div>
    </section>
    </>
  );
}

export default Contact_form;
