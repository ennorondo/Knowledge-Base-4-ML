import React from 'react';
import IndexCard from '../Indexcard';

//import json files for IndexCards
import bigbang from '../IndexcardData/antipatterns/big_bang.json'
import ambiguousinterface from '../IndexcardData/antipatterns/ambiguous_interface.json'
import ambiguousviewpoint from '../IndexcardData/antipatterns/ambiguous_viewpoint.json'

//CSS
import '../Navbar.css'
import './Antipatterns.css'

import Navbar from '../Navbar';

export default function AntipatternsPage() {

  return (
    <div>
      <Navbar name="Antipatterns" />
      <div className="indexcard-container">
        <IndexCard
          name={bigbang.antiPatterns[0].name}
          description={bigbang.antiPatterns[0].description}
          context={bigbang.antiPatterns[0].context}
        />
        <IndexCard
          name={ambiguousinterface.antiPatterns[0].name}
          description={ambiguousinterface.antiPatterns[0].description}
          context={ambiguousinterface.antiPatterns[0].context}
        />
        <IndexCard
          name={ambiguousviewpoint.antiPatterns[0].name}
          description={ambiguousviewpoint.antiPatterns[0].description}
          context={ambiguousviewpoint.antiPatterns[0].context}
        />
      </div>
    </div>
  );
}