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
                <p style={{ color: "black", backgroundColor: "white" }}>
                  ІТ-індустрія - це досить широке поняття, оскільки включає в
                  себе різноманітні технології, продукти та послуги, які
                  допомагають людям вирішувати різні завдання, бізнес задачі та
                  багато-багато чого ще різного.
                </p>
                <p style={{ color: "black", backgroundColor: "white" }}>
                  Сьогодні перед тим, як одразу сідати за навчання давай
                  зрозуміємо як воно функціонує, яке буває, та що найкраще
                  підходить саме тобі!
                </p>
                <strong style={{ color: "black", backgroundColor: "white" }}>
                  Але пам'ятай! Тут далеко не вся інформація як працює ІТ, ця
                  статья підходить більше тим, хто тільки знайомиться з ІТ і
                  допоможе трошки більше орієнтуватись в термінах
                </strong>
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
