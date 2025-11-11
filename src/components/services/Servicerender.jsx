import { Container, Row, Col } from "react-bootstrap"
import { TbActivity } from "react-icons/tb";
import { PiBroadcast } from "react-icons/pi";
import { IoEaselOutline } from "react-icons/io5";
import { PiBoundingBox } from "react-icons/pi";
import { BsCalendar3Week } from "react-icons/bs";
import { BsChatSquareText } from "react-icons/bs";

import Service from "./Service"
import HeadingDivider from "../global/HeadingDivider"
import classes from './Servicerender.module.css'


const Servicerender = () => {

    const serviceData = [
        {
            icon:<TbActivity />,
            heading: "Nesciunt Mete",
            para:"Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur."
        },
        {
            icon:<PiBroadcast />,
            heading: "Eosle Commodi",
            para:"Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem."
        },
        {
            icon:<IoEaselOutline />,
            heading: "Ledo Markt",
            para:"Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti."
        },
        {
            icon:<PiBoundingBox />,
            heading: "Asperiores Commodit",
            para:"Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque."
        },
        {
            icon:<BsCalendar3Week />,
            heading: "Velit Doloremque",
            para:"Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore."
        },
        {
            icon:<BsChatSquareText />,
            heading: "Dolori Architecto",
            para:"Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim."
        }

    ]
    return (
        <>
        <section className={classes.bgService}>
        <Container>

            <HeadingDivider
        cloneHead="Services"
        heading="Services"
        para="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

        <Row className="gy-4" xs={1} md={2} lg={3}>

              {
                serviceData.map((data,i) => 
                <Col key={i}>
                    <Service icon={data.icon} heading={data.heading} para={data.para} />
                </Col>)
              }  

            </Row>
        </Container>
        </section>
        </>
    )
}

export default Servicerender