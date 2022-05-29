import React from 'react';
import PropTypes from 'prop-types';
import SubSection from "../layout/SubSection";

const HilfreicheSatze = () => {
  return (
    <SubSection header="Hilfreiche Sätze" linkAnchor="hilfsatze">
      <table className="table">
        <tbody>
        <tr>
          <td>
            Danke für die Einladung.<br/>
            Vielen Dank für die Einladung.<br/>
          </td>
        </tr>
        <tr>
          <td>
            Ich schreibe Ihnen, weil...<br/>
            Ich schreibe dir, weil...<br/>
          </td>
        </tr>
        <tr>
          <td>
            Ich möchte dich/Sie gern einladen.<br/>
            Ich möchte dich/Sie gern [zu meinen Fest/zu meiner Party] einladen.<br/>
            Ich möchte dich/Sie gern [zum Kuchen essen] einladen.<br/>
            Ich möchte dich/Sie gern [zum Kuchen essen] einladen [bei mir zu Hause].<br/>
            Ich möchte dich/Sie gern [zum Kuchen essen] einladen [bei mir zu Hause] [am Freitag um 18:00 Uhr].<br/>
            Möchten Sie/Möchtest du zu...kommen?
          </td>
        </tr>
        <tr>
          <td>
            Ich komme gern zu [Ihrer/deine] Party.<br/>
            Ich würde gern zu deiner Party kommen.<br/>
            Tut mir leid, aber ich kann leider nicht kommen.<br/>
            Ich würde gern zu deiner Party kommen, aber...<br/>
          </td>
        </tr>
        <tr>
          <td>
            Ich habe eine Frage.<br/>
            Ich hätte eine Frage.<br/>
            Ich habe ein Vorschlag.<br/>
          </td>
        </tr>
        <tr>
          <td>
            Kannst du mir/Könnten Sie mir bitte...?<br/>
            Könnten Sie mir helfen?<br/>
            Ich wollte Sie etwas fragen.<br/>
          </td>
        </tr>
        <tr>
          <td>
            Vielen Dank für dein Verständnis.<br/>
            Vielen Dank für Ihr Verständnis.<br/>
            Vielen Dank für euer Verständnis.<br/>
            Ich bedanke mich für Ihr Verständnis.<br/>
          </td>
        </tr>
        <tr>
          <td>
            Ich warte auf Ihre Antwort.<br/>
            Ich warte auf deine Antwort.<br/>
            Ich freue mich auf eine Antwort.<br/>
            Ich würde mich über eine Antwort freuen.<br/>
          </td>
        </tr>
        <tr>
          <td>
            Ich wünsche dir...<br/>
            Ich wünsche Ihnen...<br/>
            Ich wünsche dir alles Gute zum Geburtstag.<br/>
            Ich wünsche euch eine tolle Party und viel Spaß.<br/>
          </td>
        </tr>
        <tr>
          <td>
            Das freut mich sehr.<br/>
            Ich bin froh, dass...<br/>
          </td>
        </tr>
        <tr>
          <td>
            Bitte ruf mich unter folgender Nummer: [...] an, wenn du kommst.<br/>
            Bitte rufen Sie mich unter folgender Nummer: [...] an, wenn Sie kommen.<br/>
          </td>
        </tr>
        <tr>
          <td>
            Sie können mich unter der E-Mail-Adresse meine@email.com erreichen.<br/>
            Am besten erreichen Sie mich unter folgenden Telefonnummer: [0174 123-4567].<br/>
            Sie können mich unter der E-Mail-Adresse [meine@email.com] erreichen.<br/>
            Ich bin unter der Handynummer erreichbar: [0174-123-4567].<br/>
          </td>
        </tr>
        <tr>
          <td>
            Ich freue mich auf [Samstag].
          </td>
        </tr>
        <tr>
          <td>
            Ich würde mich freuen, wenn...
          </td>
        </tr>
        <tr>
          <td>
            Ich möchte mich vorstellen.
          </td>
        </tr>
        <tr>
          <td>
            Das Treffen würde am ..., um .. Uhr [bei mir zu House] stattfinden.
          </td>
        </tr>
        <tr>
          <td>
            <span className="badge bg-success">Entschuldigung</span> Ich möchte mich für...entschuldigen.<br/>
            <span className="badge bg-success">Entschuldigung</span> Ich möchte mich dafür entschuldigen, dass...<br/>
            <span className="badge bg-success">Entschuldigung</span> Bitte entschuldigen Sie, dass...<br/>
            <span className="badge bg-success">Entschuldigung</span> Ich möchte mich bei dir/Ihnen entschuldigen für [meine Party/mein Fest].<br/>
          </td>
        </tr>
        <tr>
          <td>
            <span className="badge bg-info">Reklamation</span> Wenn ich bis zum 12.06 nicht von Ihnen höre, dann nehme ich die Bestellung zurück und ich möchte mein Geld zurückhaben.<br/>
            <span className="badge bg-info">Reklamation</span> Ich möchte Sie zum letzten Mal auffordern, mit bis [...] (z.B: 12.06) einen Ersatz zu schicken.<br/>
            <span className="badge bg-info">Reklamation</span> Über eine schnelle Bearbeitung würde ich mich sehr freuen.<br/>
          </td>
        </tr>
        <tr>
          <td>
            <span className="badge bg-warning">Bewerbung</span> ...mit großem Interesse habe ich Ihre Anzeige [im Internet] gelesen und möchte mich um die freie Stelle als [Altenpfleger] bewerben.<br/>
            <span className="badge bg-warning">Bewerbung</span> Wie Sie aus meinen Unterlagen ersehen können,...<br/>
            <span className="badge bg-warning">Bewerbung</span> Über eine Einladung zu einem persönlichen Gespräch würde ich mich freuen.<br/>
          </td>
        </tr>
        <tr>
          <td>
            <span className="badge bg-danger">Beschwerde</span> Ich möchte mich über...beschweren.<br/>
            <span className="badge bg-danger">Beschwerde</span> Ich muss Ihnen leider sagen/schreiben, dass...<br/>
          </td>
        </tr>
        </tbody>
      </table>
    </SubSection>
  )
}

HilfreicheSatze.propTypes = {
  type: PropTypes.oneOf(['one', 'two']).isRequired,
}

HilfreicheSatze.defaultProps = {
  type: 'one',
}

export default HilfreicheSatze;