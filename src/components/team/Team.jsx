import { Container, Row, Col } from "react-bootstrap";
import HeadingDivider from "../global/HeadingDivider";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa6";

import team1 from "./../../assets/images/team/team-1.jpg";
import team2 from "./../../assets/images/team/team-2.jpg";
import team3 from "./../../assets/images/team/team-3.jpg";

import classes from "./Team.module.css";

const Team = () => {
  const teamData = [
    {
      personImg: team1,
      personName: "Walter White",
      designation: "Chief Executive Officer",
      socislIcons: [
        <FaXTwitter />,
        <FaFacebook />,
        <RxInstagramLogo />,
        <FaLinkedin />,
      ],
    },
    {
      personImg: team2,
      personName: "Sarah Jhonson",
      designation: "Product Manager",
      socislIcons: [
        <FaXTwitter />,
        <FaFacebook />,
        <RxInstagramLogo />,
        <FaLinkedin />,
      ],
    },
    {
      personImg: team3,
      personName: "William Anderson",
      designation: "CTO",
      socislIcons: [
        <FaXTwitter />,
        <FaFacebook />,
        <RxInstagramLogo />,
        <FaLinkedin />,
      ],
    },
  ];

  return (
    <>
      <HeadingDivider
        cloneHead="Team"
        heading="team"
        para="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

      <Container>
        <Row xs={1} md={2} lg={3}>
          {teamData.map((data, i) => {
            return (
              <Col key={i} className={classes.team}>
                <div className={classes.member}>
                  <div className={classes.pic}>
                    <img src={data.personImg} alt="" className="img-fluid" />
                  </div>
                  <div className={classes.memberInfo}>
                    <h4>{data.personName}</h4>
                    <span>{data.designation}</span>
                    <div key={i} className={classes.social}>
                      <a href="">{data.socislIcons}</a>
                    </div>
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

export default Team;
