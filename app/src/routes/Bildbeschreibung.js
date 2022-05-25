import React from 'react';
import TopicHeader from "../features/layout/TopicHeader";
import Section from "../features/layout/Section";
import SubSection from "../features/layout/SubSection";
import TableOfContents from "../features/layout/TableOfContents";

const Bildbeschreibung = () => {
  const toc = [
    {
      name: "Teil A | Sehen Und Denken",
      link: "teil-a",
      subsections: [
        {
          name: "Tipps",
          link: "tipps",
        }
      ]
    },
    {
      name: "Teil B | Erfahrung",
      link: "teil-b",
    }
  ]

  return (<>
      <TopicHeader header="Bildbeschreibung"/>
      <TableOfContents sections={toc}/>

      <Section>
        <SubSection header="Teil A | Sehen Und Denken" linkAnchor="teil-a">
          <div className="table-responsive">
            <table className="table">
              <thead>
              <tr>
                <th>Was sehen Sie auf dem Foto?</th>
                <th>Was für eine Situation zeigt dieses Bild?</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <ul>
                    <li>Ich sehe auf dem Bild/Foto...</li>
                    <li>Auf dem Bild/Foto, sehe ich...</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Ich denke...</li>
                    <li>Ich glaube...</li>
                    <li>Ich finde...</li>
                    <li>Ich vermute...</li>
                    <li>Ich meine...</li>
                    <li>Ich nehme an...</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>Im Hintergrund sind/ist/sehe ich</li>
                    <li>Im Vordergrund sind/ist/sehe ich</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Meiner Meinung nach...</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>Links/Rechts vom Bild...</li>
                    <li>Auf der linken/rechten Seite</li>
                  </ul>
                </td>
                <td>Vielleicht...</td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>in der Mitte</li>
                    <li>neben</li>
                    <li>über</li>
                    <li>unter</li>
                    <li>zwischen</li>
                    <li>auf</li>
                    <li>in</li>
                    <li>vor</li>
                  </ul>
                </td>
                <td>Es könnte...sein.</td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>Im Bild, liegt auf...</li>
                    <li>Im Bild, steht auf...</li>
                    <li>Im Bild, hängt an der Decke/an der Wand...</li>
                  </ul>
                </td>
                <td/>
              </tr>
              <tr>
                <td>
                  <ul>Die Person trägt...
                    <li>eine Jackie</li>
                    <li>gestreiftes T-Shirt</li>
                    <li>ein kariertes T-Shirt</li>
                    <li>ein T-Shirt mit Punkten</li>
                    <li>Brille</li>
                    <li>Hemd (Mann)</li>
                    <li>Bluse (Frau)</li>
                  </ul>
                </td>
                <td/>
              </tr>
              <tr>
                <td>Haare:
                  <ul>
                    <li>glatte</li>
                    <li>lockige</li>
                    <li>blond</li>
                    <li>braun</li>
                    <li>schwarz</li>
                  </ul>
                </td>
                <td/>
              </tr>
              <tr>
                <td>Sie/Er hält...</td>
                <td/>
              </tr>
              </tbody>
            </table>
          </div>

          <h3 id="tipps">Tipps</h3>
          <ul>
            <li>Ruhig bleiben</li>
            <li>W-Fragen:
              <ul>
                <li>Wer?</li>
                <li>Wo?</li>
                <li>Wann (Jahr zeit/Saison, Tageszeit, etc.)?</li>
                <li>Mit wenn?</li>
                <li>Was fühlen sie? Emotionen</li>
              </ul>
            </li>
            <li>Wenn Sie pause oder Moment brauchen: Darf ich kurz nachdenken?</li>
          </ul>
        </SubSection>

        <SubSection header="Teil B | Erfahrung" linkAnchor="teil-b">
          <p className="fw-bold">Welche Erfahrungen haben Sie damit?</p>
          <div>
            <ul>
              <li>Das Bild erinnert mich an mein Heimatland, weil...</li>
              <li>Das Bild erinnert mich an meine Jugend, weil...</li>
              <li>Das Bild erinnert mich an meine Kindheit, weil...</li>
              <li>Das Bild erinnert mich an meine Familie, weil...</li>
              <li>Das Bild erinnert mich an meine Kinder, weil...</li>
              <li>Das Thema gefällt mir, weil es in meinem Heimatland gleich ist.</li>
              <li>In meinem Heimatland, ist es genauso wie in Deutschland.</li>
              <li>Das bild erinnert mich als ich ein Kind war,...</li>
            </ul>
          </div>
        </SubSection>
      </Section>
    </>
  )
}

export default Bildbeschreibung;