import React from 'react';
import TopicHeader from "../features/layout/TopicHeader";
import Section from "../features/layout/Section";
import SubSection from "../features/layout/SubSection";
import TableOfContents from "../features/layout/TableOfContents";

const Planen = () => {
  const toc = [
    {
      name: "Könnten",
      link: "konnten",
    },
    {
      name: "Vorschlag Und Reaktion",
      link: "reaktion",
    },
    {
      name: "Missverständnisse",
      link: "missverstandnisse",
    },
    {
      name: "Beispiele",
      link: "beispiele",
      subsections: [
        {
          name: "Beispiel 1",
          link: "beispiel-1",
        },
        {
          name: "Beispiel 2",
          link: "beispiel-2",
        },
        {
          name: "Beispiel 3",
          link: "beispiel-3",
        },
      ]
    }
  ]

  return (<>
      <TopicHeader header="Planen"/>
      <TableOfContents sections={toc}/>

      <Section>
        <SubSection header="Könnten" linkAnchor="konnten">
          <div className="table-responsive">
            <table className="table">
              <tbody>
              <tr>
                <td>ich</td>
                <td>könnte</td>
              </tr>
              <tr>
                <td>due</td>
                <td>könntest</td>
              </tr>
              <tr>
                <td>er/sie/es</td>
                <td>könnte</td>
              </tr>
              <tr>
                <td>wir</td>
                <td>könnten</td>
              </tr>
              <tr>
                <td>ihr</td>
                <td>könntet</td>
              </tr>
              <tr>
                <td>sie/Sie</td>
                <td>könnten</td>
              </tr>
              </tbody>
            </table>
          </div>
        </SubSection>

        <SubSection header="Vorschlag Und Reaktion" linkAnchor="reaktion">
          <VorschlagTable/>
        </SubSection>

        <SubSection header="Missverständnisse" linkAnchor="missverstandnisse">
          <ul>
            <li>Ach so, das habe ich falsch verstanden. Ich meine, wir...</li>
            <li>Entschuldigung, das hatte ich anders gemeint.</li>
            <li>Kannst du das bitte wiederholen?</li>
            <li>Kannst du bitte langsamer sprechen?</li>
            <li>Wie meinst du das?</li>
            <li>Das habe ich noch nicht verstanden. Bitte erklär mir das noch mal.</li>
            <li>Was bedeutet das?</li>
          </ul>
        </SubSection>

        <SubSection header="Beispiele" linkAnchor="beispiele">
          <div>
            <h3 id="beispiel-1">Beispiel Gespräch 1</h3>
            <p className="text-primary"><span className="fw-bold">Julian:</span> Hallo, wie geht es dir?</p>
            <p className="text-danger"><span className="fw-bold">Heidi</span>: Hallo, mir geht es gut danke und dir?</p>
            <p className="text-primary"><span className="fw-bold">J:</span> Gut, danke. Ich habe eine gute Idee. Wollen wir am Wochenende nach Prag fahren?</p>
            <p className="text-danger"><span className="fw-bold">H:</span> Ja, das ist eine gute Idee. Aber ich habe Freitag beider keine Zeit. Vielleicht passt dir Samstag besser?</p>
            <p className="text-primary"><span className="fw-bold">J:</span> Ja, das passt. Am Samstag habe ich Zeit. Wir könnten mit dem Zug oder mit dem Auto fahren</p>
            <p className="text-danger"><span className="fw-bold">H:</span> Mit dem Zug habe ich Angst, aber mit dem Auto passt mir das besser. Wir könnten mit meinem Auto fahren.</p>
            <p className="text-primary"><span className="fw-bold">J:</span> Ok. Super Idee! Also, können min so mehr von der Stadt sehen.</p>
            <p className="text-danger"><span className="fw-bold">H:</span> Wollen wir die Stadt ansehen? Dort gibt es viele Sehenswürdigkeiten. Wir könnten sie besichtigen.</p>
            <p className="text-primary"><span className="fw-bold">J:</span> Das klingt gut. Ich habe noch eine Idee. Wir könnten auch eine Schifffahrt machen. Prag ist eine schöne Stadt. Hast du Lust?</p>
            <p className="text-danger"><span className="fw-bold">H:</span> Ja, darauf habe ich Lust. Das gefällt mir gut!</p>
            <p className="text-primary"><span className="fw-bold">J:</span> Weißt du, wo wir übernachten können?</p>
            <p className="text-danger"><span className="fw-bold">H:</span> Wir könnten in einer Pension übernachten, weil sie billiger ist und weil wir zwei Tage bleiben. Was hältst du davon?</p>
            <p className="text-primary"><span className="fw-bold">J:</span> Das ist ein guter Vorschlag. Ich suche im Internet nach einem Angebot.</p>
            <p className="text-danger"><span className="fw-bold">H:</span> Vielen Dank. Ich warte auf deine Antwort. Dann, bis Samstag!</p>
            <p className="text-primary"><span className="fw-bold">J:</span> Bis Samstag! Tschüs!</p>
          </div>

          <div>
            <h3 id="beispiel-2">Beispiel Gespräch 2</h3>
            <p className="text-primary"><span className="fw-bold">Tim:</span> Hallo Lara, wie geht es dir?</p>
            <p className="text-danger"><span className="fw-bold">Lara:</span> Hallo Tim, danke gut und dir?</p>
            <p className="text-primary"><span className="fw-bold">T:</span> Auch gut, danke! Ich habe einen Vorschlag. Wir könnten doch am Wochenende ins Kino gehen. Hast du Lust?</p>
            <p className="text-danger"><span className="fw-bold">L:</span> Super. Das ist eine gute Idee! Darauf habe ich lust. Welcher Film ist am Wochenende im Kino?</p>
            <p className="text-primary"><span className="fw-bold">T:</span> Ich habe in der Werbung gesehen, dass es den Film "La La Land" gibt. Der Film ist sehr lustig.</p>
            <p className="text-danger"><span className="fw-bold">L:</span> Ja, das klingt gut, wann beginnt der Film?</p>
            <p className="text-primary"><span className="fw-bold">T:</span> Am Samstag, um 20 Uhr! Passt dir das?</p>
            <p className="text-danger"><span className="fw-bold">L:</span> Am Samstag habe ich leider keine Zeit, aber vielleicht am Sonntag? Am Sonntagabend habe ich Zeit.</p>
            <p className="text-primary"><span className="fw-bold">T:</span> Ja, kein Problem. Der Film beginnt auch am Sonntag Sonntag um 20 Uhr.</p>
            <p className="text-danger"><span className="fw-bold">L:</span> Das freut mich. Wann und wo wollen wir uns treffen?</p>
            <p className="text-primary"><span className="fw-bold">T:</span> Wir könnten uns um halb acht vor dem Kino treffen. Passt dir das?</p>
            <p className="text-danger"><span className="fw-bold">L:</span> Ok. Das passt mir gut. Wer kommt noch mit?</p>
            <p className="text-primary"><span className="fw-bold">T:</span> Ich habe mit Natasa, Hans und Tamas gesprochen und sie wollen mitkommen.</p>
            <p className="text-danger"><span className="fw-bold">L:</span> Dann kannst du ihnen in Whatsapp mitteilen, wann und wo wir uns treffen.</p>
            <p className="text-primary"><span className="fw-bold">T:</span> Ok, das machen wir so. Kein Problem. Ich habe noch eine Frage: Wo können wir die Karten bestellen?</p>
            <p className="text-danger"><span className="fw-bold">L:</span> Kein Problem. Ich bestelle für alle die Karten im Internet.</p>
            <p className="text-primary"><span className="fw-bold">T </span>: Vielen Dank. Wir sammeln dann das Geld und geben es dir.</p>
            <p className="text-danger"><span className="fw-bold">L:</span> Alles klar, so machen wir das. Was denkst du, was wir nach dem Film machen könnten?</p>
            <p className="text-primary"><span className="fw-bold">T:</span> Ich würde gern nach dem Film in die Disko gehen. Hast du Lust?</p>
            <p className="text-danger"><span className="fw-bold">L:</span> Darauf habe ich keine Lust. Ich würde eigentlich lieber ins Restaurant gehen. Nach dem Kino haben wir alle Hunger. Was hälst du davon?</p>
            <p className="text-primary"><span className="fw-bold">T:</span> Einverstanden! Lass uns das so machen! Dann treffen wir uns Sonntagabend vor dem Kino.</p>
            <p className="text-danger"><span className="fw-bold">L:</span> Ja, ich freue mich auf Sonntag. Bis Sonntag!</p>
            <p className="text-primary"><span className="fw-bold">T:</span> Tschüs, bis Sonntag!</p>
          </div>

          <div>
            <h3 id="beispiel-3">Beispiel Gespräch 3</h3>
            <p className="text-primary"><span className="fw-bold">Lara:</span> Hallo Heidi, wie geht es dir?</p>
            <p className="text-danger"><span className="fw-bold">Heidi:</span> Gut, danke und dir? Hast du gehört, am Dienstag kommen die Eltern von Hannah am Flughafen an? Hannah kann ihre Eltern nicht abholen, weil sie arbeiten muss. Sie hat uns gefragt, ob wir ihr helfen können. Hast du am Dienstag Zeit?</p>
            <p className="text-primary"><span className="fw-bold">L: </span>Ja, kein Problem. Ich habe am Dienstag Zeit. Um wie viel Uhr kommen die Eltern?</p>
            <p className="text-danger"><span className="fw-bold">H: </span>Die Eltern kommen um 12 Uhr in München an.</p>
            <p className="text-primary"><span className="fw-bold">L: </span>Ok, alles Klar. Aber wie kommen wir zum Flughafen? Ich habe leider kein Auto. Hast du eine Idee?</p>
            <p className="text-danger"><span className="fw-bold">H: </span>Wir könnten mit dem Zug fahren. Was denkst du?</p>
            <p className="text-primary"><span className="fw-bold">L: </span>Das ist eine gute Idee, aber ich habe Angst Zug zu fahren. Wir könnten doch mit deinem Auto fahren.</p>
            <p className="text-danger"><span className="fw-bold">H: </span>Ok, dann fahren wir mit meinem Auto. Ich hole dich ab und wir fahren zusammen.</p>
            <p className="text-primary"><span className="fw-bold">L: </span>Hast du Idee, wie die Eltern aussehen?</p>
            <p className="text-danger"><span className="fw-bold">H: </span>Ja, Hannah hat mir erzählt, dass ihre Mamma kurze blonde Haare hat und eine Brille trägt. Ihr Vater ist sehr groß und hat einen roten Koffer. Aber Hannah hat mir auch eine Foto von ihren Eltern auf Whatsapp geschickt.</p>
            <p className="text-primary"><span className="fw-bold">L: </span>Das ist super! Wir könnten auch einen Zettel schreiben mit Hannahs Nachname, so erkennen die Eltern uns auch.</p>
            <p className="text-danger"><span className="fw-bold">H: </span>Diese Idee gefällt mir sehr gut! Dann macher wir das so.</p>
            <p className="text-primary"><span className="fw-bold">L: </span>Ok, Heidi. Bitte komm pünktlich. Du kannst mich am Dienstag um 10:00 Uhr bei mir zu Hause abholen.</p>
            <p className="text-danger"><span className="fw-bold">H: </span>Ok, kein Problem. Bis Dienstag!</p>
            <p className="text-primary"><span className="fw-bold">L: </span>Bis Dienstag! Tschüss!</p>
          </div>
        </SubSection>
      </Section>
    </>
  )
}

