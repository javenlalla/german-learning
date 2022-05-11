import React from 'react';
import Card from "../features/layout/Card";
import TopicHeader from "../features/layout/TopicHeader";
import Section from "../features/layout/Section";

const Bildbeschreibung = () => {
  return (<>
      <TopicHeader header="Bildbeschreibung"/>

      <Section>
        <h2>Ich Sehe Auf Dem Foto</h2>
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
              <td>Im Hintergrund</td>
            </tr>
            <tr>
              <td>Im Vordergrund</td>
              <td>Links/Rechts vom Bild</td>
            </tr>
            <tr>
              <td>Auf der linken/rechten Seite</td>
              <td> links, recht</td>
            </tr>
            <tr>
              <td>Auf die Wiese</td>
              <td> Auf, neben, häter, über, zwischen, in, an, vor...</td>
            </tr>
            <tr>
              <td> Ich denke</td>
              <td>glaube</td>
            </tr>
            <tr>
              <td> meine</td>
              <td> " finde</td>
            </tr>
            <tr>
              <td> Ich nehme an, dass ...</td>
              <td>Ich vermute</td>
            </tr>
            <tr>
              <td> Meiner Meinung nach ...</td>
              <td>Das Bild erinnert mich an meine Heimut, weil wir am</td>
            </tr>
            <tr>
              <td>1. Mui immer in die Natur zum picknicken fuhren.</td>
              <td>Das Bild erinnent mich an meine For Jugend. Ich bin</td>
            </tr>
            <tr>
              <td>gerne in die Disco gegangen</td>
              <td>Das Bild erinnert mich an meine Heimatland, weil wir am
                1.Mai immer in die Natur zum picknicken fahren.
                Das Bild erinnent mich an meine Jugend. Ich bin
                gerne in die Disco gegangen.</td>

            </tr>
            </tbody>
          </table>
        </div>

        <h2 className="my-4">Ich Denke, Dass</h2>
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

export default Bildbeschreibung;