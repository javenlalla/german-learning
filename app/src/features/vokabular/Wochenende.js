import React from 'react';
import Gender from "../text/Gender";
import Card from "../layout/Card";

const Wochenende = () => {
  const words = [
    "angeln/reiten",
    "bügeln",
    "grillen",
    "kochen/backen",
    "schlafen",
    "staubsauger",
    "telefonieren",
    <span>pflanzen/gießen <Gender type="plural">Blumen</Gender></span>,
    "putzen",
    "spazierengehen",
    <span>wandern/machen eine <Gender type="die">Wanderung</Gender></span>,
    <span><Gender type="plural">Wäsche</Gender> waschen</span>,
    <span><Gender type="das">Geschirr</Gender> spülen</span>,
    <span>besuchen ein <Gender type="das">Denkmal</Gender></span>,
    <span>besuchen eine <Gender type="die">Galerie</Gender></span>,
    <span>besichtigten <Gender type="plural">Sehenswürdigkeiten</Gender></span>,
    <span>einladen <Gender type="plural">Freunde</Gender></span>,
    <span>fahren zum <Gender type="der">Zoo</Gender></span>,
    <span>fahren ein <Gender type="das">Schiff</Gender></span>,
    <span>fahren an der <Gender type="der">See</Gender></span>,
    <span>gehen in die <Gender type="die">Oper</Gender></span>,
    <span>gehen in die <Gender type="die">Bücherei</Gender></span>,
    <span>gehen <Gender type="das">Bowling</Gender></span>,
    <span>gehen zu einem <Gender type="das">Konzert</Gender></span>,
    <span>gehen ins <Gender type="das">Kino</Gender></span>,
    <span>gehen ins <Gender type="das">Theater</Gender></span>,
    <span>gehen ins <Gender type="das">Bar</Gender></span>,
    <span>gehen ins <Gender type="das">Museum</Gender></span>,
    <span>gehen zum <Gender type="der">Flohmarkt</Gender></span>,
    <span>gehen zum <Gender type="der">Zirkus</Gender></span>,
    <span>gehen zur <Gender type="die">Disko</Gender></span>,
    <span>lesen ein <Gender type="das">Buch</Gender></span>,
    <span>machen <Gender type="der">Sport</Gender></span>,
    <span>machen <Gender type="das">Yoga</Gender></span>,
    <span>machen einen <Gender type="der">Ausflug</Gender></span>,
    <span>machen eine <Gender type="die">Radtour</Gender></span>,
    <span>machen ein <Gender type="das">Picknick</Gender></span>,
    <span>surfen im <Gender type="das">Internet</Gender></span>,
    <span>trinken einen Kaffee in <Gender type="das">Bäckerei</Gender></span>,
    <span>unternehmen <span className="fst-italic">etwas</span></span>,
  ];

  const wordsRender = words.map((word, i) => {
    return <tr key={i}>
      <td>{word}</td>
    </tr>
  })

  return (
    <div className="col-lg-4">
      <Card cardTitle="Wochenende">
        <div className="table-responsive">
          <table className="table">
            <tbody>
            {wordsRender}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

export default Wochenende;