import React from 'react';
import IndexCard from '../Indexcard';

// Import all json files
import ambiguous_interface from '../IndexcardData/antipatterns/ambiguous_interface.json';
import ambiguous_viewpoint from '../IndexcardData/antipatterns/ambiguous_viewpoint.json';
import api_versioning from '../IndexcardData/antipatterns/api_versioning.json';
import architecture_by_implication from '../IndexcardData/antipatterns/architecture_by_implication.json';
import big_bang from '../IndexcardData/antipatterns/big_bang.json';
import broken_hierarchy from '../IndexcardData/antipatterns/broken_hierarchy.json';
import business_process_forever from '../IndexcardData/antipatterns/business_process_forever.json';
import chatty_service from '../IndexcardData/antipatterns/chatty_service.json';
import combinatorial_explosion from '../IndexcardData/antipatterns/combinatorial_explosion.json';
import comments from '../IndexcardData/antipatterns/comments.json';
import conditional_complexity from '../IndexcardData/antipatterns/conditional_complexity.json';
import connector_envy from '../IndexcardData/antipatterns/connector_envy.json';
import cyclic_dependency from '../IndexcardData/antipatterns/cyclic_dependency.json';
import data_driven_migration from '../IndexcardData/antipatterns/data-driven_migration.json';
import data_class from '../IndexcardData/antipatterns/data_class.json';
import dead_code from '../IndexcardData/antipatterns/dead_code.json';
import deep_hierarchy from '../IndexcardData/antipatterns/deep_hierarchy.json';
import deficient_encapsulation from '../IndexcardData/antipatterns/deficient_encapsulation.json';
import deficient_names from '../IndexcardData/antipatterns/deficient_names.json';
import dense_structure from '../IndexcardData/antipatterns/dense_structure.json';
import duplicated_code from '../IndexcardData/antipatterns/duplicated_code.json';
import feature_envy from '../IndexcardData/antipatterns/feature_envy.json';
import functional_decomposition from '../IndexcardData/antipatterns/functional_decomposition.json';
import golden_hammer from '../IndexcardData/antipatterns/golden_hammer.json';
import hub_like_modularization from '../IndexcardData/antipatterns/hub-like_modularization.json';
import incomplete_abstraction from '../IndexcardData/antipatterns/incomplete_abstraction.json';
import incomplete_library_class from '../IndexcardData/antipatterns/incomplete_library_class.json';
import jumble from '../IndexcardData/antipatterns/jumble.json';
import lazy_class from '../IndexcardData/antipatterns/lazy_class.json';
import long_method from '../IndexcardData/antipatterns/long_method.json';
import long_parameter_list from '../IndexcardData/antipatterns/long_parameter_list.json';
import message_chain from '../IndexcardData/antipatterns/message_chain.json';
import middle_man from '../IndexcardData/antipatterns/middle_man.json';
import multifaceted_abstraction from '../IndexcardData/antipatterns/multifaceted_abstraction.json';
import nano_services from '../IndexcardData/antipatterns/nano_services.json';
import nothing_new from '../IndexcardData/antipatterns/nothing_new.json';
import no_legacy from '../IndexcardData/antipatterns/no_legacy.json';
import parallel_inheritance_hierarchies from '../IndexcardData/antipatterns/parallel_inheritance_hierarchies.json';
import primitive_obsession from '../IndexcardData/antipatterns/primitive_obsession.json';
import refused_bequest from '../IndexcardData/antipatterns/refused_bequest.json';
import sand_pile from '../IndexcardData/antipatterns/sand_pile.json';
import scattered_parasitic_functionality from '../IndexcardData/antipatterns/scattered_parasitic_functionality.json';
import shared_persistency from '../IndexcardData/antipatterns/shared_persistency.json';
import shotgun_surgery from '../IndexcardData/antipatterns/shotgun_surgery.json';
import stovepipe_system from '../IndexcardData/antipatterns/stovepipe_system.json';
import strict_layers_violation from '../IndexcardData/antipatterns/strict_layers_violation.json';
import switch_statement from '../IndexcardData/antipatterns/switch_statement.json';
import temporary_field from '../IndexcardData/antipatterns/temporary_field.json';
import the_god_object from '../IndexcardData/antipatterns/the_god_object.json';
import the_shiny_nickel from '../IndexcardData/antipatterns/the_shiny_nickel.json';
import unnecessary_hierarchy from '../IndexcardData/antipatterns/unnecessary_hierarchy.json';
import vendor_lock_in from '../IndexcardData/antipatterns/vendor_lock-in.json';
import warm_bodies from '../IndexcardData/antipatterns/warm_bodies.json';
import weakened_modularity from '../IndexcardData/antipatterns/weakened_modularity.json';
import wide_hierarchy from '../IndexcardData/antipatterns/wide_hierarchy.json';
import wrong_cuts from '../IndexcardData/antipatterns/wrong_cuts.json';

// CSS
import '../Navbar.css';
import './Antipatterns.css';

import Navbar from '../Navbar';

export default function AntipatternsPage() {

  // Create a function to generate IndexCards for the json files
  const generateIndexCard = (data) => (
    <IndexCard
      name={data.antiPatterns[0].name}
      description={data.antiPatterns[0].description}
      context={data.antiPatterns[0].context}
      detection={data.antiPatterns[0].detection}
      consequences={data.antiPatterns[0].consequences}
      cause={data.antiPatterns[0].cause}
      solution={data.antiPatterns[0].solution}
      example={data.antiPatterns[0].example}
      sources={data.antiPatterns[0].sources}
      tags={data.antiPatterns[0].tags}
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
    ambiguous_viewpoint,
    api_versioning,
    architecture_by_implication,
    big_bang,
    broken_hierarchy,
    business_process_forever,
    chatty_service,
    combinatorial_explosion,
    comments,
    conditional_complexity,
    connector_envy,
    cyclic_dependency,
    data_driven_migration,
    data_class,
    dead_code,
    deep_hierarchy,
    deficient_encapsulation,
    deficient_names,
    dense_structure,
    duplicated_code,
    feature_envy,
    functional_decomposition,
    golden_hammer,
    hub_like_modularization,
    incomplete_abstraction,
    incomplete_library_class,
    jumble,
    lazy_class,
    long_method,
    long_parameter_list,
    message_chain,
    middle_man,
    multifaceted_abstraction,
    nano_services,
    nothing_new,
    no_legacy,
    parallel_inheritance_hierarchies,
    primitive_obsession,
    refused_bequest,
    sand_pile,
    scattered_parasitic_functionality,
    shared_persistency,
    shotgun_surgery,
    stovepipe_system,
    strict_layers_violation,
    switch_statement,
    temporary_field,
    the_god_object,
    the_shiny_nickel,
    unnecessary_hierarchy,
    vendor_lock_in,
    warm_bodies,
    weakened_modularity,
    wide_hierarchy,
    wrong_cuts,
  ];

  const groupedIndexCards = groupIndexCards(allIndexCardData);

  return (
    <div>
    <Navbar name="Antipatterns" />
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
