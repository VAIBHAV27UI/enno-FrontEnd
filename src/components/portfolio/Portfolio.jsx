import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container, Row, Col } from "react-bootstrap";
import { FiZoomIn } from "react-icons/fi";
import { BsLink45Deg } from "react-icons/bs";
import {initLightboxJS} from 'lightbox.js-react'


import HeadingDivider from "../global/HeadingDivider";
import classes from "./Portfolio.module.css";
import app1 from "../../assets/images/portfolio/app-1.jpg";
import app2 from "../../assets/images/portfolio/app-2.jpg";
import app3 from "../../assets/images/portfolio/app-3.jpg";

import books1 from "../../assets/images/portfolio/books-1.jpg";
import books2 from "../../assets/images/portfolio/books-2.jpg";
import books3 from "../../assets/images/portfolio/books-3.jpg";

import branding1 from "../../assets/images/portfolio/branding-1.jpg";
import branding2 from "../../assets/images/portfolio/branding-2.jpg";
import branding3 from "../../assets/images/portfolio/branding-3.jpg";

import product1 from "../../assets/images/portfolio/product-1.jpg";
import product2 from "../../assets/images/portfolio/product-2.jpg";
import product3 from "../../assets/images/portfolio/product-3.jpg";

const Portfolio = () => {
  const imgData = [
    {
      id: 1,
      tabName: "All",
      brand: [
        { src: app1, heading: "App - 1" },
        { src: app2, heading: "App - 2" },
        { src: app3, heading: "App - 3" },
        { src: product1, heading: "Product - 1" },
        { src: product2, heading: "Product - 2" },
        { src: product3, heading: "Product - 3" },
        { src: branding1, heading: "Branding - 1" },
        { src: branding2, heading: "Branding - 2" },
        { src: branding3, heading: "Branding - 3" },
        { src: books1, heading: "Books - 1" },
        { src: books2, heading: "Books - 2" },
        { src: books3, heading: "Books - 3" },
      ],
    },
    {
      id: 2,
      tabName: "APP",
      brand: [
        { src: app1, heading: "App - 1" },
        { src: app2, heading: "App - 2" },
        { src: app3, heading: "App - 3" },
      ],
    },
    {
      id: 3,
      tabName: "PRODUCT",
      brand: [
        { src: product1, heading: "Product - 1" },
        { src: product2, heading: "Product - 2" },
        { src: product3, heading: "Product - 3" },
      ],
    },
    {
      id: 4,
      tabName: "BRANDING",
      brand: [
        { src: branding1, heading: "Branding - 1" },
        { src: branding2, heading: "Branding - 2" },
        { src: branding3, heading: "Branding - 3" },
      ],
    },
    {
      id: 5,
      tabName: "BOOKS",
      brand: [
        { src: books1, heading: "Books - 1" },
        { src: books2, heading: "Books - 2" },
        { src: books3, heading: "Books - 3" },
      ],
    },
  ];

  

  return (
    <>
      <HeadingDivider
        heading="Portfolio"
        cloneHead="Portfolio"
        para="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <Container>
        <div className={classes.tabCustom}>
          <Tabs defaultActiveKey="0" id="justify-tab-example" className="mb-3">
            {imgData.map((image, i) => (
              <Tab eventKey={i} title={image.tabName} key={image.id}>
                <Row xs={1} md={2} lg={3} className="g-4">
                  {image.brand.map((imgD, i) => {
                    return (
                      <Col key={i} className={classes.imgMain}>
                        <img src={imgD.src} alt="" className="w-100" />
                        <div className={classes.overlay}>
                              <div className={classes.detailFirst}>
                                <h1>{imgD.heading}</h1>
                                <p>Lorem ipsum dolor sit amet.</p>
                              </div>
                              <div>
                                <a href="">
                                  <FiZoomIn />
                                </a>
                                <a href="">
                                  <BsLink45Deg />
                                </a>
                              </div>
                            </div>
                      </Col>
                    );
                  })}
                </Row>
              </Tab>
            ))}
          </Tabs>
        </div>
      </Container>
    </>
  );
};

export default Portfolio;
