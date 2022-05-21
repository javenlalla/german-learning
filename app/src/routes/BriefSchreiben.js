import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TopicHeader from "../features/layout/TopicHeader";
import Section from "../features/layout/Section";
import SubSection from "../features/layout/SubSection";
import HilfreicheSatze from "../features/briefSchreiben/HilfreicheSatze";

const letters = [
  // {
  //   type: '',
  //   title: '',
  //   subject: '',
  //   greeting: '',
  //   closing: '',
  //   closingName: '',
  //   content: '',
  // },
  {
    type: 'Krankmelden',
    title: 'Formell | Krankmelden',
    subject: 'Entschuldigung',
    greeting: 'Sehr geehrte Frau Schneider',
    closing: 'Mit freundlichen Grüßen',
    closingName: 'Frau Wagner',
    content: 'ich schreibe Ihnen, weil meine Tochter Krank ist. Leider kann sie deshalb nicht zur Schule kommen. Gestern waren wir beim Arzt. Der Arzt hat gesagt, dass sie eine Erkältung und Fieber hat und zu Hause bleiben soll. Ich weiß nicht, wann sie wieder in die Schule kommt. Wenn es ihr besser geht, kommt sie natürlich wieder in die Schule. Ich habe Ihnen die Krankmeldung schon geschickt. Ich würde gern trotzdem die Hausaufgaben mit ihr machen. Könnten Sie mir bitte die Hausaufgaben per E-mail schicken? Meine E-Mail Adresse ist krank@melden.com.<br/>Ich bedanke mich für Ihr Verständnis.',
  },
  {
    type: 'Einladung',
    title: 'Informell | Einladung (Absagen)',
    subject: 'Antwort auf Einladung / Einladung Absagen',
    greeting: 'Liebe Theresa',
    closing: 'Liebe Grüße',
    closingName: 'Lara',
    content: 'vielen Dank für die Einladung. Ich habe mich sehr gefreut. Ich würde gern zu deiner Party kommen, aber leider bin ich dieses Wochenende nicht in Regensburg. Meine Mutter ist krank und ich muss mich dieses Wochenende um sie kümmern. Ich habe ein Vorschlag. Hast du nächste Woche Zeit? Ich würde gern mit dir einen Kaffee trinken. Ich habe auch ein Geschenk für dich gekauft. Ich gebe es dir, wenn wir uns nächste Woche sehen. Ich wünsche dir alles Gute zum Geburtstag. Ich wünsche euch eine tolle Party und viel Spaß.<br/>Ich warte auf deine Antwort.',
  },
  {
    type: 'Einladung',
    title: 'Informell | Einladung (Absagen)',
    subject: 'Besprechung',
    greeting: 'Liebe Kollegen und Kolleginnen',
    closing: 'Liebe Grüße',
    closingName: 'Herr/Frau Nachname',
    content: 'ich schreibe euch, weil ich am nächsten Dienstag an einer Besprechung teilnehmen soll. Leider muss ich aber den Chef auf einer Dienstreise begleiten, deshalb kann ich an der Besprechung nicht teilnehmen. Die Dienstreise dauert drei Tage, von Montag bis Mittwoch. Ich habe eine Frage. Wann ist der nächste Termin für die Besprechung? Damit ich wieder dabei bin. Ich möchte noch wissen, wer kann einen Bericht über die Besprechung schreiben? Ich würde mich freuen, wenn mir jemand den Bericht per E-Mail sendet. Ich möchte alle Informationen von der Besprechung. Vielen Dank für euer Verständnis. Ich freue mich auf eine Antwort.',
  },
  {
    type: 'Krankmelden',
    title: 'Formell | Lehrerin E-Mail',
    subject: 'Krankmelden',
    greeting: 'Sehr geehrte / Liebe Frau Meier',
    closing: 'Mit freundlichen Grüßen',
    closingName: 'Herr/Frau Nachname',
    content: 'ich schreibe Ihnen, weil mein Sohn sich am Wochenende beim Fußball spielen den Fuß verletzt hat. Er kann ein paar Tage nicht laufen und deshalb nicht zur Schule kommen. Der Arzt hat gesagt, dass mein Sohn eine Woche im Bett bleiben soll. Dann kommt er natürlich wieder in die Schule. Ich entschuldige sein Fehlen. Wir haben vom Arzt eine Bescheinigung bekommen. Wenn mein Sohn wieder in die Schule kommt, bringt er die Bescheinigung mit. Ich hätte noch eine Frage. Könnten Sie mir die Hausaufgaben per E-Mail senden? Mein E-Mail-Adresse ist [E-Mail]. Ich bedanke mich im Voraus.',
  },
  {
    type: 'Einladung',
    title: 'Formell | Einladung (Absagen)',
    subject: 'Weihnachtsfeier',
    greeting: 'Sehr geehrte Herr Hans',
    closing: 'Mit freundlichen Grüßen',
    closingName: 'Name',
    content: 'ich schreibe Ihnen, weil ich nicht am Freitagabend an der Weihnachtsfeier teilnehmen kann. Vielen Dank für die Einladung. Am Freitagabend haben meine ihr Weihnachtskonzert in der Schule. Sie singen im Konzert und ich möchte zuhören. Ich hoffe, dass die Feier toll ist.<br/>Ich wünsche Ihnen Frohe Weihnachten.',
  },
  {
    type: 'Einladung',
    title: 'Halb-Formell | Einladung',
    subject: 'Einladung',
    greeting: 'Liebe Nachbarn',
    closing: 'Liebe Grüße',
    closingName: 'Vorname Nachname',
    content: 'ich schreibe Ihnen, weil ich Ihre neue Nachbarin bin und mich vorstellen möchte. Ich bin vor zwei Wochen in diese Wohnung eingezogen und würde Sie gern zu Kaffee und Kuchen einladen. Ich heiße Vorname Nachname und bin 30 Jahre alt. Ich bin verheiratet und habe zwei Kinder. Ich wohne im dritten Stock. Das Treffen würde am Samstag, um 14 Uhr bei mir zu House stattfinden. Hätten Sie Zeit? Ich würde mich über eine Antwort freuen. Bitte rufen Sie mich unter folgender Nummer: 0781-54321 an, wenn Sie kommen. Ich freue mich auf Samstag.',
  },
  {
    type: 'Reklamation',
    title: 'Formell | Kaputt PC',
    subject: 'Reklamation',
    greeting: 'Sehr geehrte Damen und Herren',
    closing: 'Mit freundlichen Grüßen',
    closingName: 'Vorname Nachname',
    content: 'ich schreibe Ihnen, weil ich vor zwei Tagen in Ihrem Interntshop einen Computer gekauft habe. Leider funktioniert der Computer jetzt nicht, weil die Tastatur kaputt ist. Ich habe erst gestern diesen Fehler entdeckt. Ich hätte eine Frage. Könnten Sie mir bitte einen neuen Computer schicken? Ich habe noch Garantie. Ich sende Ihnen den alten Computer zurück. Würden Sie mir bitte schreiben, wann ich einen neuen Computer bekomme? Ich warte auf Ihre Antwort und bedanke mich für Ihr Verständnis.',
  },
  {
    type: 'Einladung',
    title: 'Formell | Einladung (Absagen)',
    subject: 'Einladung Absagen',
    greeting: 'Liebe Sara',
    closing: 'Liebe Grüße',
    closingName: 'Vorname',
    content: 'ich bedanke mich für deine Einladung. Es tut mir leid, aber leider kann ich nicht zu deiner Geburtstagsparty kommen. Ich habe keine Zeit. Ich muss mich um meine Kinder kümmern. Sie können nicht alleine zu Hause bleiben, weil mein Mann am Samstagabend arbeiten muss. Deshalb kann ich nicht kommen. Trotzdem wünsche ich dir alles Gute zum Geburtstag. Ich würde mich gern mit dir treffen und deinen Geburtstag nochmal feiern. Ich habe eine Vorschlag. Wollen wir nächsten Samstag zusammen einen Kaffee trinken? Ich habe ein Geschenk für dich gekauft und würde es dir gern geben. Hast du nächsten Samstag Zeit. Ich warte auf deine Antwort.',
  },
  {
    type: 'Bewerbung',
    title: 'Bürokauffrau',
    subject: 'Bürokauffrau',
    greeting: 'Sehr geehrte Damen und Herren',
    closing: 'Mit freundlichen Grüßen',
    closingName: 'Vorname Nachname',
    content: 'ich schreibe Ihnen heute, weil ich im Internet Ihre Stellenanzeige gelesen habe und ich mich für die Arbeit als Bürokauffrau interessiere. Mein Name ist Laura Nowak, ich bin 30 Jahre alt und komme aus Russland.<br/><br/>Nach dem Abitur habe ich eine Ausbildung als Bürokauffrau gemacht. In den letzten 2 Jahren habe ich bei der Firma Siemens gearbeitet. Ich habe eine selbstständige Arbeitsweise und ich bin organisiert und flexibel. Meine Mutter sprache ist Russisch. Ich spreche sehr gut Deutsch, auch gut Englisch und ein bisschen Spanisch. Ich habe sehr gute Kenntnisse in Microsoft Office.<br/><br/>Über eine Einladung zu einem persönlichen Gespräch würde ich mich freuen. Am besten erreichen Sie mich unter folgender Telefonnummer: 0174 123-5498.',
  },
];

