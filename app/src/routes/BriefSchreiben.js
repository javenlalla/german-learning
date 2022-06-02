import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TopicHeader from "../features/layout/TopicHeader";
import Section from "../features/layout/Section";
import SubSection from "../features/layout/SubSection";
import HilfreicheSatze from "../features/briefSchreiben/HilfreicheSatze";
import TableOfContents from "../features/layout/TableOfContents";

const letters = [
  {
    type: 'Entschuldigung',
    title: 'Formell | Entschuldigung | Krankes Kind',
    subject: 'Entschuldigung',
    greeting: 'Sehr geehrte Frau Schneider',
    closing: 'Mit freundlichen Grüßen',
    closingName: 'Frau Wagner',
    content: 'ich schreibe Ihnen, weil meine Tochter Krank ist. Leider kann sie deshalb nicht zur Schule kommen. Gestern waren wir beim Arzt. Der Arzt hat gesagt, dass sie eine Erkältung und Fieber hat und zu Hause bleiben soll. Ich weiß nicht, wann sie wieder in die Schule kommt. Wenn es ihr besser geht, kommt sie natürlich wieder in die Schule. Ich habe Ihnen die Krankmeldung schon geschickt. Ich würde gern trotzdem die Hausaufgaben mit ihr machen. Könnten Sie mir bitte die Hausaufgaben per E-Mail schicken? Meine E-Mail-Adresse ist krank@melden.com.<br/>Ich bedanke mich für Ihr Verständnis.',
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
    type: 'Entschuldigung',
    title: 'Formell | Lehrerin E-Mail',
    subject: 'Entschuldigung',
    greeting: 'Sehr geehrte / Liebe Frau Meier',
    closing: 'Mit freundlichen Grüßen',
    closingName: 'Herr/Frau Nachname',
    content: 'ich schreibe Ihnen, weil mein Sohn sich am Wochenende beim Fußball spielen den Fuß verletzt hat. Er kann ein paar Tage nicht laufen und deshalb nicht zur Schule kommen. Der Arzt hat gesagt, dass mein Sohn eine Woche im Bett bleiben soll. Dann kommt er natürlich wieder in die Schule. Ich entschuldige sein Fehlen. Wir haben vom Arzt eine Bescheinigung bekommen. Wenn mein Sohn wieder in die Schule kommt, bringt er die Bescheinigung mit. Ich hätte noch eine Frage. Könnten Sie mir die Hausaufgaben per E-Mail senden? Mein E-Mail-Adresse ist [E-Mail]. Ich bedanke mich im Voraus.',
  },
  {
    type: 'Einladung',
    title: 'Formell | Einladung (Absagen)',
    subject: 'Weihnachtsfeier',
    greeting: 'Sehr geehrter Herr Hans',
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
    title: 'PC',
    subject: 'Reklamation',
    greeting: 'Sehr geehrte Damen und Herren',
    closing: 'Mit freundlichen Grüßen',
    closingName: 'Vorname Nachname',
    content: 'ich schreibe Ihnen, weil ich vor zwei Tagen in Ihrem Internetshop einen Computer gekauft habe. Leider funktioniert der Computer jetzt nicht, weil die Tastatur kaputt ist. Ich habe erst gestern diesen Fehler entdeckt. Ich hätte eine Frage. Könnten Sie mir bitte einen neuen Computer schicken? Ich habe noch Garantie. Ich sende Ihnen den alten Computer zurück. Würden Sie mir bitte schreiben, wann ich einen neuen Computer bekomme? Ich warte auf Ihre Antwort und bedanke mich für Ihr Verständnis.',
  },
  {
    type: 'Reklamation',
    title: 'Kopfhörer',
    subject: 'Kopfhörer',
    greeting: 'Sehr geehrte Damen und Herren',
    closing: 'Mit freundlichen Grüßen',
    closingName: 'Vorname Nachname',
    content: 'ich schreibe Ihnen, weil ich vor 2 Wochen Kopfhörer im Internet bestellt habe. Leider musste ich feststellen, dass die Kopfhörer beschädigt sind. Das ist ein großes Problem für mich. Ich habe alles gemacht, wie es in der Bedienungsanleitung steht. Ich habe Ihnen bereits einmal eine E-Mail geschrieben, aber leider habe ich immer noch keine Antwort erhalten. Ich möchte Sie zum letzten Mal auffordern, mit bis 12.06 einen Ersatz zu schicken. Wenn ich bis zum 12.06 nicht von Ihnen höre, dann nehme ich die Bestellung zurück und ich möchte mein Geld zurückhaben.<br/>Über eine schnelle Bearbeitung würde ich mich sehr freuen.',
  },
  ,
  {
    type: 'Reklamation',
    title: 'Reisekoffer',
    subject: 'Reisekoffer',
    greeting: 'Sehr geehrte Damen und Herren',
    closing: 'Mit freundlichen Grüßen',
    closingName: 'Vorname Nachname',
    content: 'am 23.05.2022 haben Sie mir einen Reisekoffer geliefert. Leider musste ich feststellen, dass eine Rolle des Koffers beschädigt ist. Das ist sehr ärgerlich. Ich möchte Sie bitten, dass Sie die Rolle so schnell wie möglich reparieren oder mir einen Ersatz schicken. Denn ich habe Anspruch auf einen neuen Koffer. Ich brauche den Koffer nämlich dringend für meine geschäftlichen Reisen. Anbei erhalten Sie eine Kopie der Rechnung. Bitte bestätigen Sie mir schriftlich bis spätestens zum 30.06.2022, dass Sie meine Reklamation erhalten haben.<br/>Über eine schnelle Bearbeitung würde ich mich sehr freuen.',
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
  {
    type: 'Bewerbung',
    title: 'Altenpfleger',
    subject: 'Altenpfleger',
    greeting: 'Sehr geehrte Damen und Herren',
    closing: 'Mit freundlichen Grüßen',
    closingName: 'Vorname Nachname',
    content: 'mit großem Interesse habe ich Ihre Anzeige gelesen und möchte mich um die freie Stelle als Altenpfleger bewerben. Ich heiße Vorname Nachname und bin 30 Jahre alt. Ich komme aus Ungarn und seit 3 Jahren lebe ich in Deutschland.<br/><br/>Wie Sie aus meinen Unterlagen ersehen können, habe ich nach dem Schulabschluss in meinem Heimatland 5 Jahre in einem Altenheim als Altenpfleger gearbeitet. Ich habe in Deutschland 2 Monate Praktikum im Pflegedienst gemacht.<br/><br/>Meine Muttersprache ist Ungarisch aber ich spreche auch gut Rumänisch und ich haben einen Deutsch-Integrationskurs gemacht. Ich habe auch Computer-Kurs in Ungarn gemacht und ich beherrsche die üblichen PC-Programme.<br/><br/>Über eine Einladung zu einem persönlichen Gespräch würde ich mich freuen. Ich bin unter der Handynummer erreichbar: 0174-123-4567.',
  },
  {
    type: 'Bewerbung',
    title: 'Verkäuferin',
    subject: 'Verkäuferin',
    greeting: 'Sehr geehrte Damen und Herren',
    closing: 'Mit freundlichen Grüßen',
    closingName: 'Vorname Nachname',
    content: 'mit großem Interesse habe ich Ihre Anzeige im Internet gelesen und möchte mich um die freie Stelle als Verkäuferin bei Muller bewerben. Ich heiße Vorname Nachname. Ich bin 25 Jahre alt und komme aus der Türkei.<br/><br/>Wie Sie aus meinen Unterlagen ersehen können, habe ich nach meinem Realschulabschluss ein 6-monatiges Praktikum bei DM gemacht. Danach habe ich 1 Jahr bei Rewe gearbeitet.<br/><br/>Ich bin freundlich und hilfsbereit. Ich habe eine selbstständige Arbeitsweise und bin sehr gut in Mathematik. Meine Muttersprache ist Türkisch. Ich spreche fließend Deutsch und ein bisschen Englisch. Sie können mich unter der E-Mail-Adresse meine@email.com erreichen.<br/><br/>Über eine Einladung zu einem persönlichen Gespräch würde ich mich freuen.',
  },
  {
    type: 'Bewerbung',
    title: 'Kfz-Mechaniker',
    subject: 'Kfz-Mechaniker',
    greeting: 'Sehr geehrte Damen und Herren',
    closing: 'Mit freundlichen Grüßen',
    closingName: 'Vorname Nachname',
    content: 'mit großem Interesse habe ich Ihre Stellenanzeige im Internet gelesen und möchte mich um die Stelle in Ihrer Firma als Kfz-Mechaniker bewerben. Ich heiße Vorname Nachname. Ich bin 30 Jahre alt und komme aus Bulgarien. Ich bin Kfz-Mechaniker von Beruf.<br/><br/>Wie Sie aus meinen Unterlagen ersehen können, habe ich in meinem Heimatland Bulgarien nach meinem Realschulabschluss eine Ausbildung zum Kfz-Mechaniker gemacht und dort auch 2 Jahre in einer Werkstatt in Sofia gearbeitet. Als ich ein Kind war, habe ich Autos geliebt. Außerdem habe ich viele Erfahrungen in der Montage und ich bin flexibel für Arbeitsreisen.<br/><br/>Meine Muttersprache ist Bulgarisch und ich spreche noch gut Deutsch und Englisch. Leider habe ich keine Computerkenntnisse.<br/><br/>Über eine Einladung zu einem persönlichen Gespräch würde ich mich freuen. Am besten erreichen Sie mich unter folgenden Telefonnummer: 0174 123-4567.',
  },
  {
    type: 'Entschuldigung',
    title: 'Halb-Formell | Entschuldigung | Kurs Kommen Nicht',
    subject: 'Entschuldigung',
    greeting: 'Liebe Frau Meinert',
    closing: 'Liebe Grüße',
    closingName: 'Vorname',
    content: 'ich schreibe Ihnen, weil ich diese Woche nicht mehr in den Kurs kommen kann. Mein Mann ist sehr krank. Er hat starke Magenschmerzen und hohes Fieber. Ich kümmere mich um ihn. [Bitte entschuldigen Sie mein Fehlen / Es tut mir leid, dass ich diese Woche nicht mehr kommen kann]. Ich würde gern die Hausaufgaben machen. Ich hätte eine Frage: Könnten Sie mir die Hausaufgaben per WhatsApp schicken? Ich lerne gern und möchte auch ein bisschen zu Hause üben. Wenn es meinem Mann wieder geht, komme ich nächste Woche wieder in den Kurs.<br/>Ich bedanke mich für Ihr Verständnis.',
  },
  {
    type: 'Einladung',
    title: 'Halb-Formell | Einladung',
    subject: 'Antwort auf Einladung',
    greeting: 'Liebe Frau Berg',
    closing: 'Viele Grüße',
    closingName: 'Vorname',
    content: 'ich Schreibe Ihnen, weil ich eine Einladung zu Ihrer Geburtstagsparty bekommen habe. Das freut mich sehr. Ich komme gern zu Ihrer Party. Zurzeit besuche ich den B2-Kurs und danach möchte ich eine Ausbildung als Krankenschwester machen. Am Wochenende habe ich Zeit, um zu Ihrem Geburtstag zu kommen. Ich weiß leider nicht, wo Sie wohnen. Könnten Sie mir bitte Ihre Adresse per Whatsapp schreiben? Mit welche Verkehrsmittel komme am besten zu Ihnen?<br/>Ich warte auf Ihre Antwort und freue mich auf den Geburtstag.',
  },
  {
    type: 'Beschwerde',
    title: 'Kaputt Heizung',
    subject: 'Beschwerde (über kaputte Heizung)',
    greeting: 'Sehr geehrte Frau Weber',
    closing: 'Mit freundlichen Grüßen',
    closingName: 'Vorname Nachname',
    content: 'ich schreibe Ihnen, weil ich seit drei Tagen ein großes Problem mit meiner Heizung habe. Ich habe Sie mehrmals angerufen, aber nicht erreicht. Deshalb Schreibe ich Ihnen diesen Brief. Leider funktioniert die Heizung nicht. Das Thermostat ist ausgefallen. Ich kann die Heizung nicht mehr einschalten. Meine Kinder sind krank. Sie haben Fieber und eine starke Erkältung, weil es seit dem Problem in der Wohnung sehr kalt ist. Ich bitte Sie, die Heizung so schnell wie möglich zu reparieren oder einen Handwerker zu schicken / Können Sie bitte die Heizung innerhalb der nächsten Tage reparieren? Ich bin nachmittags ab 16 Uhr zu Hause erreichbar. Sie können mich am besten unter der Handynummer: 015342892 erreichen.<br/><br/>Vielen Dank im Voraus.',
  },
  {
    type: 'Wohnungsanzeige',
    title: 'Größer Wohnung',
    subject: 'Wohnungsanzeige',
    greeting: 'Sehr geehrter Herr Schmidt',
    closing: 'Mit freundlichen Grüßen',
    closingName: 'Vorname Nachname',
    content: 'ich habe Ihre Wohnungsanzeige in der Tageszeitung gelesen und ich interessiere mich für die Wohnung. Mein name of Vorname Nachname. Ich bin verheiratet und habe zwei Kinder. Seit fünf Jahren lebe ich in Deutschland. Von Beruf bin ich Buchhalterin. Ich habe keine Tiere und bin Nichtraucherin. Momentan leben wir in einer kleinen Wohnung. Ich bekomme noch ein Baby und deshalb brauchen wir eine größere Wohnung. Ich hätte noch ein paar Fragen zur Wohnung: Hat die Wohnung einen Balkon? Gehört zu der Wohnung eine Garage oder Stellplatz? In welchem Stockwerk ist die Wohnung? Ich würde gern einen Besichtigungstermin vereinbaren. Ich habe immer am Nachmittag ab 16 Uhr Zeit, weil ich bis 15 Uhr arbeiten muss. Wann könnten wir einen Termin vereinbaren?<br/>Ab wann ist die Wohnung frei? Ich könnte zum 01.07 in die neue Wohnung einziehen. Sie erreichen mich am besten unter folgender Handynummer: 0153247156.<br/><br/>Ich freue mich auf Ihre Rückmeldung.',
  },
  {
    type: 'Beschwerde',
    title: 'Telefon Und Internet',
    subject: 'Beschwerde',
    greeting: 'Sehr geehrte Damen und Herren',
    closing: 'Mit freundlichen Grüßen',
    closingName: 'Vorname Nachname',
    content: 'ich schreibe Ihnen, weil ich seit einiger Zeit einen Telefon- und Internetanschluss bei Ihnen habe. Seit zwei Wochen funktionieren mein Telefon und Internet nicht mehr gut. Ich kann nur auf dem Balkon telefonieren. Ich schlage vor, dass Ihr Techniker meinen Anschluss überprüft und das Problem beseitigt. Wenn Sie keine Lösung finden, dann muss ich leider meinen Vertrag kündigen. Ich benutze viel das Internet, weil ich zu Hause arbeite. Vielleicht können Sie mir eine andere Lösung vorschlagen. Ich hoffe, dass wir uns einigen können. Ich bitte Sie, so schnell wie möglich zu antworten.<br/><br/>Ich freue mich auf Ihre baldige Rückmeldung.',
  },
];

const BriefSchreiben = () => {
  const [filteredLetters, setFilteredLetters] = useState(letters);
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    let updatedFilteredLetters = letters.slice();
    if (selectedType.length > 0) {

      updatedFilteredLetters = letters.filter(letter => {
        return letter.type === selectedType;
      })
    }

    setFilteredLetters(updatedFilteredLetters);
  }, [selectedType]);

  const lettersRender = filteredLetters.map((letter, index) => {
    let badgeStyle = '';
    let badgeText = letter.type;
    switch (letter.type) {
      case 'Einladung':
        badgeStyle = 'bg-primary';
        break;

      case 'Entschuldigung':
        badgeStyle = 'bg-success';
        break;

      case 'Reklamation':
        badgeStyle = 'bg-info';
        break;

      case 'Bewerbung':
        badgeStyle = 'bg-warning';
        break;

      case 'Wohnungsanzeige':
        badgeStyle = 'bg-dark';
        break;

      case 'Beschwerde':
        badgeStyle = 'bg-danger';
        badgeText = 'Beschwerde'
        break;

      case 'Kundigung':
        badgeStyle = 'bg-primary';
        badgeText = 'Kundigung'
        break;

      default:
        break;
    }

    badgeStyle = `badge ${badgeStyle}`;

    return <div key={index}>
      <h4><span className={badgeStyle}>{badgeText}</span> {letter.title}</h4>
      <Brief  subject={letter.subject} greeting={letter.greeting} closing={letter.closing} closingName={letter.closingName} type={letter.type}>
        {letter.content}
      </Brief>
    </div>
  });

  const toc = [
    {
      name: "Anrede",
      link: "anrede",
    },
    {
      name: "Grüß",
      link: "gruss",
    },
    {
      name: "Hilfreiche Sätze",
      link: "hilfsatze",
    },
    {
      name: "Beispielbriefe",
      link: "beispielbriefe",
    },
  ]

  return (<>
      <TopicHeader header="Brief Schreiben"/>
      <TableOfContents sections={toc}/>

      <Section>
        <SubSection header="Anrede" linkAnchor="anrede">
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
                <td>
                  Liebe Frau Beck
                  <br/>(Halb-formell. Zum Beispiel: Klassenlehrerin)
                </td>
                <td>Sehr geehrte Damen und Herren.</td>
              </tr>
              </tbody>
            </table>
          </div>
        </SubSection>

        <SubSection header="Gruß" linkAnchor="gruss">
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
        </SubSection>

        <HilfreicheSatze/>

        <SubSection header="Beispielbriefe" linkAnchor="beispielbriefe">
          <div className="my-4">
            <button type="button" className="btn mx-2 btn-sm btn-outline-secondary"
                    onClick={() => setSelectedType("")}>Alles</button>
            <button type="button" className={`btn mx-2 btn-sm btn-outline-primary ${selectedType === 'Einladung' ? 'active': ''}`}
                    onClick={() => setSelectedType("Einladung")}>Einladung</button>
            <button type="button" className={`btn mx-2 btn-sm btn-outline-success ${selectedType === 'Entschuldigung' ? 'active': ''}`}
                    onClick={() => setSelectedType("Entschuldigung")}>Entschuldigung</button>
            <button type="button" className={`btn mx-2 btn-sm btn-outline-info ${selectedType === 'Reklamation' ? 'active': ''}`}
                    onClick={() => setSelectedType("Reklamation")}>Reklamation</button>
            <button type="button" className={`btn mx-2 btn-sm btn-outline-warning ${selectedType === 'Bewerbung' ? 'active': ''}`}
                    onClick={() => setSelectedType("Bewerbung")}>Bewerbung</button>
            <button type="button" className={`btn mx-2 btn-sm btn-outline-dark ${selectedType === 'Wohnungsanzeige' ? 'active': ''}`}
                    onClick={() => setSelectedType("Wohnungsanzeige")}>Wohnungsanzeige</button>
            <button type="button" className={`btn mx-2 btn-sm btn-outline-danger ${selectedType === 'Beschwerde' ? 'active': ''}`}
                    onClick={() => setSelectedType("Beschwerde")}>Beschwerde</button>
            {/*<button type="button" className={`btn mx-2 btn-sm btn-outline-primary ${selectedType === 'Kundigung' ? 'active': ''}`}*/}
            {/*        onClick={() => setSelectedType("Kündigung")}>Kündigung</button>*/}
          </div>

          {lettersRender}
        </SubSection>
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