import React from "react"

//Pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/pages/Home";
import GlossaryPage from "./components/pages/Glossary";
import ToolPage from "./components/pages/Tools";
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
          </Routes>
        </div>
      </Router>
    </div>
  );
}


