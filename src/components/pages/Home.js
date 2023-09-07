import React from 'react';

//CSS
import '../../App.css';
import '../Navbar.css'
import '../MLDP.css'
import '../ProcessViews.css'
import '../features/MenuButton.css'
import '../features/ToolButton.css'

//Components
import Navbar from "../Navbar.js"
import DevelopmentProcess from '../MLDP.js';
import AllProcessViews from '../ProcessViews.js';

export default function HomePage() {
  return (
    <div>
      <Navbar name="Knowledge Base for SE4ML"/>
      <DevelopmentProcess />
      <AllProcessViews />
    </div>
  );
}
