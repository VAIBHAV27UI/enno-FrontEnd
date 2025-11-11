import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import img1 from "./../../assets/images/team/team-1.jpg";
import img2 from "./../../assets/images/team/team-2.jpg";
import img3 from "./../../assets/images/team/team-3.jpg";

import classes from "./ProductsDetail.module.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductsDetails = () => {
  const { id } = useParams();

  const [newproductArr, setNewProductArr] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
        console.log(response.data);
        setNewProductArr(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const settings = {
    dots: false,
    autoplay: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Container>
        <Row xs={1} md={2} className="py-5">
          <Col>
            <div className={`${classes.imageArea}`}>
              <Slider {...settings} className={classes.navigation}>
              {
                newproductArr.images?.map((data,i) => {
                  return <img key={i} src={data} className="img-fluid" />
                })
              }
              </Slider>
            </div>
          </Col>
          <Col>
            <div className={classes.productDetails}>
              <span>{newproductArr.category}</span>
              <h2>{newproductArr.title}</h2>

              <div className={classes.rate}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>

              <p>$ {newproductArr.price}</p>
            </div>

            <div className={classes.productDescription}>
              <ul>
                <li>
                  Brand: <span>{newproductArr.brand}</span>
                </li>
                <li>
                  Warranty Information :{" "}
                  <span>{newproductArr.warrantyInformation}</span>
                </li>
                <li>
                  Shipping Information:{" "}
                  <span>{newproductArr.shippingInformation}</span>
                </li>
                <li>
                  Availability: <span>{newproductArr.stock}</span>
                </li>
              </ul>

              <Tabs
                defaultActiveKey="dsescription"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="dsescription" title="Description">
                  {newproductArr.description}
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                  {/* {
                    newproductArr.reviews.map((comment, i) => {
                      return <p key={i}>{comment}</p>
                    })
                  } */}
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductsDetails;
