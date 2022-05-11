import React from 'react';
import PropTypes from 'prop-types';
import TopicHeader from "../features/layout/TopicHeader";
import Section from "../features/layout/Section";
import SubSection from "../features/layout/SubSection";

const BriefSchreiben = () => {
  return (<>
      <TopicHeader header="Brief Schreiben"/>

      <Section>
        <h2>Grußformeln</h2>
        <div className="table-responsive text-nowrap">
          <table className="table">
            <thead>
            <tr>
              <th>Informell</th>
              <th>Formell</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Lieber Thomas</td>
              <td>Sehr geehrter Herr Müller</td>
            </tr>
            <tr>
              <td>Liebe Julia</td>
              <td>Sehr geehrte Frau Winter</td>
            </tr>
            <tr>
              <td>Liebe Julia und Thomas</td>
              <td>Sehr geehrte Frau Winter und Herr Müller</td>
            </tr>
            <tr>
              <td/>
              <td>Sehr geehrte Damen und Herren.</td>
            </tr>
            <tr>
              <td>Liebe Grüße</td>
              <td>Mit freundlichen Grüßen</td>
            </tr>
            <tr>
              <td>Viele Grüße</td>
              <td/>
            </tr>
            <tr>
              <td>Beste Grüße</td>
              <td/>
            </tr>
            </tbody>
          </table>
        </div>

        <h2>Hilfreiche Sätze</h2>
        <table className="table">
          <tbody>
          <tr>
            <td>
              Danke für die Einladung.
              <br/>
              Vielen Dank für die Einladung.
            </td>
          </tr>
          <tr>
            <td>
              Ich schreibe Ihnen, weil...
              <br/>
              Ich schreibe dir, weil...
            </td>
          </tr>
          <tr>
            <td>
              Ich habe eine Frage.
              <br/>
              Ich habe ein Vorschlag.
            </td>
          </tr>
          <tr>
            <td>
              Vielen Dank für dein Verständnis.
              <br/>
              Vielen Dank für Ihr Verständnis.
              <br/>
              Vielen Dank für euer Verständnis.
            </td>
          </tr>
          <tr>
            <td>
              Ich warte auf deine Antwort.
              <br/>
              Ich freue mich auf eine Antwort.
            </td>
          </tr>
          <tr>
            <td>
              Ich würde mich freuen, wenn...
            </td>
          </tr>
          <tr>
            <td>
              Positiv | Ich würde gern zu deiner Party kommen.
              <br/>
              Negativ | Ich würde gern zu deiner Party kommen, aber...
            </td>
          </tr>
          <tr>
            <td>
              Ich wünsche dir...
              <br/>
              Ich wünsche Ihnen...
              <br/>
              Ich wünsche dir alles Gute zum Geburtstag.
              <br/>
              Ich wünsche euch eine tolle Party und viel Spaß.
            </td>
          </tr>
          <tr>
            <td>
              Ich bin froh, dass...
            </td>
          </tr>
          </tbody>
        </table>

        <SubSection header="Beispiel 1">
          <h3>Informell | Einladung (Positiv)</h3>
          <Brief subject="Einladung" greeting="Liebe Jana" closing="Viele Grüße" closingName="Name">
            Danke für die Einladung. Das Fest klingt sehr lustig und ich werde kommen. Ich kann einen Apfelkuchen mitbringen.
            Ist das okay für dich? Und noch eine Frage. Kann ich bitte meinen Hund mitbringen?
            <br/>
            Vielen Dank!
          </Brief>
        </SubSection>

        <SubSection header="Beispiel 2">
          <h3>Informell | Vergangenheit Veranstaltung</h3>
          <Brief subject="Hochzeit" greeting="Lieber Jonas" closing="Liebe Grüße" closingName="Name">
            Wie gehts dir? Ich will dir über eine sehr schöne Hochzeit erzählen. Vor vier Jahren hatte der Cousin von meiner Frau seine Hochzeit.
            Der Cousin heißt Julian. Es war unglaublich! Die Hochzeit war in einem Schloss in Prag mit 100 Gästen.
            Das Schloss war sehr groß und alt. Die Trauung war in dem Schloss. Julian hat einen schwarzen Anzug getragen und seine Braut hat eine weißes Brautkleid getragen.
            <br/>
            <br/>
            Nach der Trauung sind das Brautpaar und die Gäste mit Segways gefahren. Das war sehr schön/cool.
            Danach sind wir für Hochzeitessen in das Schloss gegangen. Wir hatten italienisches Essen und es war sehr lecker.
            Dann hat das Brautpaar die Torte angeschnitten. Danach haben wir all getanzt. Wir hatten viel Spaß!
            Ich hoffe alles ist gut bei dir. Bis bald.
          </Brief>
        </SubSection>

        <SubSection header="Beispiel 3">
          <h3>Formell | Einladung (Negativ)</h3>
          <Brief subject="Weihnachtsfeier" greeting="Sehr geehrte Herr Hans" closing="Mit freundlichen Grüßen" closingName="Name">
            ich schreibe Ihnen, weil ich nicht am Freitagabend an der Weihnachtsfeier teilnehmen kann. Vielen Dank für die Einladung.
            Am Freitagabend haben meine ihr Weihnachtskonzert in der Schule. Sie singen im Konzert und ich möchte zuhören.
            Ich hoffe, dass die Feier toll ist.
            <br/>
            Ich wünsche Ihnen Frohe Weihnachten.
          </Brief>
        </SubSection>

        <SubSection header="Beispiel 4">
          <h3>Formell | Lehrerin E-Mail</h3>
          <Brief subject="Entschuldigung" greeting="Sehr geehrte / Liebe Frau Meier" closing="Mit freundlichen Grüßen" closingName="Herr/Frau Nachname">
            ich schreibe Ihnen, weil mein Sohn sich am Wochenende beim Fußball spielen den Fuß verletzt hat. Er kann ein paar Tage
            nicht laufen und deshalb nicht zur Schule kommen.
            Der Arzt hat gesagt, dass mein Sohn eine Woche im Bett bleiben soll. Dann kommt er natürlich wieder in die Schule.
            Ich entschuldige sein Fehlen. Wir haben vom Arzt eine Bescheinigung bekommen. Wenn mein Sohn wieder in die Schule kommt,
            bringt er die Bescheinigung mit. Ich hätte noch eine Frage. Könnten Sie mir die Hausaufgaben per E-Mail senden?
            Mein E-Mail-Adresse ist [E-Mail]. Ich bedanke mich im Voraus.
          </Brief>
        </SubSection>

        <SubSection header="Beispiel 5">
          <h3>Informell | Arbeit E-Mail</h3>
          <Brief subject="Besprechung" greeting="Liebe Kollegen und Kolleginnen" closing="Liebe Grüße" closingName="Herr/Frau Nachname">
            ich schreibe euch, weil ich am nächsten Dienstag an einer Besprechung teilnehmen soll. Leider muss ich aber den Chef
            auf einer Dienstreise begleiten, deshalb kann ich an der Besprechung nicht teilnehmen.
            Die Dienstreise dauert drei Tage, von Montag bis Mittwoch. Ich habe eine Frage. Wann ist der nächste Termin für die
            Besprechung? Damit ich wieder dabei bin. Ich möchte noch wissen, wer kann einen Bericht über die Besprechung schreiben?
            Ich würde mich freuen, wenn mir jemand den Bericht per E-Mail sendet. Ich möchte alle Informationen von der Besprechung.
            Vielen Dank für euer Verständnis. Ich freue mich auf eine Antwort.
          </Brief>
        </SubSection>

        <SubSection header="Beispiel 6">
          <h3>Informell | Einladung (Negativ)</h3>
          <Brief subject="Antwort auf Einladung / Einladung Absagen" greeting="Liebe Theresa" closing="Liebe Grüße" closingName="Lara">
            vielen Dank für die Einladung. Ich habe mich sehr gefreut. Ich würde gern zu deiner Party kommen, aber leider
            bin ich dieses Wochenende nicht in Regensburg. Meine Mutter ist krank und ich muss mich dieses Wochenende um
            sie kümmern. Ich habe ein Vorschlag. Hast du nächste Woche Zeit? Ich würde gern mit dir einen Kaffee trinken.
            Ich habe auch ein Geschenk für dich gekauft. Ich gebe es dir, wenn wir uns nächste Woche sehen. Ich wünsche dir
            alles Gute zum Geburtstag. Ich wünsche euch eine tolle Party und viel Spaß.
            <br/>
            Ich warte auf deine Antwort.
          </Brief>
        </SubSection>

        <SubSection header="Beispiel 7">
          <h3>Formell | Krankmelden</h3>
          <Brief subject="Entschuldigung" greeting="Sehr geehrte Frau Schneider" closing="Mit freundlichen Grüßen" closingName="Frau Wagner">
            ich schreibe Ihnen, weil meine Tochter Krank ist. Leider kann sie deshalb nicht zur Schule kommen.
            Gestern waren wir beim Arzt. Der Arzt hat gesagt, dass sie eine Erkältung und Fieber hat und zu Hause
            bleiben soll. Ich weiß nicht, wann sie wieder in die Schule kommt. Wenn es ihr besser geht, kommt sie
            natürlich wieder in die Schule. Ich habe Ihnen die Krankmeldung schon geschickt. Ich würde gern trotzdem die
            Hausaufgaben mit ihr machen. Könnten Sie mir bitte die Hausaufgaben per E-mail schicken? Meine E-Mail Adresse
            ist krank@melden.com.
            <br/>
            Ich bedanke mich für Ihr Verständnis.
          </Brief>
        </SubSection>
      </Section>

    </>
  )
}

const Brief = (props) => {
  const date = getRandomInt(1,30);
  const month = getRandomInt(1,12);

  return (
    <div className="alert alert-secondary">
      <p className="float-end">Regensburg, {date}.{month}.2022</p>
      <br/>
      <p>Betreff: {props.subject}</p>
      <br/>

      <p>{props.greeting},</p>
      <br/>
      <p>
        {props.children}
      </p>
      <br/>
      <p>{props.closing},</p>
      <p>{props.closingName}</p>
    </div>
    )
}

Brief.propTypes = {
  subject: PropTypes.string.isRequired,
  greeting: PropTypes.string.isRequired,
  closing: PropTypes.string.isRequired,
  closingName: PropTypes.string.isRequired,
}

// Get random interger between the provided min and max values.
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


export default BriefSchreiben;