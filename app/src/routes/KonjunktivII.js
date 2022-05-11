import React from 'react';
import Case from "../features/text/Case";
import Gender from "../features/text/Gender";
import Card from "../features/layout/Card";
import TopicHeader from "../features/layout/TopicHeader";
import Section from "../features/layout/Section";

const KonjunktivII = () => {
  return (<>
    <TopicHeader header="Konjunktiv II (Wünsche)"/>

    <Section>
      <h2>Wäre (Beruf, Ort, Adjektiv)</h2>
      <p>Ich wäre gern Pilot.</p>
      <p>Ich wäre gern in Paris.</p>
      <p>Ich wäre gern am Strand.</p>
      <p>Ich wäre gern zu Hause.</p>
      <p>Sie wäre gern in der Disko.</p>
      <p>Ich wäre lieber bei dir.</p>
      <p>Ich wäre gern intelligent.</p>

      <hr/>

      <h2>Hätte (Haben)</h2>
      <p>Ich hätte gern ein Haus.</p>
      <p>Ich hätte gern mehr Freizeit.</p>
      <p>Sie hätte gern einen Feierabend.</p>
      <p>Ich hätte gern Urlaub.</p>
      <p>Ich hätte auch gern heute Frei.</p>

      <hr/>

      <h2>Würde + Infinitiv (Aktion)</h2>
      <p>Ich würde gern ins Kino gehen.</p>
      <p>Ich würde gern reisen.</p>
      <p>Ich würde gern gut Deutsch sprechen.</p>
      <p>Er würde gern Radfahren.</p>
      <p>Sie würde gern im Wald spazierengehen.</p>
      <p>Er würde lieber mit Freunden ins Schwimmbad gehen.</p>
      <p>Sie würde gern einmal George Clooney in die Augen schauen.</p>
      <p>Am Wochenende würde sie gern Ausflüge unternehmen.</p>
    </Section>
  </>
  )
}

export default KonjunktivII;