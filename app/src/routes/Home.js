import React from 'react';
import Case from "../features/text/Case";
import Gender from "../features/text/Gender";
import TopicHeader from "../features/layout/TopicHeader";
import Section from "../features/layout/Section";
import SubSection from "../features/layout/SubSection";
import TableOfContents from "../features/layout/TableOfContents";

const Home = () => {
  const toc = [
    {
      name: "Definiter Artikel",
      link: "definiter-artikel",
    },
    {
      name: "Indefiniter Artikel",
      link: "indefiniter-artikel",
    },
    {
      name: "Adjektiv",
      link: "adjektiv",
    },
    {
      name: "Personalpronomen",
      link: "personalpronomen",
    },
    {
      name: "Possessiv Artikel",
      link: "possessiv-artikel",
    },
    {
      name: "Beispiele",
      link: "beispiele",
    },
    {
      name: "Genitiv",
      link: "genitiv",
    }
  ];

  return (<>
      <TopicHeader header="Startseite"/>
      <TableOfContents sections={toc}/>

      <Section>
        <SubSection header="Definiter Artikel" linkAnchor="definiter-artikel">
          <div className="table-responsive">
            <table className="table">
              <thead>
              <tr>
                <th><Case type="nom">Nominativ</Case></th>
                <th><Case type="akk">Akkusativ</Case></th>
                <th><Case type="dat">Dativ</Case></th>
                <th><Case type="gen">Genitiv</Case></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><Gender type="der">der</Gender></td>
                <td><Gender type="der">den</Gender></td>
                <td><Gender type="der">dem</Gender></td>
                <td><Gender type="der">des</Gender></td>
              </tr>
              <tr>
                <td><Gender type="die">die</Gender></td>
                <td><Gender type="die">die</Gender></td>
                <td><Gender type="die">der</Gender></td>
                <td><Gender type="die">der</Gender></td>
              </tr>
              <tr>
                <td><Gender type="das">das</Gender></td>
                <td><Gender type="das">das</Gender></td>
                <td><Gender type="das">dem</Gender></td>
                <td><Gender type="das">des</Gender></td>
              </tr>
              <tr>
                <td><Gender type="plural">die (pl)</Gender></td>
                <td><Gender type="plural">die</Gender></td>
                <td><Gender type="plural">den</Gender></td>
                <td><Gender type="plural">der</Gender></td>
              </tr>
              </tbody>
            </table>
          </div>
        </SubSection>

        <SubSection header="Indefiniter Artikel" linkAnchor="indefiniter-artikel">
          <div className="table-responsive">
            <table className="table">
              <thead>
              <tr>
                <th><Case type="nom">Nominativ</Case></th>
                <th><Case type="akk">Akkusativ</Case></th>
                <th><Case type="dat">Dativ</Case></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><Gender type="der">ein</Gender></td>
                <td><Gender type="der">einen</Gender></td>
                <td><Gender type="der">einem</Gender></td>
              </tr>
              <tr>
                <td><Gender type="die">eine</Gender></td>
                <td><Gender type="die">eine</Gender></td>
                <td><Gender type="die">einer</Gender></td>
              </tr>
              <tr>
                <td><Gender type="das">ein</Gender></td>
                <td><Gender type="das">ein</Gender></td>
                <td><Gender type="das">einem</Gender></td>
              </tr>
              </tbody>
            </table>
          </div>
        </SubSection>

        <SubSection header="Adjektiv" linkAnchor="adjektiv">
          {/*Source: https://learngerman.dw.com/en/declension-of-adjectives/l-37655848/e-37662480*/}
          <div className="table-responsive">
            <table className="table">
              <thead>
              <tr>
                <th><Case type="nom">Nominativ</Case></th>
                <th><Case type="akk">Akkusativ</Case></th>
                <th><Case type="dat">Dativ</Case></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><Gender type="der">schöner Mantel</Gender></td>
                <td><Gender type="der">schönen Mantel</Gender></td>
                <td><Gender type="der">schönem Mantel</Gender></td>
              </tr>
              <tr>
                <td><Gender type="die">schöne Jacke</Gender></td>
                <td><Gender type="die">schöne Jacke</Gender></td>
                <td><Gender type="die">schöner Jacke</Gender></td>
              </tr>
              <tr>
                <td><Gender type="das">schönes Top</Gender></td>
                <td><Gender type="das">schönes Top</Gender></td>
                <td><Gender type="das">schönem Top</Gender></td>
              </tr>
              <tr>
                <td><Gender type="plural">schöne Hüte</Gender></td>
                <td><Gender type="plural">schöne Hüte</Gender></td>
                <td><Gender type="plural">schönen Hüte</Gender></td>
              </tr>
              </tbody>
            </table>
          </div>
        </SubSection>

        <SubSection header="Personalpronomen" linkAnchor="personalpronomen">
          <div className="table-responsive">
            <table className="table">
              <thead>
              <tr>
                <th><Case type="nom">Nominativ</Case></th>
                <th><Case type="akk">Akkusativ</Case></th>
                <th><Case type="dat">Dativ</Case></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>ich</td>
                <td>mich</td>
                <td>mir</td>
              </tr>
              <tr>
                <td>du</td>
                <td>dich</td>
                <td>dir</td>
              </tr>
              <tr>
                <td>er</td>
                <td>ihn</td>
                <td>ihm</td>
              </tr>
              <tr>
                <td>sie</td>
                <td>sie</td>
                <td>ihr</td>
              </tr>
              <tr>
                <td>es</td>
                <td>es</td>
                <td>ihm</td>
              </tr>
              <tr>
                <td>wir</td>
                <td>uns</td>
                <td>uns</td>
              </tr>
              <tr>
                <td>ihr</td>
                <td>euch</td>
                <td>euch</td>
              </tr>
              <tr>
                <td>Sie</td>
                <td>Sie</td>
                <td>Ihnen</td>
              </tr>
              <tr>
                <td>sie</td>
                <td>sie</td>
                <td>ihnen</td>
              </tr>
              </tbody>
            </table>
          </div>
        </SubSection>

        <SubSection header="Possessiv Artikel" linkAnchor="possessiv-artikel">
          <div className="table-responsive">
            <table className="table">
              <thead>
              <tr>
                <th><Case type="nom">Nominativ</Case> (<Gender type="der">der</Gender>/<Gender type="das">das</Gender>)
                </th>
                <th><Case type="nom">Nominativ</Case> (<Gender type="die">die</Gender>/<Gender type="plural">pl</Gender>)
                </th>
                <th><Case type="akk">Akkusativ</Case> (<Gender type="der">der</Gender>)</th>
                <th><Case type="akk">Akkusativ</Case> (<Gender type="die">die</Gender>/<Gender type="plural">pl</Gender>)
                </th>
                <th><Case type="akk">Akkusativ</Case> (<Gender type="das">das</Gender>)</th>
                <th><Case type="dat">Dativ</Case> (<Gender type="der">der</Gender>/<Gender type="das">das</Gender>)</th>
                <th><Case type="dat">Dativ</Case> (<Gender type="die">die</Gender>)</th>
                <th><Case type="dat">Dativ</Case> (<Gender type="plural">pl</Gender>)</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>(ich) mein</td>
                <td>meine</td>
                <td>meinen</td>
                <td>meine</td>
                <td>mein</td>
                <td>meinem</td>
                <td>meiner</td>
                <td>meinen</td>
              </tr>
              <tr>
                <td>(du) dein</td>
                <td>deine</td>
                <td>deinen</td>
                <td>deine</td>
                <td>dein</td>
                <td>deinem</td>
                <td>deiner</td>
                <td>deinen</td>
              </tr>
              <tr>
                <td>(er/es) sein</td>
                <td>seine</td>
                <td>seinen</td>
                <td>seine</td>
                <td>sein</td>
                <td>seinem</td>
                <td>seiner</td>
                <td>seinen</td>
              </tr>
              <tr>
                <td>(Sie/sie) ihr</td>
                <td>ihre</td>
                <td>ihren</td>
                <td>ihre</td>
                <td>ihr</td>
                <td>ihrem</td>
                <td>ihrer</td>
                <td>ihren</td>
              </tr>
              <tr>
                <td>(wir) unser</td>
                <td>unsere</td>
                <td>unseren</td>
                <td>unsere</td>
                <td>unser</td>
                <td>unserem</td>
                <td>unserer</td>
                <td>unseren</td>
              </tr>
              <tr>
                <td>(ihr) euer</td>
                <td>euere</td>
                <td>eueren</td>
                <td>euere</td>
                <td>euer</td>
                <td>euerem</td>
                <td>euerer</td>
                <td>eueren</td>
              </tr>
              </tbody>
            </table>
          </div>
        </SubSection>

        <SubSection header="Beispiele" linkAnchor="beispiele">
          <p>Ich habe meinem Mann einen Gartenstuhl gekauft.</p>
          <p>Ich backe meiner Nachbarin einen Kuchen.</p>
          <p>Ich schenke meinen Freunden ein Buch.</p>
          <p>Ich schenke ihnen eine Vase.</p>
          <p>Ich schenke ihm ein Kochbuch.</p>
          <p>Ich schenke ihr eine Kette.</p>
          <p>Kannst du mir dein Fahrrad leihen?</p>
          <p>Hans kocht seinen Kindern eine Suppe.</p>
          <p>Gibst du mir bitte meinen Geldbeutel.</p>
          <p>Wir backen unseren Freuden einen Kuchen.</p>
          <p>Die Kinder schenken ihren Großeltern Gartenstühle.</p>
          <p>Ich habe es meinen Eltern empfohlen.</p>
        </SubSection>

        <SubSection header="Genitiv" linkAnchor="genitiv">
          <p>Das ist Marienelas Stuhl. (Namen sind nur mit "s".)</p>
          <p>Das ist Altinas Handy. (Namen sind nur mit "s".)</p>
          <p>Das ist das Büro des <Gender type="der">Chefs</Gender>.</p>
          <p>Das ist das Büro der <Gender type="die">Ärztin</Gender>.</p>
          <p>Das ist das Büro des <Gender type="das">Amtes</Gender>.</p>
          <p>Das ist das Zimmer der <Gender type="plural">Kinder</Gender>.</p>
        </SubSection>
      </Section>
  </>
  )
}

export default Home;