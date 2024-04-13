import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import tdgImage from "../assets/Movie/tdg.jpg";
import tdImage from "../assets/Movie/td.jpg";
import hayataImage from "../assets/Movie/hayata.jpg";
import orbImage from "../assets/Movie/orb.jpg";
import usaImage from "../assets/Movie/usa.jpg";
import sagaImage from "../assets/Movie/saga.jpg";
import newImage from "../assets/Movie/new.jpg";
import brotherImage from "../assets/Movie/brother.jpg";
import absoluteImage from "../assets/Movie/absolute.jpg";


const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">ULTRAMAN BEST FILMS</h1>
        <br />
        <Row>
          <Col md={4}className="movieWrapper">
            <Card className="text-white movieImage p-2 m-2">
              <Image src={tdgImage} alt="td Movies" className="images"/>
              <div className="bg-dark p-4 m-3">
              <Card.Title className="text-center">Ultraman Tiga, Ultraman Dyna, & Ultraman Gaia</Card.Title>
              <Card.Text className="text-left">
              The Decisive.
              </Card.Text>
              <Card.Text className="text-center"></Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4}className="movieWrapper">
            <Card className="text-white movieImage p-2 m-2">
              <Image src={hayataImage} alt="td Movies" className="images"/>
              <div className="bg-dark p-4 m-3">
              <Card.Title className="text-center">Shin Hayata</Card.Title>
              <Card.Text className="text-left">
              Shin Hayata is a senior member and chief of the SSSP.
              </Card.Text>
              <Card.Text className="text-center"></Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage p-2 m-2">
              <Image src={tdImage} alt="tdg Movies" className="images"/>
              <div className="bg-dark p-4 m-3">
              <Card.Title className="text-center">Tiga and Dyna The Movie</Card.Title>
              <Card.Text className="text-left">
              Warriors Of The Planet Of Light</Card.Text>
              <Card.Text className="text-center"></Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage p-2 m-2">
              <Image src={orbImage} alt="orb Movies" className="images"/>
              <div className="bg-dark p-4 m-3">
              <Card.Title className="text-center">Orb The Movie</Card.Title>
              <Card.Text className="text-left">
              Let Me Borrow the Power of Bonds!.
              </Card.Text>
              <Card.Text className="text-center"></Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage p-2 m-2">
              <Image src={sagaImage} alt="saga Movies" className="images"/>
              <div className="bg-dark p-4 m-3">
              <Card.Title className="text-center">Ultraman Zero, Dyna and Cosmos</Card.Title>
              <Card.Text className="text-left">
              </Card.Text>
              <Card.Text className="text-center">Ultraman Saga The Movie.</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage p-2 m-2">
              <Image src={usaImage} alt="usa Movies" className="images"/>
              <div className="bg-dark p-4 m-3">
              <Card.Title className="text-center">Ultraman Scott, Chuck and Ultrawoman Beth</Card.Title>
              <Card.Text className="text-left">
              </Card.Text>
              <Card.Text className="text-center">Ultraman: The Adventure Begins</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage p-2 m-2">
              <Image src={newImage} alt="New Gen Movies" className="images"/>
              <div className="bg-dark p-4 m-3">
              <Card.Title className="text-center">All Ultraman New Generation</Card.Title>
              <Card.Text className="text-left">
              </Card.Text>
              <Card.Text className="text-center">Fight New GENERATION</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage p-2 m-2">
              <Image src={brotherImage} alt="New Gen Movies" className="images"/>
              <div className="bg-dark p-4 m-3">
              <Card.Title className="text-center">several Ultraman Kyodai and the Heisei trio</Card.Title>
              <Card.Text className="text-left">
              </Card.Text>
              <Card.Text className="text-center">Great Decisive Battle! The Super 8 Ultra Brothers</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage p-2 m-2">
              <Image src={absoluteImage} alt="New Gen Movies Absolutian" className="images"/>
              <div className="bg-dark p-4 m-3">
              <Card.Title className="text-center">All Ultra Universe</Card.Title>
              <Card.Text className="text-left">              </Card.Text>
              <Card.Text className="text-center">Ultra Galaxy Fight</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
