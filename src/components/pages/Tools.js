import React from 'react';

//CSS
import '../Navbar.css'

import Navbar from '../Navbar';
import ToolPageButton from '../features/ToolPageButton';
import '../features/ToolPageButton.css'

export default function ToolPage() {
  return (
    <div>
      <Navbar name="Tools" />
      <div>
        <div>
          <h1 className='tool-header'>Jupyter Notebooks</h1>
        </div>
        <div className='toolpage-btn-container'>
          <ToolPageButton name="Jupyter Notebooks (Best Practices)" path={"/bestpractices"} />
          <p>Jupyter Notebooks is a versatile and interactive open-source tool widely used in data science,
            research, and education. It provides a user-friendly environment for creating and sharing documents
            that blend live code, visualizations, explanatory text, and more. With support for multiple programming
            languages, including Python, R, and Julia, Jupyter Notebooks empowers users to explore data, conduct experiments,
            and collaborate seamlessly. Its interactive nature enables real-time data manipulation and visualization, making
            it a go-to choice for data analysts, scientists, and educators to showcase their work and foster collaborative
            data-driven insights. Whether you're a beginner or an experienced data professional, Jupyter Notebooks is an
            indispensable tool for streamlining your computational workflows.
          </p>
          <ToolPageButton name="Jupyter Notebooks (Antipatterns)" path={"/antipatterns"} />
        </div>
      </div>

    </div>
  );
}
