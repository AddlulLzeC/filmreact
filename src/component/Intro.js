import { Col, Container, Row, Button } from "react-bootstrap";

const Intro = () => {
    return (
        <div className="intro">
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div className="title">Enjoy Your</div>
                        <div className="title">Film Here!!!</div>
                        <div className="introButton mt-4 text-center">
                            <Button variant="dark" href="https://21cineplex.com/">List Film</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro