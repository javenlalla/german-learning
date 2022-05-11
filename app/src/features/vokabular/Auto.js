import React from 'react';
import Gender from "../text/Gender";
import Card from "../layout/Card";

const Auto = () => {
  const words = [
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
  ];

  const wordsRender = words.map((word, i) => {
    return <tr key={i}>
      <td>{word.value}</td>
    </tr>
  })

  return (
    <div className="col-lg-4">
      <Card cardTitle="Verkehrsmittel">
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

export default Auto;