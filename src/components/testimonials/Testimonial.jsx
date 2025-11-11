import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testiImg1 from "./../../assets/images/testimonial-img/testimonials-1.jpg";
import testiImg2 from "./../../assets/images/testimonial-img/testimonials-2.jpg";
import testiImg3 from "./../../assets/images/testimonial-img/testimonials-3.jpg";
import testiImg4 from "./../../assets/images/testimonial-img/testimonials-4.jpg";
import testiImg5 from "./../../assets/images/testimonial-img/testimonials-5.jpg";

import classes from "./Testimonial.module.css";
import HeadingDivider from "../global/HeadingDivider";

const Testimonial = () => {
  const testimonialData = [
    {
      description: `"I’ve been using this service for months now, and it’s been a game changer for my business. The team is incredibly responsive and always goes above and beyond to meet our needs. Highly recommend!"`,
      image: testiImg1,
      name: "Saul Goodman",
      designation: "Ceo & Founder",
    },
    {
      description: `"I was skeptical at first, but after seeing the results, I’m a firm believer! The product is top-notch, and the customer service is second to none. I couldn’t be happier with my experience."`,
      image: testiImg2,
      name: "Sara Wilsson",
      designation: "Designer",
    },
    {
      description:
        "This has been one of the best investments I’ve made. The platform is user-friendly, and the support team is always there when you need them. I feel confident knowing I’m in good hands.",
      image: testiImg3,
      name: "Jena Karlis",
      designation: "Store Owner",
    },
    {
      description: `"Amazing experience! The service exceeded my expectations, and the team has been incredibly helpful every step of the way. I’m already recommending it to all of my colleagues!"`,
      image: testiImg4,
      name: "Matt Brandon",
      designation: "Freelancer",
    },
    {
      description: `"I’ve tried several similar services before, but this one stands out. The quality, the attention to detail, and the speed of delivery are unmatched. I couldn’t ask for more!"`,
      image: testiImg5,
      name: "John Larson",
      designation: "Entrepreneur",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        <HeadingDivider
          cloneHead="testimonial"
          heading="testimonial"
          para="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />

        <Row>
          <div className="slider-container">
            <Slider {...settings}>
              {testimonialData.map((testiData, i) => {
                return (
                  <Col key={i}>
                    <div className={`${classes.testimonialCard}`}>
                      <p>
                        <span>{testiData.description}</span>
                      </p>
                      <img src={testiData.image} />
                      <h3>{testiData.name}</h3>
                      <h4>{testiData.designation}</h4>
                    </div>
                  </Col>
                );
              })}
            </Slider>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Testimonial;
