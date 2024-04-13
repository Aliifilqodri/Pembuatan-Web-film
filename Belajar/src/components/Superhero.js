import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import tdgImage from "../assets/supher/tdg.webp";
import tdImage from "../assets/Movie/td.jpg";
import hayataImage from "../assets/Movie/hayata.jpg";
import orbImage from "../assets/Movie/orb.jpg";
import usaImage from "../assets/Movie/usa.jpg";
import sagaImage from "../assets/Movie/saga.jpg";
import newImage from "../assets/Movie/new.jpg";
import brotherImage from "../assets/Movie/brother.jpg";
import absoluteImage from "../assets/Movie/absolute.jpg";


const SuperHero = () => {
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
              <Card.Title className="text-center">Tiga, Dyna and Gaia</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4}className="movieWrapper">
            <Card className="text-white movieImage p-2 m-2">
              <Image src={hayataImage} alt="td Movies" className="images"/>
              <div className="bg-dark p-4 m-3">
              <Card.Title className="text-center">Hayata</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage p-2 m-2">
              <Image src={tdImage} alt="tdg Movies" className="images"/>
              <div className="bg-dark p-4 m-3">
              <Card.Title className="text-center">Tiga and Dyna</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage p-2 m-2">
              <Image src={orbImage} alt="orb Movies" className="images"/>
              <div className="bg-dark p-4 m-3">
              <Card.Title className="text-center">Orb</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage p-2 m-2">
              <Image src={sagaImage} alt="saga Movies" className="images"/>
              <div className="bg-dark p-4 m-3">
              <Card.Title className="text-center">Saga</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage p-2 m-2">
              <Image src={usaImage} alt="usa Movies" className="images"/>
              <div className="bg-dark p-4 m-3">
              <Card.Title className="text-center">Usa</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage p-2 m-2">
              <Image src={newImage} alt="New Gen Movies" className="images"/>
              <div className="bg-dark p-4 m-3">
              <Card.Title className="text-center">New Generation</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage p-2 m-2">
              <Image src={brotherImage} alt="New Gen Movies" className="images"/>
              <div className="bg-dark p-4 m-3">
              <Card.Title className="text-center">Ultra Brother</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage p-2 m-2">
              <Image src={absoluteImage} alt="New Gen Movies Absolutian" className="images"/>
              <div className="bg-dark p-4 m-3">
              <Card.Title className="text-center">Absolutian</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SuperHero;
