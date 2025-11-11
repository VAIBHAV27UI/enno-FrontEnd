import { Container, Row, Col } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa6";

import classes from "./Footer.module.css";

const Footer = () => {
  const footerLinks = [
    { link: "Home" },
    { link: "About Us" },
    { link: "Services" },
    { link: "Terms of service" },
  ];

  const serviceLink = [
    { link: "Web Design" },
    { link: "Web Development" },
    { link: "Product Management" },
    { link: "Marketing" },
  ];

  const socialIcons = [
    { icon: <FaXTwitter />, link: "https://x.com/?lang=en" },
    { icon: <FaFacebook />, link: "https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" },
    { icon: <RxInstagramLogo />, link: "https://www.instagram.com/accounts/login/?hl=en" },
    { icon: <FaLinkedin />, link: "https://in.linkedin.com/" },
  ];

  return (
    <>
      <section className={`bg-white mt-5 ${classes.footer}`}>
        <Container>
          <Row xs={1} md={2} lg={4} className="py-4">
            <Col>
              <div className={classes.addSection}>
                <h1>eNno</h1>
                <p>A108 Adam Street New York, NY 535022</p>
                <p className="mt-3">
                  <span>Phone:</span> +1 5589 55488 55
                </p>
                <p>
                  <span>Email:</span> info@example.com
                </p>
              </div>
            </Col>
            <Col>
              <div className={classes.footerLinks}>
                <h4>Useful Links</h4>
                <ul className="p-0">
                  {footerLinks.map((footerMenu, i) => {
                    return (
                      <li key={i}>
                        {<MdKeyboardArrowRight />}
                        <a href="#">{footerMenu.link}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col>
            <Col>
              <div className={classes.footerLinks}>
                <h4>Our Services</h4>
                <ul className="p-0">
                  {serviceLink.map((serviceLink, i) => {
                    return (
                      <li key={i}>
                        {<MdKeyboardArrowRight />}
                        <a href="#" target='_blank'>{serviceLink.link}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col>
            <Col>
              <div className={classes.social}>
                <h4>Follow Us</h4>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra videa
                  magna derita valies
                </p>
                <div className={`d-flex ${classes.icon}`}>
                    {
                        socialIcons.map((data, i) => {
                            return <a key={i} href={data.link}>{data.icon}</a>
                        })
                    }
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="border-top border-secondary pt-3">
            <div className={`text-center ${classes.copyRight}`}>
                <p>© <span>Copyright</span> <strong className="px-1 sitename">eNno</strong> <span>All Rights Reserved</span></p>
                <p className="mb-0">Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a></p>   
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
