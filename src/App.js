import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index/Index";
import Cv from "./pages/Cv/Cv";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/cv" element={<Cv/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
