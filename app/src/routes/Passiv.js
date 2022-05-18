import React from 'react';
import Section from "../features/layout/Section";
import SubSection from "../features/layout/SubSection";
import TableOfContents from "../features/layout/TableOfContents";

const Passiv = () => {
  const sections = [
    {
      name: "Passiv",
      link: "passiv",
    },
    {
      name: "Passiv + Modal",
      link: "passiv-modal",
    }
  ]

  return (<>
      <TableOfContents sections={sections}/>

      <Section>
        <SubSection header="Passive" linkAnchor="passiv">
          <p>Der Hund wird gefüttert.</p>
          <p>Die Wäsche wird gewaschen.</p>
          <p>Der Boden wird gewischt.</p>
          <p>Die Pflanzen werden gegossen.</p>
          <p>Das Essen wird gekocht.</p>
          <p>Das Gemüse wird geputzt.</p>
          <p>Der Salat wird gewaschen.</p>
          <p>Das Fleisch wird gebraten.</p>
          <p>Die Zwiebeln werden gehackt.</p>
          <p>Der Kuchen wird gebacken.</p>
          <p>Der Tisch wird abgeräumt.</p>
          <p>Das Geschirr wird abgespült.</p>
          <p>Die Betten werden gemacht.</p>
          <p>Die Fenster werden geputzt.</p>
        </SubSection>

        <SubSection header="Passiv + Modal" linkAnchor="passiv-modal">
          <p>Auf ausreichend Bewegung sollte deshalb geachtet werden</p>
          <p>Dadurch können neue Kräfte gesammelt werden.</p>
          <p>Alkoholgenuss sollte vermieden werden.</p>
          <p>Der Blutdruck muss gemessen werden.</p>
          <p>Das Blut muss abgenommen werden.</p>
          <p>Das Gewicht muss geprüft werden.</p>
          <p>Der Bauch muss untersucht werden.</p>
          <p>Das Fenster muss geputzt werden.</p>
          <p>Die Blumen sollen gegossen werden.</p>
          <p>Der Hund muss gefüttert werden.</p>
          <p>Die Haare sollen geschnitten werden.</p>
          <p>Die Würstchen dürfen gegessen werden.</p>
          <p>Süßigkeiten dürfen gegessen werden.</p>
        </SubSection>
      </Section>
    </>
  )
}

export default Passiv;