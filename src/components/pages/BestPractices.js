import React from 'react';
import IndexCard from '../Indexcard';

// Import all json files
import ambiguous_interface from '../IndexcardData/bestpractices/descriptive_functionname.json';

// CSS
import '../Navbar.css';
import './Antipatterns.css';

import Navbar from '../Navbar';

export default function BestPracticesPage() {

  // Create a function to generate IndexCards for the json files
  const generateIndexCard = (data) => (
    <IndexCard
      name={data.bestPractices[0].name}
      description={data.bestPractices[0].description}
      context={data.bestPractices[0].context}
      benefits={data.bestPractices[0].benefits}
      example={data.bestPractices[0].example}
      tags={data.bestPractices[0].tags}
      relatedItems={data.bestPractices[0].relatedItems}
    />

  );


  const groupIndexCards = (cards) => {
    const groupedCards = [];
    for (let i = 0; i < cards.length; i += 3) {
      groupedCards.push(cards.slice(i, i + 3));
    }
    return groupedCards;
  };

  const allIndexCardData = [
    ambiguous_interface,

  ];

  const groupedIndexCards = groupIndexCards(allIndexCardData);

  return (
    <div>
      <Navbar name="Best Practices" />
      <div className="indexcard-container">
        {groupedIndexCards.map((group, index) => (
          <div key={index} className="indexcard-row">
            {group.map((data, i) => (
              <div key={i}>{generateIndexCard(data)}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