const BriefSchreiben = () => {
  const [filteredLetters, setFilteredLetters] = useState(letters);
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    let updatedFilteredLetters = letters.slice();
    if (selectedType.length > 0) {

      updatedFilteredLetters = letters.filter(letter => {
        if (letter.type === selectedType) {
          return letter;
        }
      })
    }

    setFilteredLetters(updatedFilteredLetters);
  }, [selectedType]);

  const lettersRender = filteredLetters.map((letter, index) => {
    let badgeStyle = '';
    switch (letter.type) {
      case 'Einladung':
        badgeStyle = 'bg-primary';
        break;

      case 'Krankmelden':
        badgeStyle = 'bg-success';
        break;

      case 'Reklamation':
        badgeStyle = 'bg-info';
        break;

      case 'Bewerbung':
        badgeStyle = 'bg-warning';
        break;
    }

    badgeStyle = `badge ${badgeStyle}`;

    return <div key={index}>
      <h4><span className={badgeStyle}>{letter.type}</span> {letter.title}</h4>
      <Brief  subject={letter.subject} greeting={letter.greeting} closing={letter.closing} closingName={letter.closingName} type={letter.type}>
        {letter.content}
      </Brief>
    </div>
  });

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

        <HilfreicheSatze/>

        <SubSection header="Beispiele">
          <div className="my-4">
            <button type="button" className="btn mx-2 btn-sm btn-outline-secondary"
                    onClick={() => setSelectedType("")}>Alles</button>
            <button type="button" className={`btn mx-2 btn-sm btn-outline-primary ${selectedType === 'Einladung' ? 'active': ''}`}
                    onClick={() => setSelectedType("Einladung")}>Einladung</button>
            <button type="button" className={`btn mx-2 btn-sm btn-outline-success ${selectedType === 'Krankmelden' ? 'active': ''}`}
                    onClick={() => setSelectedType("Krankmelden")}>Krankmelden</button>
            {/*<button type="button" className={`btn mx-2 btn-sm btn-outline-danger ${filterTags.includes("bank") ? 'active': ''}`} onClick={() => updateFilterTags("bank")}>Bank</button>*/}
            <button type="button" className={`btn mx-2 btn-sm btn-outline-info ${selectedType === 'Reklamation' ? 'active': ''}`}
                    onClick={() => setSelectedType("Reklamation")}>Reklamation</button>
            <button type="button" className={`btn mx-2 btn-sm btn-outline-warning ${selectedType === 'Bewerbung' ? 'active': ''}`}
                    onClick={() => setSelectedType("Bewerbung")}>Bewerbung</button>
            <button type="button" className="btn mx-2 btn-sm btn-outline-dark">Dark</button>
          </div>

          {lettersRender}
        </SubSection>

        {/*<SubSection header="Beispiel 1">*/}
        {/*  <h3>Informell | Einladung (Positiv)</h3>*/}
        {/*  <Brief subject="Einladung" greeting="Liebe Jana" closing="Viele Grüße" closingName="Name">*/}
        {/*    Danke für die Einladung. Das Fest klingt sehr lustig und ich werde kommen. Ich kann einen Apfelkuchen mitbringen.*/}
        {/*    Ist das okay für dich? Und noch eine Frage. Kann ich bitte meinen Hund mitbringen?*/}
        {/*    <br/>*/}
        {/*    Vielen Dank!*/}
        {/*  </Brief>*/}
        {/*</SubSection>*/}

        {/*<SubSection header="Beispiel 2">*/}
        {/*  <h3>Informell | Vergangenheit Veranstaltung</h3>*/}
        {/*  <Brief subject="Hochzeit" greeting="Lieber Jonas" closing="Liebe Grüße" closingName="Name">*/}
        {/*    Wie gehts dir? Ich will dir über eine sehr schöne Hochzeit erzählen. Vor vier Jahren hatte der Cousin von meiner Frau seine Hochzeit.*/}
        {/*    Der Cousin heißt Julian. Es war unglaublich! Die Hochzeit war in einem Schloss in Prag mit 100 Gästen.*/}
        {/*    Das Schloss war sehr groß und alt. Die Trauung war in dem Schloss. Julian hat einen schwarzen Anzug getragen und seine Braut hat eine weißes Brautkleid getragen.*/}
        {/*    <br/>*/}
        {/*    <br/>*/}
        {/*    Nach der Trauung sind das Brautpaar und die Gäste mit Segways gefahren. Das war sehr schön/cool.*/}
        {/*    Danach sind wir für Hochzeitessen in das Schloss gegangen. Wir hatten italienisches Essen und es war sehr lecker.*/}
        {/*    Dann hat das Brautpaar die Torte angeschnitten. Danach haben wir all getanzt. Wir hatten viel Spaß!*/}
        {/*    Ich hoffe alles ist gut bei dir. Bis bald.*/}
        {/*  </Brief>*/}
        {/*</SubSection>*/}

        {/*<SubSection header="Beispiel 3">*/}
        {/*  <h3>Formell | Einladung (Absagen)</h3>*/}
        {/*  <Brief subject="Weihnachtsfeier" greeting="Sehr geehrte Herr Hans" closing="Mit freundlichen Grüßen" closingName="Name">*/}
        {/*    ich schreibe Ihnen, weil ich nicht am Freitagabend an der Weihnachtsfeier teilnehmen kann. Vielen Dank für die Einladung.*/}
        {/*    Am Freitagabend haben meine ihr Weihnachtskonzert in der Schule. Sie singen im Konzert und ich möchte zuhören.*/}
        {/*    Ich hoffe, dass die Feier toll ist.*/}
        {/*    <br/>*/}
        {/*    Ich wünsche Ihnen Frohe Weihnachten.*/}
        {/*  </Brief>*/}
        {/*</SubSection>*/}

        {/*<SubSection header="Beispiel 4">*/}
        {/*  <h3>Formell | Lehrerin E-Mail</h3>*/}
        {/*  <Brief subject="Entschuldigung" greeting="Sehr geehrte / Liebe Frau Meier" closing="Mit freundlichen Grüßen" closingName="Herr/Frau Nachname">*/}
        {/*    ich schreibe Ihnen, weil mein Sohn sich am Wochenende beim Fußball spielen den Fuß verletzt hat. Er kann ein paar Tage*/}
        {/*    nicht laufen und deshalb nicht zur Schule kommen.*/}
        {/*    Der Arzt hat gesagt, dass mein Sohn eine Woche im Bett bleiben soll. Dann kommt er natürlich wieder in die Schule.*/}
        {/*    Ich entschuldige sein Fehlen. Wir haben vom Arzt eine Bescheinigung bekommen. Wenn mein Sohn wieder in die Schule kommt,*/}
        {/*    bringt er die Bescheinigung mit. Ich hätte noch eine Frage. Könnten Sie mir die Hausaufgaben per E-Mail senden?*/}
        {/*    Mein E-Mail-Adresse ist [E-Mail]. Ich bedanke mich im Voraus.*/}
        {/*  </Brief>*/}
        {/*</SubSection>*/}

        {/*<SubSection header="Beispiel 5">*/}
        {/*  <h3>Informell | Arbeit E-Mail</h3>*/}
        {/*  <Brief subject="Besprechung" greeting="Liebe Kollegen und Kolleginnen" closing="Liebe Grüße" closingName="Herr/Frau Nachname">*/}
        {/*    ich schreibe euch, weil ich am nächsten Dienstag an einer Besprechung teilnehmen soll. Leider muss ich aber den Chef*/}
        {/*    auf einer Dienstreise begleiten, deshalb kann ich an der Besprechung nicht teilnehmen.*/}
        {/*    Die Dienstreise dauert drei Tage, von Montag bis Mittwoch. Ich habe eine Frage. Wann ist der nächste Termin für die*/}
        {/*    Besprechung? Damit ich wieder dabei bin. Ich möchte noch wissen, wer kann einen Bericht über die Besprechung schreiben?*/}
        {/*    Ich würde mich freuen, wenn mir jemand den Bericht per E-Mail sendet. Ich möchte alle Informationen von der Besprechung.*/}
        {/*    Vielen Dank für euer Verständnis. Ich freue mich auf eine Antwort.*/}
        {/*  </Brief>*/}
        {/*</SubSection>*/}

        {/*<SubSection header="Beispiel 6">*/}
        {/*  <h3>Informell | Einladung (Absagen)</h3>*/}
        {/*  <Brief subject="Antwort auf Einladung / Einladung Absagen" greeting="Liebe Theresa" closing="Liebe Grüße" closingName="Lara">*/}
        {/*    vielen Dank für die Einladung. Ich habe mich sehr gefreut. Ich würde gern zu deiner Party kommen, aber leider*/}
        {/*    bin ich dieses Wochenende nicht in Regensburg. Meine Mutter ist krank und ich muss mich dieses Wochenende um*/}
        {/*    sie kümmern. Ich habe ein Vorschlag. Hast du nächste Woche Zeit? Ich würde gern mit dir einen Kaffee trinken.*/}
        {/*    Ich habe auch ein Geschenk für dich gekauft. Ich gebe es dir, wenn wir uns nächste Woche sehen. Ich wünsche dir*/}
        {/*    alles Gute zum Geburtstag. Ich wünsche euch eine tolle Party und viel Spaß.*/}
        {/*    <br/>*/}
        {/*    Ich warte auf deine Antwort.*/}
        {/*  </Brief>*/}
        {/*</SubSection>*/}

        {/*<SubSection header="Beispiel 7">*/}
        {/*  <h3>Formell | Krankmelden</h3>*/}
        {/*  <Brief subject="Entschuldigung" greeting="Sehr geehrte Frau Schneider" closing="Mit freundlichen Grüßen" closingName="Frau Wagner">*/}
        {/*    ich schreibe Ihnen, weil meine Tochter Krank ist. Leider kann sie deshalb nicht zur Schule kommen.*/}
        {/*    Gestern waren wir beim Arzt. Der Arzt hat gesagt, dass sie eine Erkältung und Fieber hat und zu Hause*/}
        {/*    bleiben soll. Ich weiß nicht, wann sie wieder in die Schule kommt. Wenn es ihr besser geht, kommt sie*/}
        {/*    natürlich wieder in die Schule. Ich habe Ihnen die Krankmeldung schon geschickt. Ich würde gern trotzdem die*/}
        {/*    Hausaufgaben mit ihr machen. Könnten Sie mir bitte die Hausaufgaben per E-mail schicken? Meine E-Mail Adresse*/}
        {/*    ist krank@melden.com.*/}
        {/*    <br/>*/}
        {/*    Ich bedanke mich für Ihr Verständnis.*/}
        {/*  </Brief>*/}
        {/*</SubSection>*/}
      </Section>

    </>
  )
}

const Brief = (props) => {
  const date = getRandomInt(1,30);
  const month = getRandomInt(1,12);

  let betreff = `Betreff: ${props.subject}`;
  if (props.type === 'Bewerbung') {
    betreff = `Bewerbung als ${props.subject}`;
  }

  return (
    <div className="alert alert-light">
      <p className="float-end">Regensburg, {date}.{month}.2022</p>
      <br/>
      <p>{betreff}</p>
      <br/>

      <p>{props.greeting},</p>
      <br/>
      <p dangerouslySetInnerHTML={ { __html: props.children}} />
      <br/>
      <p>{props.closing},</p>
      <p>{props.closingName}</p>
    </div>
    )
}

Brief.propTypes = {
  type: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  greeting: PropTypes.string.isRequired,
  closing: PropTypes.string.isRequired,
  closingName: PropTypes.string.isRequired,
}

// Get random integer between the provided min and max values.
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


export default BriefSchreiben;