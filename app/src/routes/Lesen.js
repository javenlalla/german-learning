import React from 'react';
import TopicHeader from "../features/layout/TopicHeader";
import Section from "../features/layout/Section";

const Lesen = () => {
  return (<>
      <TopicHeader header="Lesen"/>

      <Section>

        <h2>Lesen Sub-section</h2>

        Lesen Teil 2
        mal mal Breite x Höhe x Trefe
        Aufgabe genau lesen!
        ↳ Eine Situation hat keine Lösung! xit im Telcblatt x armalen
        •Situationen zuerst alle genau durchlesen.
        wichtige Worter markieren
        Anzeigen genau durchlesen + passende Anzeige finden!
        il manor ich.

        <div className="table-responsive text-nowrap">
          <table className="table">
            <thead>
            <tr>
              <th>Header</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Value</td>
            </tr>
            </tbody>
          </table>
        </div>

      </Section>
    </>
  )
}

export default Lesen;