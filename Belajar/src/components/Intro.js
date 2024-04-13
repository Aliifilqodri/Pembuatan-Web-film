import { Col, Container, Row, Button } from "react-bootstrap"

const Intro = () => {
    return (
        <div className="Intro"> 
        <Container className="text-white d-flex text-center justify-content-center align-items-center">
          <Row>
            <Col>
            <div className="tittle">NONTON ULTRAMAN</div>
            <div className="tittle">Nostalgia Bareng</div>
            <div className="introButton mt-4 text-center">
                <Button variant="dark">Lihat Semua Film</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro