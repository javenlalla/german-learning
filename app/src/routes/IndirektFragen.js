import React from 'react';
import Card from "../features/layout/Card";

const IndirektFragen = () => {
  return (<>
      <div className="page-title">
        <div className="row">
          <div className="col-12 col-md-6 order-md-1 order-last">
            <h3>Indirekt Fragen Und Ob</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div>
          <Card>
            <div>
              <h6>Indirekt Fragen</h6>
              Können Sie mir sagen, wie man das Formular aus
              ausfüllt?
              Weißt du, wo man Geld abheben kann?
              Kannst du mir sagen, wie spät es ist?
              Weißt du, wann das Büro geöffnet hat?
              Kannst du mir sagen, was die Haus aufgabe ist?
            </div>

            <div>
              <h6>Ob</h6>
              Ich möchte wissen, ob du mir helfen kannst?
              Ich würde gera gern wissen, ob du mir Geld leihen kannst.
              Ich möchte wissen, ob du Zeit hast.
              Weißt du, ob du noch kommst.
              Kannst du mir sagen, ob das die richtige Adresse ist.
              Ich möchte missen, ob du in Regensburg mother wohnst.
              Ich möchte wissen, wie viel Garantie die Wn noch hat.
            </div>

          </Card>


          <Card cardTitle="IndirektFrage">

            <div className="table-responsive text-nowrap">
              <table className="table">
                <thead>
                <tr>
                  <th>Header</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Value</td>
                </tr>
                </tbody>
              </table>
            </div>

          </Card>
        </div>
      </div>
    </>
  )
}

export default IndirektFragen;