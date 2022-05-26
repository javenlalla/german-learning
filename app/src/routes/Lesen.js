import React from 'react';
import TopicHeader from "../features/layout/TopicHeader";
import Section from "../features/layout/Section";
import SubSection from "../features/layout/SubSection";

const Lesen = () => {
  return (<>
      <TopicHeader header="Lesen"/>

      <Section>
        <SubSection header="Tipps">
          <div>
            <ul>
              <li>Aufgabe genau lesen</li>
              <li>Situationen zuerst alle genau durchlesen</li>
              <li>Wichtige Wörter markieren</li>
              <li>
                Lesen Teil 2:
                <ul>
                  <li>Anzeigen genau durchlesen und passende Anzeige finden</li>
                  <li>Eine Situation hat keine Lösung
                    <ul>
                      <li>Malen <span className="fw-bold">X</span></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </SubSection>
      </Section>
    </>
  )
}

export default Lesen;