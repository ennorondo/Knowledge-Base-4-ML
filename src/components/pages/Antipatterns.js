import React from 'react';
import IndexCard from '../Indexcard';

//import json files for IndexCards
import bigbang from '../IndexcardData/antipatterns/big_bang.json'
import ambiguousinterface from '../IndexcardData/antipatterns/ambiguous_interface.json'
import ambiguousviewpoint from '../IndexcardData/antipatterns/ambiguous_viewpoint.json'
import apiversioning from '../IndexcardData/antipatterns/api_versioning.json'
import architecturebyimplication from '../IndexcardData/antipatterns/architecture_by_implication.json'

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
          name={ambiguousinterface.antiPatterns[0].name}
          description={ambiguousinterface.antiPatterns[0].description}
          context={ambiguousinterface.antiPatterns[0].context}
          detection={ambiguousinterface.antiPatterns[0].detection}
          consequences={ambiguousinterface.antiPatterns[0].consequences}
          cause={ambiguousinterface.antiPatterns[0].cause}
          solution={ambiguousinterface.antiPatterns[0].solution}
          example={ambiguousinterface.antiPatterns[0].example}
          sources={ambiguousinterface.antiPatterns[0].sources}
          tags={ambiguousinterface.antiPatterns[0].tags}
        />
        <IndexCard
          name={ambiguousviewpoint.antiPatterns[0].name}
          description={ambiguousviewpoint.antiPatterns[0].description}
          context={ambiguousviewpoint.antiPatterns[0].context}
        />
        <IndexCard
          name={apiversioning.antiPatterns[0].name}
          description={apiversioning.antiPatterns[0].description}
          context={apiversioning.antiPatterns[0].context}
        />
      </div>
      <div className="indexcard-container">
        <IndexCard
          name={architecturebyimplication.antiPatterns[0].name}
          description={architecturebyimplication.antiPatterns[0].description}
          context={architecturebyimplication.antiPatterns[0].context}
        />
        <IndexCard
          name={architecturebyimplication.antiPatterns[0].name}
          description={architecturebyimplication.antiPatterns[0].description}
          context={architecturebyimplication.antiPatterns[0].context}
        />
        <IndexCard
          name={bigbang.antiPatterns[0].name}
          description={bigbang.antiPatterns[0].description}
          context={bigbang.antiPatterns[0].context}
        />
      </div>
    </div>
  );
}