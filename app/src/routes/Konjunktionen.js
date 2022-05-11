import React from 'react';
import TopicHeader from "../features/layout/TopicHeader";
import Section from "../features/layout/Section";

const examples = {
  weil: [
    <>Ich musste zu meiner Frau nach Hause, <span className="badge bg-secondary">weil</span> sie krank <span
      className="badge bg-info">ist</span>.</>,
    <>Ich gehe heute nicht zu dem Konzert, <span className="badge bg-secondary">weil</span> ich keine Lust <span
      className="badge bg-info">habe</span>.</>,
    <>Sie arbeitet heute nicht, <span className="badge bg-secondary">weil</span> sie krank <span
      className="badge bg-info">ist</span>.</>,
    <>Ich kann heute nicht zu dir kommen, <span className="badge bg-secondary">weil</span> ich keine Zeit <span
      className="badge bg-info">habe</span>.</>,
    <>Ich bin müde, <span className="badge bg-secondary">weil</span> ich nicht gut <span
      className="badge bg-info">schlafe</span>.</>,
  ],
  dass: [
    <>Ich habe gehört, <span className="badge bg-secondary">dass</span> die Malediven wunderschön <span
      className="badge bg-info">sind</span>.</>,
    <>Ich glaube, <span className="badge bg-secondary">dass</span> Lesen wichtig <span
      className="badge bg-info">ist</span>.</>,
    <>Denkst du, <span className="badge bg-secondary">dass</span> du <span
      className="badge bg-info">tanzen kannst</span>?</>,
    <>Es ist wichtig, <span className="badge bg-secondary">dass</span> wir unsere Hausaufgabe <span
      className="badge bg-info">machen</span>.</>,
    <>Julian ist froh, <span className="badge bg-secondary">dass</span> es jetzt Mittagspause <span
      className="badge bg-info">ist</span>.</>,
  ],
  ob: [
    <>Ich möchte wissen, <span className="badge bg-secondary">ob</span> du mir helfen <span
      className="badge bg-info">kannst</span>?</>,
    <>Ich würde gera gern wissen, <span className="badge bg-secondary">ob</span> du mir Geld leihen <span
      className="badge bg-info">kannst</span>.</>,
    <>Ich möchte wissen, <span className="badge bg-secondary">ob</span> du Zeit <span
      className="badge bg-info">hast</span>.</>,
    <>Weißt du, <span className="badge bg-secondary">ob</span> du noch <span
      className="badge bg-info">kommst</span>.</>,
    <>Kannst du mir sagen, <span className="badge bg-secondary">ob</span> das die richtige Adresse <span
      className="badge bg-info">ist</span>.</>,
    <>Ich möchte missen, <span className="badge bg-secondary">ob</span> du in Regensburg mother <span
      className="badge bg-info">wohnst</span>.</>,
  ],
  obwohl: [
    <>Er kauft ein Auto, <span className="badge bg-secondary">obwohl</span> er kein Geld <span
      className="badge bg-info">hat</span>.</>,
    <>Lara fliegt nach Paris, <span className="badge bg-secondary">obwohl</span> sie Flugangst <span
      className="badge bg-info">hat</span>.</>,
    <>Er geht spazieren, <span className="badge bg-secondary">obwohl</span> es <span
      className="badge bg-info">regnent</span>.</>,
  ],
  deshalb: [
    <> Meine Frau ist krank, <span className="badge bg-secondary">deshalb</span> <span
      className="badge bg-info">musste</span> ich zu ihr nach Hause.</>,
    <>Ich habe keine Lust, <span className="badge bg-secondary">deshalb</span> <span
      className="badge bg-info">gehe</span> ich heute nicht zu dem Konzert.</>,
    <>Sie ist krank, <span className="badge bg-secondary">deshalb</span> <span
      className="badge bg-info">arbeitet</span> sie heute nicht.</>,
    <>Ich habe keine Zeit, <span className="badge bg-secondary">deshalb</span> <span
      className="badge bg-info">kann</span> ich heute nicht zu dir kommen.</>,
    <>Ich schlafe nicht gut, <span className="badge bg-secondary">deshalb</span> <span
      className="badge bg-info">bin</span> ich müde.</>,
  ],
  trotzdem: [
    <>Es regnet heute stark, <span className="badge bg-secondary">trotzdem</span> <span
      className="badge bg-info">gehe</span> ich spazieren.</>,
    <>Ich habe nicht viel Geld, <span className="badge bg-secondary">trotzdem</span> <span
      className="badge bg-info">kaufe</span> ich ein neues Auto.</>,
    <>Niki soll mittags nichts Süßes essen, <span className="badge bg-secondary">trotzdem</span> <span
      className="badge bg-info">isst</span> er viel Kuchen.</>,
    <>Niki soll am Nachmittag ein bisschen Sport machen, <span className="badge bg-secondary">trotzdem</span> <span
      className="badge bg-info">liegt</span> er auf dem Sofa und sieht fern.</>,
    <>Es gibt keinen Schnee, <span className="badge bg-secondary">trotzdem</span> <span
      className="badge bg-info">hast</span>du Skier gekauft.</>,
  ],
};

const Konjunktionen = () => {
  const weilRender = examples.weil.map((example, i) => {
    return <p key={i}>{example}</p>
  });

  const dassRender = examples.dass.map((example, i) => {
    return <p key={i}>{example}</p>
  });

  const obRender = examples.ob.map((example, i) => {
    return <p key={i}>{example}</p>
  });

  const obwohlRender = examples.obwohl.map((example, i) => {
    return <p key={i}>{example}</p>
  });

  const deshalbRender = examples.deshalb.map((example, i) => {
    return <p key={i}>{example}</p>
  });

  const trotzdemRender = examples.trotzdem.map((example, i) => {
    return <p key={i}>{example}</p>
  });

  return (<>
      <TopicHeader header="Weil, Deshalb, Trotzdem, Ob, Dass, Obwohl"/>

      <Section>

        <h2>Nebensatz</h2>
        <h3>Weil, Ob, Dass, Obwohl</h3>

        <h4>Weil</h4>
        {weilRender}

        <h4>Dass</h4>
        {dassRender}

        <h4>Ob</h4>
        {obRender}

        <h4>Obwohl</h4>
        {obwohlRender}

        <hr/>

        <h2>Halbsatz</h2>
        <h3>Deshalb, Trotzdem</h3>

        <h4>Deshalb</h4>
        {deshalbRender}

        <h4>Trotzdem</h4>
        {trotzdemRender}

      </Section>
    </>
  )
}

export default Konjunktionen;