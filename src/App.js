import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/main/HomePage";
import StartIT from "./pages/studyPage/StartIT";
import { NavBar } from "./components/Home/NavBar";
import { Footer } from "./components/Home/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="startIT" element={<StartIT />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
