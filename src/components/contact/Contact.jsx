import { Col, Container, Row } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import Form from "react-bootstrap/Form";

import HeadingDivider from "../global/HeadingDivider";
import classes from "./Contact.module.css";
import Button1 from "../global/Button1";

const Contact = () => {
  const contactData = [
    {
      icon: <IoLocationOutline />,
      heading: "Address",
      details: "A108 Adam Street, New York, NY 535022",
    },
    {
      icon: <IoCallOutline />,
      heading: "Call Us",
      details: "+1 5589 55488 55",
    },
    {
      icon: <TfiEmail />,
      heading: "Email Us",
      details: "info@example.com",
    },
  ];
  return (
    <>
      <HeadingDivider
        cloneHead="contact"
        heading="contact"
        para="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

      <Container>
        <Row xs={1} md={2} className="gy-5">
          <Col lg={5}>
            <div className={classes.infoWrap}>
              {contactData.map((data) => {
                return (
                  <div className={`d-flex py-4`}>
                    <div className={classes.icon}>{data.icon}</div>
                    <div className={classes.contactInfo}>
                      <h2>{data.heading}</h2>
                      <p>{data.details}</p>
                    </div>
                  </div>
                );
              })}
              <div>
                <iframe
                  className="w-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.2204741103633!2d72.85227309999999!3d19.2292208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d42c95bdf9%3A0x5a3374a957943f4b!2sTryCatch%20Classes%20%7C%20Full%20Stack%20Course%20%7C%20Mobile%20App%20%7C%20Data%20Analytics%20%7C%20Software%20Testing%20%7C%20Digital%20Marketing%20%7C%20Ux-UI!5e0!3m2!1sen!2sin!4v1742889858440!5m2!1sen!2sin"
                  style={{
                    height: "220px"
                  }}
                ></iframe>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className={classes.infoWrap}>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="10" />
                  </Form.Group>
                </Row>

                <Row className="text-center">
                  <Button1
                    text="Send message"
                    style={{ marginRight: "20px", padding: "10px 28px 12px" }}
                  />
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
