import React from 'react';
import Case from "../features/text/Case";
import Gender from "../features/text/Gender";
import TopicHeader from "../features/layout/TopicHeader";
import Section from "../features/layout/Section";

const Deklination = () => {
  return (<>
      <TopicHeader header="Deklination"/>

      <Section>

        <h2>Definiter Artikel</h2>
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
              <td><Gender type="der">der</Gender></td>
              <td><Gender type="der">den</Gender></td>
              <td><Gender type="der">dem</Gender></td>
            </tr>
            <tr>
              <td><Gender type="die">die</Gender></td>
              <td><Gender type="die">die</Gender></td>
              <td><Gender type="die">der</Gender></td>
            </tr>
            <tr>
              <td><Gender type="das">das</Gender></td>
              <td><Gender type="das">das</Gender></td>
              <td><Gender type="das">dem</Gender></td>
            </tr>
            <tr>
              <td><Gender type="plural">die (pl)</Gender></td>
              <td><Gender type="plural">die</Gender></td>
              <td><Gender type="plural">den</Gender></td>
            </tr>
            </tbody>
          </table>
        </div>

        <h2>Indefiniter Artikel</h2>
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

        <h2>Adjektiv</h2>
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

        <h2>Personalpronomen</h2>
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

        <h2>Possessiv Artikel</h2>
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

        <h2>Beispiele</h2>
        <div>
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
        </div>


      </Section>
    </>
  )
}

export default Deklination;