const VorschlagTable = () => {
  return <div className="table-responsive">
    <table className="table">
      <thead>
      <tr>
        <th className="text-center"><i className="text-warning bi bi-lightbulb-fill"/><br/>Etwas vorschlagen</th>
        <th className="text-center"><i className="text-danger bi bi-emoji-frown-fill"/><br/>Vorschlag ablehnen</th>
        <th className="text-center"><i className="text-gray-600 bi bi-question-circle-fill"/><br/>Einen Gegenvorschlag machen</th>
        <th className="text-center"><i className="text-success bi bi-emoji-smile-fill"/><br/>Vorschlag akzeptieren</th>
        <th className="text-center"><i className="text-info bi bi-hand-thumbs-up-fill"/><br/>Sich einigen</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Ich habe einen Vorschlag. Wollen wir...?</td>
        <td>Nein, das passt mir nicht.</td>
        <td>Ich mag lieber...</td>
        <td>Ja, das passt mir.</td>
        <td>Genau!</td>
      </tr>
      <tr>
        <td>Ich habe eine Idee.</td>
        <td>Nein, das ist keine gute Idee.</td>
        <td>Die Idee ist toll, ich würde aber lieber...</td>
        <td>Ja, das ist eine gute Idee.</td>
        <td>Das finde ich auch.</td>
      </tr>
      <tr>
        <td>Ich schlage vor, dass...</td>
        <td>Nein, das gefällt mir nicht.</td>
        <td>Ich würde lieber...</td>
        <td>Ja, das/die Idee gefällt mir gut.</td>
        <td>Gut, dann...</td>
      </tr>
      <tr>
        <td>Was könnten wir machen?</td>
        <td>Nein, ich habe darauf keine Lust.</td>
        <td>Ja, das ist schon möglich, aber...</td>
        <td>Ja, ich habe darauf Lust.</td>
        <td>In Ordnung.</td>
      </tr>
      <tr>
        <td>Hast du eine Idee?</td>
        <td>Shade/Leider, das geht nicht.</td>
        <td>Ich finde das besser, weil...</td>
        <td>Das geht.</td>
        <td>Das ist ein guter Vorschlag.</td>
      </tr>
      <tr>
        <td>Was hältst du davon?</td>
        <td>Ich würde gern kommen, aber...</td>
        <td>Ich würde eigentlich lieber...<span className="fst-italic">infinitiv</span>.</td>
        <td>Ich würde gern kommen.</td>
        <td>Einverstanden!</td>
      </tr>
      <tr>
        <td>Lass uns doch...(ins Kino gehen).</td>
        <td>Tut mir sehr Leid, aber...</td>
        <td>Ich habe darauf keine Lust, aber wir könnten...<span className="fst-italic">infinitiv</span>.</td>
        <td>Ich komme gern mit.</td>
        <td>Da hast du völlig recht.</td>
      </tr>
      <tr>
        <td>Wie wäre sie, wenn...?</td>
        <td>Das kommt für mich nicht infrage.</td>
        <td>Woran müssen wir noch denken?</td>
        <td>Guter Vorschlag.</td>
        <td>Lass uns das machen.</td>
      </tr>
      <tr>
        <td>Wir könnten doch...</td>
        <td>Muss das sein? Das ist doch langweilig.</td>
        <td>Was brauchen wir noch?</td>
        <td>Das klingt gut.</td>
        <td>Okay, das machen wir.</td>
      </tr>
      <tr>
        <td>Hast du Lust auf...?</td>
        <td>Das möchte ich wirklich nicht.</td>
        <td>Was müssen wir noch organisieren?</td>
        <td>Ich finde das gut.</td>
        <td>Ja, das können wir so machen</td>
      </tr>
      <tr>
        <td>[Vorschlag]. Was sagst du dazu?</td>
        <td>Also ich weiß nicht, das hört sich nicht so interessant an.</td>
        <td>Also, die Getränke/das Essen/die Musik haben wir jetzt organisiert.</td>
        <td>Ich bin dabei.</td>
        <td>Du hast Recht, so machen wir es.</td>
      </tr>
      <tr>
        <td>[Vorschlag]. Wie findest du das?</td>
        <td>Nein, auf keinen Fall.</td>
        <td>Können wir die Kosten teilen?</td>
        <td>Ich stimme zu.</td>
        <td/>
      </tr>
      <tr>
        <td>Mein Vorschlag ist...</td>
        <td>Filme mag ich nicht so gern, weil...</td>
        <td>Ich stimme nicht zu, aber...</td>
        <td>Das finde ich gut/super/prima.</td>
        <td/>
      </tr>
      <tr>
        <td>Was hältst du davon, wenn...?</td>
        <td>Ich stimme nicht zu, weil...</td>
        <td>Mit welchen Verkehrsmittel wollen wir fahren?</td>
        <td/>
        <td/>
      </tr>
      <tr>
        <td>Wie findest du...?</td>
        <td>Ich bin nicht dabei, weil...</td>
        <td>Mit was wollen wir fahren?</td>
        <td/>
        <td/>
      </tr>
      <tr>
        <td>Vielleicht wäre es besser, wenn...?</td>
        <td>Das Thema interessiert mich nicht.</td>
        <td>Wie wäre es, wenn wir mit dem Zug fahren?</td>
        <td/>
        <td/>
      </tr>
      <tr>
        <td/>
        <td>Ich finde das keine so gute Idee.</td>
        <td>Wir dürfen aber nicht vergessen...</td>
        <td/>
        <td/>
      </tr>
      <tr>
        <td/>
        <td>Ich bin nicht sicher, ob das geht.</td>
        <td>Weiter finde ich wichtig...</td>
        <td/>
        <td/>
      </tr>
      <tr>
        <td/>
        <td>Ich glaube nicht, dass wir dafür genug Geld/Zeit/Leute haben.</td>
        <td/>
        <td/>
        <td/>
      </tr>
      </tbody>
    </table>
  </div>
}

export default Planen;