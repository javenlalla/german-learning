import React from 'react';
import TopicHeader from "../features/layout/TopicHeader";
import Section from "../features/layout/Section";
import SubSection from "../features/layout/SubSection";
import TableOfContents from "../features/layout/TableOfContents";

const Zu = () => {
  const toc = [
    {
      name: "Zu",
      link: "zu",
    },
    {
      name: "Um Zu",
      link: "um-zu",
    },
    {
      name: "Damit",
      link: "damit",
    },
  ]
  return (<>
      {/*<TopicHeader header="Zu"/>*/}
      <TableOfContents sections={toc}/>

      <Section>

        <SubSection header="Zu" linkAnchor="zu">
          <ul>
            <li>
              Verben, die eine Meinung ausdrücken
              <ul>
                <li>glauben</li>
                <li>meinen</li>
                <li>hoffen</li>
                <li>vermuten</li>
                <li>denken</li>
              </ul>
              Beispiele
              <ul>
                <li>Ich glaube, am Wochenende arbeiten <span className="text-primary fw-bold">zu</span> müssen.</li>
                <li>Ich hoffe, meine Tasche nicht <span className="text-primary fw-bold">zu</span> verlieren.</li>
              </ul>
            </li>
            <li>
              Verben, die Wünsche, Pläne und Absicht meinen
              <ul>
                <li>wünschen</li>
                <li>planen</li>
                <li>versuchen</li>
                <li>probieren</li>
                <li>vergessen</li>
              </ul>
              Beispiele
              <ul>
                <li>Ich plane am Samstag nach München <span className="text-primary fw-bold">zu</span> fahren.</li>
                <li>Ich wünsche mir, ein neues Auto <span className="text-primary fw-bold">zu</span> kaufen.</li>
                <li>Ich habe vergessen meine Hausaufgabe <span className="text-primary fw-bold">zu</span> machen.</li>
              </ul>
            </li>
            <li>
              Verben, die einen Beginn ausdrücken
              <ul>
                <li>beginnen</li>
                <li>anfangen</li>
              </ul>
              Beispiele
              <ul>
                <li>Ich fange an, Sport <span className="text-primary fw-bold">zu</span> machen.</li>
                <li>Ich beginne, eine Ausbildung <span className="text-primary fw-bold">zu</span> machen.</li>
              </ul>
            </li>
            <li>
              Ohne "dass"-Sätze
              <ul>
                <li>Es ist wichtig, in die Schule <span className="text-primary fw-bold">zu</span> gehen.</li>
                <li>Es ist schwierig, neue Grammatik <span className="text-primary fw-bold">zu</span> lernen.</li>
                <li>Es ist wichtig, für die Prüfung <span className="text-primary fw-bold">zu</span> lernen.</li>
                <li>anfangen</li>
              </ul>
            </li>
            <li>
              Sein + Adjektiv
              <ul>
                <li>Es ist nicht möglich, immer perfekt <span className="text-primary fw-bold">zu</span> sein.</li>
                <li>Es ist stressig, jeden Tag <span className="text-primary fw-bold">zu</span> kommen.</li>
              </ul>
            </li>
            <li>
              Haben + Nomen
              <ul>
                <li>Ich habe Lust ins Kino <span className="text-primary fw-bold">zu</span> gehen.</li>
                <li>Ich habe keine Zeit <span className="text-primary fw-bold">zu</span> schlafen.</li>
                <li>Ich habe Stress den Bescheid <span className="text-primary fw-bold">zu</span> bekommen.</li>
                <li>Ich habe Angst <span className="text-primary fw-bold">zu</span> fliegen.</li>
                <li>Ich habe Angst auf Deutsch <span className="text-primary fw-bold">zu</span> sprechen.</li>
              </ul>
            </li>
          </ul>
        </SubSection>
        
        <SubSection header="Um Zu" linkAnchor="um-zu">
          <ul className="list-unstyled">
            <li>Er nimmt ein Taxi, <span className="text-primary fw-bold">um</span> nicht zu spät <span className="text-info fw-bold">zu</span> kommen.</li>
            <li>Sie lernt Deutsch, <span className="text-primary fw-bold">um</span> in Deutschland <span className="text-info fw-bold">zu</span> studieren.</li>
            <li>Tamas arbeitet, <span className="text-primary fw-bold">um</span> viel Geld <span className="text-info fw-bold">zu</span> verdienen.</li>
          </ul>
        </SubSection>

        <SubSection header="Damit" linkAnchor="damit">
          <ul className="list-unstyled">
            <li>Er nimmt ein Taxi, <span className="text-primary fw-bold">damit</span> er nicht zu spät <span className="text-info fw-bold">kommt</span>.</li>
            <li>Sie lernt Deutsch, <span className="text-primary fw-bold">damit</span> sie in Deutschland <span className="text-info fw-bold">studiert</span>.</li>
            <li>Tamas arbeitet, <span className="text-primary fw-bold">damit</span> er viel Geld <span className="text-info fw-bold">verdient</span>.</li>
          </ul>
        </SubSection>

      </Section>
    </>
  )
}

export default Zu;