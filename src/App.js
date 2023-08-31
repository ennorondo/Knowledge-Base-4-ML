import React from "react"
import './App.css';
import './components/Navbar.css'
import './components/MLDP.css'
import './components/ProcessViews.css'
import Navbar from "./components/Navbar.js"
import DevelopmentProcess from './components/MLDP.js';
import AllProcessViews from './components/ProcessViews.js';


export default function App() {
  return (
    <div className="App">
        <Navbar />
        <DevelopmentProcess />
        <AllProcessViews />
    </div>
  );
}
