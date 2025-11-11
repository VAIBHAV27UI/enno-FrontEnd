import { Col, Container, Row } from "react-bootstrap"
import { useGSAP } from '@gsap/react';
import { LuActivity } from "react-icons/lu";
import { PiBoundingBox } from "react-icons/pi";
import { BsCalendar3Week } from "react-icons/bs";
import gsap from 'gsap';
import Button1 from "../global/Button1"
import heroImg from "./../../assets/images/hero-img.png"
import classes from "./../hero/Hero.module.css"
import WatchBtn from "../global/WatchBtn";
import CardDetails from "./CardDetails";

const Hero = () => {

    useGSAP(() => {
        gsap.to('.animate', {
            y:30,
            duration:2,
            delay:1,
            repeat:-1,
            yoyo:true
        })
    })

    const cardData = [
        {
            icon : <LuActivity />,
            heading: "Lorem Ipsum",
            description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
        },
        {
            icon : <PiBoundingBox />,          
            heading: "Sed ut perspici",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
        },
        {
            icon : <BsCalendar3Week />,
            heading: "Magni Dolores",
            description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"
        }
    ]

    
    
    
    return(
        <>
        <Container>
            <Row xs={1} md={2} className="my-5">
                <Col className="d-flex align-items-center">
                <div className={classes.heroContent}>
                    <h1>Elegant and creative solutions</h1>
                    <p>We are team of talented designers making websites with Bootstrap</p>
                    <Button1 style={{marginRight: "20px", padding:"10px 28px 12px"}}/>
                    <WatchBtn/>
                </div>
                </Col>
                <Col>
                <div>
                    <img src={heroImg} className="w-100 animate" />
                </div>
                </Col>
                
            </Row>
            <Row className="my-5 g-3" xs={1} md={2} lg={3} >
            
            
            {
                cardData.map((data, i) => 
                    <Col key={i}>
                    <CardDetails icon={data.icon} heading={data.heading} description={data.description}/>
                    </Col>)
            }


            </Row>
        </Container>        
        </>
    )
}

export default Hero