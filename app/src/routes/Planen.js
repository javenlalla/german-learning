import React from 'react';
import Case from "../features/text/Case";
import Gender from "../features/text/Gender";
import Card from "../features/layout/Card";
import TopicHeader from "../features/layout/TopicHeader";
import Section from "../features/layout/Section";

const Planen = () => {
  return (<>
      <TopicHeader header="Planen"/>

      <Section>
        <h2>Könnten</h2>
        <div className="table-responsive text-nowrap">
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

        <ul>
          <li>Ich habe eine Idee.</li>
          <li>Ich habe einen Vorschlag.</li>
          <li>Ich schlage vor, dass...
            <ul>
              <li>Ich schlage vor, dass wir eine Rundfahrt machen.</li>
            </ul>
          </li>
          <li>Was könnten wir machen?</li>
          <li>Hast du eine Idee?</li>
          <li>Was hältst du davon?</li>
        </ul>

        <h2 className="my-4">Vorschlag Und Reaktion</h2>
        <VorschlagTable/>

        <h2>Beispiel Gespräch 1</h2>
        <p className="text-primary"><span className="fw-bold">Julian:</span> Hallo, wie geht es dir?</p>
        <p className="text-danger"><span className="fw-bold">Heidi</span>: Hallo, mir geht es gut danke und dir?</p>
        <p className="text-primary"><span className="fw-bold">J:</span> Gut, danke. Ich habe eine gute Idee. Wollen wir am Wochenende nach Pray fahren?</p>
        <p className="text-danger"><span className="fw-bold">H:</span> Ja, das ist eine gute Idee. Aber ich habe Freitag beider keine Zeit. Vielleicht passt dir Samstag besser?</p>
        <p className="text-primary"><span className="fw-bold">J:</span> Ja, das passt. Am Samstag habe ich Zeit. Wir könnten mit dem Zug oder mit dem Auto fahren</p>
        <p className="text-danger"><span className="fw-bold">H:</span> A Mit dem Zug habe ich Angst, aber mit dem Auto passt mir das besser. Wir könnten mit meinem Auto fahren.</p>
        <p className="text-primary"><span className="fw-bold">J:</span> Ok. Super Idee! Also, können min so mehr von der Stadt sehen.</p>
        <p className="text-danger"><span className="fw-bold">H:</span> Wollen wir die Stadt ansehen? Dort gibt es viele Sehenswürdigkeiten. Wir könnten sie besichtigen.</p>
        <p className="text-primary"><span className="fw-bold">J:</span> Das klingt gut. Ich habe noch eine Idee. Wir könnten auch eine Schifffahrt machen. Prag ist eine schöne Stadt. Hast du Lust?</p>
        <p className="text-danger"><span className="fw-bold">H:</span> Ja, darauf habe ich Lust. Das gefällt mir gut!</p>
        <p className="text-primary"><span className="fw-bold">J:</span> Weißt du, wo wir übernachten können?</p>
        <p className="text-danger"><span className="fw-bold">H:</span> Wir könnten in einer Pension übernachten, was the weil sie billiger ist und weil wir zwei Tage bleiben. Was hältst du davon?</p>
        <p className="text-primary"><span className="fw-bold">J:</span> Das ist ein guter Vorschlag. Ich suche im Internet nach einem Angebot.</p>
        <p className="text-danger"><span className="fw-bold">H:</span> Vielen Dank. Ich marte auf deine Antwort. Dann, bis Samstag!</p>
        <p className="text-primary"><span className="fw-bold">J:</span> Bis Samstag! Tschüs!</p>

        <h2>Beispiel Gespräch 2</h2>
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
        <td>Ich habe da einen Vorschlag. Wollen wir...?</td>
        <td>Nein, das passt mir nicht.</td>
        <td>Ich mag lieber...</td>
        <td>Ja, das passt mir.</td>
        <td>Genau!</td>
      </tr>
      <tr>
        <td>Habt ihr Lust auf...?</td>
        <td>Nein, das ist keine gute Idee.</td>
        <td>Die Idee ist toll, ich würde aber lieber...</td>
        <td>Ja, das ist eine gute Idee.</td>
        <td>Das finde ich auch.</td>
      </tr>
      <tr>
        <td>Wir könnten doch...Das ist sicher interessant/lustig/spannend, weil...</td>
        <td>Nein, das gefällt mir nicht.</td>
        <td>Ich würde lieber...</td>
        <td>Ja, das/die Idee gefällt mir gut.</td>
        <td>Gut, dann...</td>
      </tr>
      <tr>
        <td>Wie wäre sie, wenn...?</td>
        <td>Nein, ich habe darauf keine Lust.</td>
        <td>Ja, das ist schon möglich, aber...</td>
        <td>Ja, ich habe darauf Lust.</td>
        <td>In Ordnung.</td>
      </tr>
      <tr>
        <td>Lass uns doch...(ins Kino gehen).</td>
        <td>Shade/Leider, das geht nicht.</td>
        <td>Ich finde das besser, weil...</td>
        <td>Das geht.</td>
        <td>Das ist ein guter Vorschlag.</td>
      </tr>
      <tr>
        <td/>
        <td>Ich würde gern kommen, aber...</td>
        <td>Ich würde eigentlich lieber...<span className="fst-italic">infinitiv</span>.</td>
        <td>Ich würde gern kommen.</td>
        <td>Einverstanden.</td>
      </tr>
      <tr>
        <td/>
        <td>Tut mir sehr Leid, aber...</td>
        <td>Ich habe darauf keine Lust, aber wir könnten...<span className="fst-italic">infinitiv</span>.</td>
        <td>Ich komme gern mit.</td>
        <td>Da hast du völlig recht.</td>
      </tr>
      <tr>
        <td/>
        <td>Das kommt für mich nicht infrage.</td>
        <td/>
        <td>Guter Vorschlag.</td>
        <td>Lass uns das machen.</td>
      </tr>
      <tr>
        <td/>
        <td>Muss das sein? Das ist doch langweilig.</td>
        <td/>
        <td>Das klingt gut.</td>
        <td>Okay, das machen wir.</td>
      </tr>
      <tr>
        <td/>
        <td>Das möchte ich wirklich nicht.</td>
        <td/>
        <td/>
        <td/>
      </tr>
      <tr>
        <td/>
        <td>Also ich weiß nicht, das hört sich nicht so interessant an.</td>
        <td/>
        <td/>
        <td/>
      </tr>
      <tr>
        <td/>
        <td>Nein, auf keinen Fall.</td>
        <td/>
        <td/>
        <td/>
      </tr>
      <tr>
        <td/>
        <td>Filme mag ich nicht so gern, weil...</td>
        <td/>
        <td/>
        <td/>
      </tr>
      <tr>
        <td/>
        <td>Das Thema interessiert mich nicht.</td>
        <td/>
        <td/>
        <td/>
      </tr>
      <tr>
        <td/>
        <td>Ich finde das keine so gute Idee.</td>
        <td/>
        <td/>
        <td/>
      </tr>
      </tbody>
    </table>

    --Vorschläge machen
    Ich schlage vor, dass wir...
    Ich habe eine Idee: Wir...
    Wir könnten doch...

    --Um Vorschläge bitten
    Hast du eine Idee?
    Wie sollen wir das machen?

    --Vorschläge annehmen
    Das ist eine gute/tolle Idee.
    Ja, das finde ich gut.
    Gut, einverstanden!
    Ja, das können wir so machen.

    --Missverständnisse klären
    Ach so, das habe ich falsch verstanden. Ich meine, wir...
    Entschuldigung, das hatte ich anders gemeint.
    Ich möchte, dass wir...

    --Nachfragen/Um Wiederholung bitten
    Kannst du das bitte wiederholen?
    Kannst du bitte langsamer sprechen?
    Wie meinst du das?
    Das habe ich noch nicht verstanden. Bitte erklär mir das noch mal.
    "Wer macht was?" - Was bedeutet das?
    "Sigara Börek" - Was ist das denn?

    --Über Probleme sprechen
    Ich bin nicht sicher, ob das geht.
    Ich glaube nicht, dass wir dafür genug Geld/Zeit/Leute haben.
    Können wir das denn bezahlen?
    Schaffen wir das in der Zeit?
    Es gibt ein Problem:...

    --Kompromisse machen
    Gut, machen wir das so.
    Einverstanden, dann kaufen wir die Getränke bei...
    Was hältst du von folgendem Kompromiss?
    Zuerst organisieren wir das Essen und dann die Musik.

    --Zum nächsten Punkt kommen
    Also, die Getränke haben wir jetzt organisiert.
    Was machen wir mit dem Essen?
    Was brauchen wir noch?
    Woran müssen wir noch denken?
    Was müssen wir noch organisieren?

  </div>
}

export default Planen;