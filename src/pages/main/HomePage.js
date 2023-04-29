import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../../components/Home/NavBar";
import { Banner } from "../../components/Home/Banner";
import { Projects } from "../../components/Home/Projects";
import { Contact } from "../../components/Home/Contact";

function HomePage() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Contact />
    </div>
  );
}

export default HomePage;
