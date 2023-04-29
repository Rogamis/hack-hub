import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/startIT.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const BannerForStartIT = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <div>
                <h1>Вітаю!</h1>
                <p>
                  ІТ-індустрія - це досить широке поняття, оскільки включає в
                  себе різноманітні технології, продукти та послуги, які
                  допомагають людям вирішувати різні завдання, бізнес задачі та
                  багато-багато чого ще різного.
                </p>
                <p>
                  Сьогодні перед тим, як одразу сідати за навчання давай зрозуміємо як воно функціонує, яке буває, та що найкраще підходить саме тобі!
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
