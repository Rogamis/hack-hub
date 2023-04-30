import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import porjImg4 from "../../assets/img/project-img4.png";
import porjImg5 from "../../assets/img/project-img5.png";
import projImg6 from "../../assets/img/project-img6.png";
import projImg7 from "../../assets/img/project-img7.png";
import isaacSticker from "../../assets/img/isaac.webm";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from "react-router";

export const Projects = () => {

  const navigateToStartIt = useNavigate();
    function toStartIt() {
      navigateToStartIt("/startIT");
    }

    const navigateToStartHTML = useNavigate();
    function toStartHTML() {
      navigateToStartHTML("/starthtml");
    }

  const projects = [
    {
      title: <button onClick={toStartIt}>Початок в ІТ</button>,
      imgUrl: projImg1,
      description: <button onClick={toStartIt}>Тут написані бизові моменти в ІТ та як воно функціонує. Перед початком вивчення самого ІТ, варто прочитати</button>,
    },
    {
      title: <button onClick={toStartHTML}>HTML</button>,
      description: "Починаємо верстати наш HTML проект",
      imgUrl: projImg2,
      description: <button onClick={toStartHTML}>Познайомимось з HTML</button>,
    },
    {
      title: "HTML як він є",
      description: "Закінчуємо HTML та переходимо до іншого блоку",
      imgUrl: projImg3,
    },
    {
      title: "CSS",
      description: "Познайомимось з CSS",
      imgUrl: porjImg4,
    },
    {
      title: "Почнемо поєднувати HTML та CSS",
      description: "Верстаємо сайт",
      imgUrl: porjImg5,
    },
    {
      title: "Закінчимо робити верстку нашого сайту",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      title: "JavaScript початок",
      description: "Знайомство",
      imgUrl: projImg7,
    },
    {
      title: "JavaScript",
      description: "Частина 2",
      imgUrl: projImg7,
    },
    {
      title: "JavaScript",
      description: "Чистина 3",
      imgUrl: projImg7,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Проекти</h2>
                <p>Тут наведені деякі проекти які ми з вами будемо робити для подальшого вашого портфоліо та резюме</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">HTML, CSS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">React, NodeJS</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                      <Nav.Link eventKey="third">WordPress</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Працюємо над цим</p>
                      <video src={isaacSticker} width="300" height="220" autoPlay muted loop></video>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Працюємо над цим</p>
                      <video src={isaacSticker} width="300" height="220" autoPlay muted loop></video>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
