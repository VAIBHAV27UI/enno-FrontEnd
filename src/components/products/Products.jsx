import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import HeadingDivider from "../global/HeadingDivider";
import classes from "./Products.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [productArr, setProductArr] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        console.log(response.data.products);
        setProductArr(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <HeadingDivider
        cloneHead="products"
        heading="products"
        para="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {productArr.map((data) => {
            return (
              <Col key={data.id}>
                <div className={classes.top}>
                  <img src={data.thumbnail} alt="" className="w-100" />
                  <div className={classes.content}>
                    <h3>{data.title}</h3>
                    <p className={`text-truncate`}>{data.description}</p>
                    <Link className="text-decoration-none " to={`/product/${data.id}`}>
                      <button className="btn btn-outline-info d-block ms-auto streched-link">
                        OPEN
                      </button>
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Products;
