import React from "react"

//Pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/pages/Home";
import GlossaryPage from "./components/pages/Glossary";
import ToolPage from "./components/pages/Tools";
import BestPracticesPage from "./components/pages/BestPractices";
import AntipatternsPage from "./components/pages/Antipatterns";
//import ToolPage from "./components/pages/Tools";




export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/glossary" element={<GlossaryPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/tools" element={<ToolPage />} />
            <Route path="/bestpractices" element={<BestPracticesPage />} />
            <Route path="/antipatterns" element={<AntipatternsPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}


