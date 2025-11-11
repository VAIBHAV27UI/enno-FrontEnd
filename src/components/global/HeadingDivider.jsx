import { Col, Container, Row } from "react-bootstrap"
import classes from './HeadingDivider.module.css'

const HeadingDivider = ({heading, para, cloneHead}) => {
    return (
        <>
        <Container>
            <Row>
                <Col className="m-5">
                <div className={classes.dividerMain}>
                    <h1>{heading ? heading : "Heading Here"}</h1>
                    <span>{cloneHead ? cloneHead : "Heading Copy"}</span>
                    <p>{para ? para : "Paragraph Here"}</p>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default HeadingDivider