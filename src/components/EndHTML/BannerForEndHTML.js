import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/bannerforendhtml.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const BannerForEndHTNL = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <div>
                <h1>HTML!</h1>
                <p style={{ color: "black", backgroundColor: "white" }}>
                  В данному блоці ми розглянемо HTML більш глибше та подивимось
                  більше прикладів використання HTML
                </p>
              </div>
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
