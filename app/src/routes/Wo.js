import React from 'react';
import Case from '../features/text/Case';
import Gender from '../features/text/Gender';
import Card from "../features/layout/Card";
import Ziele from "../features/wo/Ziele";

const Wo = () => {
  return (
    <>
      <div className="page-title">
        <div className="row">
          <div className="col-12 col-md-6 order-md-1 order-last">
            <h3>Wohin, Wo, Woher</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <Card>
            <div className="table-responsive">
              <table className="table">
                <thead>
                <tr>
                  <th/>
                  <th>Wohin <span className="badge bg-warning">Akkusativ</span>*</th>
                  <th>Wo <span className="badge bg-dark">Dativ</span></th>
                  <th>Woher <span className="badge bg-dark">Dativ</span></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td><span className="text-success fw-bold">der</span></td>
                  <td>ins Auto</td>
                  <td>im Auto</td>
                  <td>aus dem Auto</td>
                </tr>
                <tr>
                  <td><span className="text-danger fw-bold">die</span></td>
                  <td>zur/an die Tankstelle</td>
                  <td>an der Tankstelle</td>
                  <td>von der Tankstelle</td>
                </tr>
                <tr>
                  <td><span className="text-info fw-bold">das</span></td>
                  <td>zum Friseur</td>
                  <td>beim Friseur</td>
                  <td>vom Friseur</td>
                </tr>
                </tbody>
              </table>
              <p>
                * Note: Wohin is Akkusativ except for when <span className="fw-bold">zu</span> is used. In
                that scenario, the declension is Dativ.
              </p>
            </div>
          </Card>

          <Card cardTitle="Beispiele">
            <div className="table-responsive text-nowrap">
              <table className="table">
                <thead>
                <tr>
                  <th>Wohin</th>
                  <th>Wo</th>
                  <th>Woher</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Die Kinder gehen <Case type="dat">zur</Case> <Gender type="die">Schule</Gender>.</td>
                  <td>Die Kinder sind <Case type="dat">in der</Case> <Gender type="die">Schule</Gender>.</td>
                  <td>Die Kinder laufen <Case type="dat">aus der</Case> <Gender type="die">Schule</Gender>.</td>
                </tr>
                <tr>
                  <td>Ein Auto fährt <Case type="akk">in die</Case> <Gender type="die">Waschanlage</Gender>.</td>
                  <td>Ein Auto ist <Case type="dat">in der</Case> <Gender type="die">Waschanlage</Gender>.</td>
                  <td>Ein Auto fährt <Case type="dat">von der</Case> <Gender type="die">Waschanlage</Gender>.</td>
                </tr>
                <tr>
                  <td>Eine Frau geht <Case type="dat">zum</Case> <Gender type="der">Friseur</Gender>.</td>
                  <td>Eine Frau ist <Case type="dat">beim</Case> <Gender type="der">Friseur</Gender>.</td>
                  <td>Eine Frau kommt <Case type="dat">vom</Case> <Gender type="der">Friseur</Gender>.</td>
                </tr>
                <tr>
                  <td>Ein Mann geht <Case type="akk">an die</Case>/<Case type="dat">zur</Case> <Gender
                    type="die">Tankstelle</Gender>.
                  </td>
                  <td>Ein Mann steht <Case type="dat">an der</Case> <Gender type="die">Tankstelle</Gender>.</td>
                  <td>Ein Mann kommt <Case type="dat">von der</Case> <Gender type="die">Tankstelle</Gender>.</td>
                </tr>
                <tr>
                  <td>Eine Katze springt <Case type="akk">auf den</Case> <Gender type="der">Tisch</Gender>.</td>
                  <td>Eine Katze sitzt <Case type="dat">auf dem</Case> <Gender type="der">Tisch</Gender>.</td>
                  <td>Eine Katze springt <Case type="dat">vom</Case> <Gender type="der">Tisch</Gender>.</td>
                </tr>
                <tr>
                  <td>Eine Frau fährt <Case type="akk">in die</Case> <Gender type="die">Garage</Gender>.</td>
                  <td>Eine Frau ist <Case type="dat">in der</Case> <Gender type="die">Garage</Gender>.</td>
                  <td>Eine Frau fährt <Case type="dat">aus der</Case> <Gender type="die">Garage</Gender>.</td>
                </tr>
                <tr>
                  <td>Ein Kind läuft <Case type="dat">zur</Case> <Gender type="die">Mutter</Gender>.</td>
                  <td>Ein Kind ist <Case type="dat">bei der</Case> <Gender type="die">Mutter</Gender>.</td>
                  <td>Ein Kind läuft <Case type="dat">von der</Case> <Gender type="die">Mutter</Gender>.</td>
                </tr>
                <tr>
                  <td>Eine Frau geht <Case type="akk">in das</Case> <Gender type="das">Auto</Gender>.</td>
                  <td>Eine Frau sitzt <Case type="dat">im</Case> <Gender type="das">Auto</Gender>.</td>
                  <td>Eine Frau geht <Case type="dat">aus dem</Case> <Gender type="das">Auto</Gender>.</td>
                </tr>
                <tr>
                  <td>Zwei Vögel fliegen <Case type="dat">zum</Case> <Gender type="plural">Baum</Gender>.</td>
                  <td>Zwei Vögel sitzen <Case type="dat">auf dem</Case> <Gender type="plural">Baum</Gender>.</td>
                  <td>Zwei Vögel fliegen <Case type="dat">vom</Case> <Gender type="plural">Baum</Gender>.</td>
                </tr>
                </tbody>
              </table>
            </div>
          </Card>

        </div>
      </div>

      <Ziele/>
    </>
  )
}

export default Wo;