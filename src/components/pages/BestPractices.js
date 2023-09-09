import React from 'react';
import IndexCard from '../Indexcard';
import bigbang from '../IndexcardData/antipatterns/big_bang.json'
import ambiguousinterface from '../IndexcardData/antipatterns/ambiguous_interface.json'

//CSS
import '../Navbar.css'

import Navbar from '../Navbar';

export default function BestPracticesPage() {

  return (
    <div>
      <Navbar name="Best Practices" />
      <div className="sample-page">
        <h1>Sample Page</h1>
        <IndexCard
          name={bigbang.antiPatterns[0].name}
          description={bigbang.antiPatterns[0].description}
        />
        <IndexCard
          name={ambiguousinterface.antiPatterns[0].name}
          description={ambiguousinterface.antiPatterns[0].description}
        />
      </div>
    </div>
  );
}