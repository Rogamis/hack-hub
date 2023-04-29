import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/bannerhtml.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const BannerForStartHTML = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <div>
                <h1>HTML!</h1>
                <p style={{ color: "black", backgroundColor: "white" }}>
                  HTML (Hypertext Markup Language) - це стандартна мова розмітки
                  для створення веб-сторінок. HTML дозволяє створювати структуру
                  веб-сторінки та визначати, як вона буде відображатись у
                  браузері.
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
