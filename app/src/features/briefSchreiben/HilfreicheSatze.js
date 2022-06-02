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
            Ich möchte [Ihnen/dir] mitteilen, dass.... Deshalb schreibe ich [Ihnen/dir] [diese E-Mail/diesen Brief].
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
            Ich bitte Sie, [die Handwerker in meine Wohnung zu lassen].<br/>
            Könnten Sie bitte [die Handwerker in meine Wohnung lassen]?<br/>
          </td>
        </tr>
        <tr>
          <td>
            Vielen Dank für [Ihr/dein] Verständnis.<br/>
            Vielen Dank für [Ihre/deine] Hilfe.<br/>
            Vielen Dank für [Ihre/deine] Mühe.<br/>
            Vielen Dank im Voraus.<br/>
            Ich bedanke mich für [Ihr/dein] Verständnis.<br/>
            Ich danke [Ihnen/dir].<br/>
          </td>
        </tr>
        <tr>
          <td>
            Ich warte auf Ihre Antwort.<br/>
            Ich warte auf deine Antwort.<br/>
            Ich freue mich auf eine Antwort.<br/>
            Ich würde mich über eine Antwort freuen.<br/>
            Ich freue mich auf Ihre baldige Rückmeldung.<br/>
            Ich bitte Sie, mir so schnell wie möglich zu antworten.<br/>
            Ich bitte, um eine Rückantwort.<br/>
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
            Ich freue mich auf [Samstag].<br/>
            Ich würde mich freuen, wenn...<br/>
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
            Am besten [können Sie/kannst du] mich unter folgender Handynummer: [0176-543210] erreichen.
            Ich bin unter der Handynummer: [0174-123-4567] erreichbar.<br/>
            Am besten [erreichen Sie/erreichst du] mich unter folgender Handynummer: [0174 123-4567].<br/>
            Sie können mich unter der E-Mail [meine@email.com] erreichen.<br/>
            Sie können mich unter der E-Mail [meine@email.com] erreichen.<br/>
            Sie können mich entweder unter der Nummer: [0176-543210] oder unter der E-Mail: [meine@email.com] erreichbar.<br/>
          </td>
        </tr>
        <tr>
          <td>
            Ich möchte mich vorstellen.
          </td>
        </tr>
        <tr>
          <td>
            Das Treffen würde am [Samstag], um [16:00] Uhr [bei mir zu House] stattfinden.
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
            <span className="badge bg-info">Reklamation</span> Wenn ich bis zum [12.06] nicht von Ihnen höre, dann nehme ich die Bestellung zurück und ich möchte mein Geld zurückhaben.<br/>
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
            <span className="badge bg-danger">Beschwerde</span> Ich beschwere mich über...<br/>
            <span className="badge bg-danger">Beschwerde</span> In dem Haus, in dem ich wohne...<br/>
            <span className="badge bg-danger">Beschwerde</span> Könnten Sie das Problem beseitigen?<br/>
            <span className="badge bg-danger">Beschwerde</span> Ich habe Sie [mehrmals] angerufen, aber nicht erreicht.<br/>
          </td>
        </tr>
        <tr>
          <td>
            <span className="badge bg-primary">Kündigung</span> Ich möchte meinen Vertrag jetzt aber Kündigen.<br/>
            <span className="badge bg-primary">Kündigung</span> Ich habe seit [zwei Jahren] [einen Handyvertrag] bei Ihnen.<br/>
            <span className="badge bg-primary">Kündigung</span> Ich habe vor [zwei Jahren] bei Ihnen [ein Handy gekauft/einen Vertrag gemacht].<br/>
            <span className="badge bg-primary">Kündigung</span> Ich kündige meinen Vertrag zum [01.07.2022].<br/>
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