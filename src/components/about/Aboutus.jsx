import { Container, Row, Col } from "react-bootstrap";
import { BsCheck2All } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import HeadingDivider from "../global/HeadingDivider";
import aboutImg from "../../assets/images/about.png";
import classes from "./Aboutus.module.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Aboutus = () => {
  const [show, setShow] = useState(false);

  const stateData = [
    { num: "232", head: "Clients" },
    { num: "521", head: "Projects" },
    { num: "1453", head: "Hours Of Support" },
    { num: "32", head: "Workers" },
  ];

  return (
    <>
      <HeadingDivider
        cloneHead="ABOUT US"
        heading="ABOUT"
        para="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

      <Container>
        <Row xs={1} md={2}>
          <Col>
            <div className={classes.videoPlaymain}>
              <img src={aboutImg} alt="" className="w-100" />
              <button onClick={() => setShow(true)}>
                <FaPlayCircle />
              </button>

              <Modal
                show={show}
                onHide={() => setShow(false)}
                // dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                className="widthModal"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Custom Modal Styling
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <iframe
                    width="100%"
                    height="350px"
                    src="https://www.youtube.com/embed/Y7f98aduVJ8?si=3oPH13MLo78aV9hV"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </Modal.Body>
              </Modal>
            </div>
          </Col>
          <Col>
            <div className={classes.aboutMainContent}>
              <h1>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h1>
              <p className={classes.italicFont}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <BsCheck2All />
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
                <li>
                  <BsCheck2All />
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </span>
                </li>
                <li>
                  <BsCheck2All />
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate trideta
                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                  </span>
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
              </p>
            </div>
          </Col>
        </Row>

        <Row xs={1} sm={2} md={2} lg={4} className="py-4">
          {stateData.map((data) => {
            return (
              <Col>
                <div className={classes.stats}>
                  <span>{data.num}</span>
                  <p>{data.head}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Aboutus;
