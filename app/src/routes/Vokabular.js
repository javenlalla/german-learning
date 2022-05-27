import React, { useState, useEffect } from 'react';
import Wochenende from "../features/vokabular/Wochenende";
import Auto from "../features/vokabular/Auto";
import Card from "../features/layout/Card";
import Gender from "../features/text/Gender";

const words = [
  {value: "angeln/reiten", tags: ["wochenende"]},
  {value: "bügeln", tags: ["wochenende"]},
  {value: "grillen", tags: ["wochenende"]},
  {value: "kochen/backen", tags: ["wochenende"]},
  {value: "schlafen", tags: ["wochenende"]},
  {value: "staubsauger", tags: ["wochenende"]},
  {value: "telefonieren", tags: ["wochenende"]},
  {value: <span>pflanzen/gießen <Gender type="plural">Blumen</Gender></span>, tags: ["wochenende"]},
  {value: "putzen", tags: ["wochenende"]},
  {value: "spazierengehen", tags: ["wochenende"]},
  {value: <span>wandern/machen eine <Gender type="die">Wanderung</Gender></span>, tags: ["wochenende"]},
  {value: <span><Gender type="plural">Wäsche</Gender> waschen</span>, tags: ["wochenende"]},
  {value: <span>besuchen ein <Gender type="das">Denkmal</Gender></span>, tags: ["wochenende"]},
  {value: <span><Gender type="das">Geschirr</Gender> spülen</span>, tags: ["wochenende"]},
  {value: <span>besuchen eine <Gender type="die">Galerie</Gender></span>, tags: ["wochenende"]},
  {value: <span>besichtigten <Gender type="plural">Sehenswürdigkeiten</Gender></span>, tags: ["wochenende"]},
  {value: <span>einladen <Gender type="plural">Freunde</Gender></span>, tags: ["wochenende"]},
  {value: <span>fahren zum <Gender type="der">Zoo</Gender></span>, tags: ["wochenende"]},
  {value: <span>fahren ein <Gender type="das">Schiff</Gender></span>, tags: ["wochenende"]},
  {value: <span>fahren an der <Gender type="der">See</Gender></span>, tags: ["wochenende"]},
  {value: <span>gehen in die <Gender type="die">Oper</Gender></span>, tags: ["wochenende"]},
  {value: <span>gehen in die <Gender type="die">Bücherei</Gender></span>, tags: ["wochenende"]},
  {value: <span>gehen <Gender type="das">Bowling</Gender></span>, tags: ["wochenende"]},
  {value: <span>gehen zu einem <Gender type="das">Konzert</Gender></span>, tags: ["wochenende"]},
  {value: <span>gehen ins <Gender type="das">Kino</Gender></span>, tags: ["wochenende"]},
  {value: <span>gehen ins <Gender type="das">Theater</Gender></span>, tags: ["wochenende"]},
  {value: <span>gehen ins <Gender type="das">Bar</Gender></span>, tags: ["wochenende"]},
  {value: <span>gehen ins <Gender type="das">Museum</Gender></span>, tags: ["wochenende"]},
  {value: <span>gehen zum <Gender type="der">Flohmarkt</Gender></span>, tags: ["wochenende"]},
  {value: <span>gehen zum <Gender type="der">Zirkus</Gender></span>, tags: ["wochenende"]},
  {value: <span>gehen zur <Gender type="die">Disko</Gender></span>, tags: ["wochenende"]},
  {value: <span>lesen ein <Gender type="das">Buch</Gender></span>, tags: ["wochenende"]},
  {value: <span>machen <Gender type="der">Sport</Gender></span>, tags: ["wochenende"]},
  {value: <span>machen <Gender type="das">Yoga</Gender></span>, tags: ["wochenende"]},
  {value: <span>machen einen <Gender type="der">Ausflug</Gender></span>, tags: ["wochenende"]},
  {value: <span>machen eine <Gender type="die">Radtour</Gender></span>, tags: ["wochenende"]},
  {value: <span>machen ein <Gender type="das">Picknick</Gender></span>, tags: ["wochenende"]},
  {value: <span>surfen im <Gender type="das">Internet</Gender></span>, tags: ["wochenende"]},
  {value: <span>trinken einen Kaffee in <Gender type="das">Bäckerei</Gender></span>, tags: ["wochenende"]},
  {value: <span>unternehmen <span className="fst-italic">etwas</span></span>, tags: ["wochenende"]},
  {value: "vorsichtig", tags: ["auto"]},
  {value: "hupen", tags: ["auto"]},
  {value: "tanken", tags: ["auto"]},
  {value: <span>öffentliche <Gender type="plural">Verkehrsmittel</Gender></span>, tags: ["auto"]},
  {value: <Gender type="der">der Bürgersteig</Gender>, tags: ["auto"]},
  {value: <Gender type="der">der Zug</Gender>, tags: ["auto"]},
  {value: <Gender type="der">der Bahnhof</Gender>, tags: ["auto"]},
  {value: <Gender type="der">der Verkehr</Gender>, tags: ["auto"]},
  {value: <Gender type="der">der Fahrradweg</Gender>, tags: ["auto"]},
  {value: <Gender type="der">der Zebrastreifen</Gender>, tags: ["auto"]},
  {value: <Gender type="der">der Strafzettel</Gender>, tags: ["auto"]},
  {value: <Gender type="der">der Blitzer</Gender>, tags: ["auto"]},
  {value: <Gender type="der">der Parkplatz</Gender>, tags: ["auto"]},
  {value: <Gender type="der">der Autofahrer</Gender>, tags: ["auto"]},
  {value: <Gender type="der">der Fußgänger</Gender>, tags: ["auto"]},
  {value: <Gender type="der">der Führerschein</Gender>, tags: ["auto"]},
  {value: <Gender type="der">der Abschleppdienst</Gender>, tags: ["auto"]},
  {value: <Gender type="der">der Schwarzfahrer</Gender>, tags: ["auto"]},
  {value: <Gender type="die">die Ampel</Gender>, tags: ["auto"]},
  {value: <Gender type="die">die Autobahn</Gender>, tags: ["auto"]},
  {value: <Gender type="die">die Fahrbahn</Gender>, tags: ["auto"]},
  {value: <Gender type="die">die Kreuzung</Gender>, tags: ["auto"]},
  {value: <Gender type="die">die Autoversicherung</Gender>, tags: ["auto"]},
  {value: <Gender type="die">die Raststätte</Gender>, tags: ["auto"]},
  {value: <Gender type="die">die Führerscheinstelle</Gender>, tags: ["auto"]},
  {value: <Gender type="die">die Autofahrerin</Gender>, tags: ["auto"]},
  {value: <Gender type="die">die Polizei</Gender>, tags: ["auto"]},
  {value: <Gender type="die">die Autobahn</Gender>, tags: ["auto"]},
  {value: <Gender type="die">die Fahrbahn</Gender>, tags: ["auto"]},
  {value: <Gender type="die">die Straße</Gender>, tags: ["auto"]},
  {value: <Gender type="die">die Bushaltestelle</Gender>, tags: ["auto"]},
  {value: <Gender type="die">die Bauhaltestelle</Gender>, tags: ["auto"]},
  {value: <Gender type="die">die Tankstelle</Gender>, tags: ["auto"]},
  {value: <Gender type="die">die Panne</Gender>, tags: ["auto"]},
  {value: <Gender type="die">die Fahrschule</Gender>, tags: ["auto"]},
  {value: <Gender type="die">die Umleitung</Gender>, tags: ["auto"]},
  {value: <Gender type="die">die Raststätte</Gender>, tags: ["auto"]},
  {value: <Gender type="das">das Auto</Gender>, tags: ["auto"]},
  {value: <Gender type="das">das Tempo</Gender>, tags: ["auto"]},
  {value: <Gender type="das">das Bußgeld</Gender>, tags: ["auto"]},
  {value: <Gender type="das">das Verkehrsschild</Gender>, tags: ["auto"]},
  {value: <Gender type="das">das Moped</Gender>, tags: ["auto"]},
  {value: <Gender type="das">das Kennzeichen</Gender>, tags: ["auto"]},
  {value: <Gender type="der">der Kontoauszug</Gender>, tags: ["bank"]},
  {value: <Gender type="die">die Kontonummer</Gender>, tags: ["bank"]},
  {value: <Gender type="die">die Bank - der Bankschalten</Gender>, tags: ["bank"]},
  {value: <Gender type="der">der Bankschalten</Gender>, tags: ["bank"]},
  {value: <Gender type="der">der Bankautomat /de/den Geld automat</Gender>, tags: ["bank"]},
  {value: <Gender type="der">der Geldautomat</Gender>, tags: ["bank"]},
  {value: <Gender type="die">die EC-Karte</Gender>, tags: ["bank"]},
  {value: <Gender type="der">der Pin</Gender>, tags: ["bank"]},
  {value: <Gender type="die">die Geheimzahl</Gender>, tags: ["bank"]},
  {value: <Gender type="der">der Kontoauszugsdrucker</Gender>, tags: ["bank"]},
  {value: <span>wechseln</span>, tags: ["bank"]},
  {value: <Gender type="das">das Geld</Gender>, tags: ["bank"]},
  {value: <Gender type="das">das Bargeld</Gender>, tags: ["bank"]},
  {value: <Gender type="der">der Geldbetrag</Gender>, tags: ["bank"]},
  {value: <Gender type="die">die Münzen</Gender>, tags: ["bank"]},
  {value: <Gender type="der">der Schein (-e)</Gender>, tags: ["bank"]},
  {value: <span>überweisen (die Überweisung)</span>, tags: ["bank"]},
  {value: <Gender type="die">die Überweisung</Gender>, tags: ["bank"]},
  {value: <span>abheben. Ich habe Geld abgehoben.</span>, tags: ["bank"]},
  {value: <span>abbuchen</span>, tags: ["bank"]},
  {value: <Gender type="die">die Abbuchung</Gender>, tags: ["bank"]},
  {value: <span><Gender type="der">der Kredit</Gender> Ich nehme einen Kredit auf.</span>, tags: ["bank"]},
  {value: <span>in Raten zahlen</span>, tags: ["bank"]},
  {value: <Gender type="die">die Ratenzahlung</Gender>, tags: ["bank"]},
  {value: <Gender type="die">die Bankgebühr</Gender>, tags: ["bank"]},
  {value: <span>ein Konto eröffnen</span>, tags: ["bank"]},
  {value: <Gender type="die">die Zinsen</Gender>, tags: ["bank"]},
  {value: <Gender type="die">die Kontoverbindung</Gender>, tags: ["bank"]},
  {value: <Gender type="die">die Broschüre</Gender>, tags: ["bank"]},
  {value: <Gender type="die">die Bankleitzahl (BLZ)</Gender>, tags: ["bank"]},
  {value: <span>einzahlen. Ich zahle 50€ ein.</span>, tags: ["bank"]},
  {value: <Gender type="das">das Zahlungssystem</Gender>, tags: ["bank"]},
  {value: <Gender type="das">das Ablaufdatum</Gender>, tags: ["bank"]},

];

