import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index/Index";
import Cv from "./pages/Cv/Cv";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Projets from "./pages/Projets/Projets";
import ProjectsList from "./pages/Test/Test";
import ProjetRoutes from "./pages/Projets/ProjetsRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/cv" element={<Cv/>}/>
          <Route path="/projets" element={<Projets/>}/>
          <Route path="/test" element={<ProjectsList/>}/>
          <Route path="/projets/*" element={<ProjetRoutes />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