const Vokabular = () => {
  const [filteredWords, setFilteredWords] = useState(words);
  const [filterTags, setFilterTags] = useState([]);

  const wordsRender = filteredWords.map((word, i) => {
    const tags = word.tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1));

    return <tr key={i}>
      <td>{word.value}</td>
      <td>{tags.join(",")}</td>
    </tr>
  })

  useEffect(() => {
    let updatedFilteredWords = words.slice();
    if (filterTags.length > 0) {

      updatedFilteredWords = words.filter(word => {
        for (let i = 0; i < filterTags.length; i++) {

          if (word.tags.includes(filterTags[i])) {
            return true;
          }
        }

        return false;
      })
    }

    setFilteredWords(updatedFilteredWords);
  }, [filterTags])

  const updateFilterTags = (tag) => {
    let updatedTags = filterTags.slice();

    if (updatedTags.includes(tag)) {
      const index = updatedTags.indexOf(tag);
      if (index > -1) {
        updatedTags.splice(index, 1); // 2nd parameter means remove one item only
      }
    } else {
      updatedTags.push(tag);
    }

    setFilterTags(updatedTags);
  }

  return (<>
      <div className="page-title">
        <div className="row">
          <div className="col-12 col-md-6 order-md-1 order-last">
            <h3>Vokabular</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <Card cardTitle="Wochenende">

            <div>
              <button type="button" className={`btn mx-2 btn-sm btn-outline-primary ${filterTags.includes("auto") ? 'active': ''}`} onClick={() => updateFilterTags("auto")}>Auto</button>
              {/*<button type="button" className="btn mx-2 btn-sm btn-outline-secondary">Secondary</button>*/}
              <button type="button" className={`btn mx-2 btn-sm btn-outline-success ${filterTags.includes("wochenende") ? 'active': ''}`} onClick={() => updateFilterTags("wochenende")}>Wochenende</button>
              <button type="button" className={`btn mx-2 btn-sm btn-outline-danger ${filterTags.includes("bank") ? 'active': ''}`} onClick={() => updateFilterTags("bank")}>Bank</button>
              <button type="button" className="btn mx-2 btn-sm btn-outline-warning">Warning</button>
              <button type="button" className="btn mx-2 btn-sm btn-outline-info">Info</button>
              <button type="button" className="btn mx-2 btn-sm btn-outline-dark">Dark</button>
            </div>

            <hr/>

            <div className="table-responsive">
              <table className="table">
                <tbody>
                {wordsRender}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
      <div className="row">
        <Auto/>
        <Wochenende/>
      </div>
    </>
  )
}

export default Vokabular;