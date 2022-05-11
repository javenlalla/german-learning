import React from 'react';
import Case from "../features/text/Case";
import Gender from "../features/text/Gender";
import Card from "../features/layout/Card";
import TopicHeader from "../features/layout/TopicHeader";
import Section from "../features/layout/Section";

const TestPunkte = () => {
  return (<>
    <TopicHeader header="Teile Und Punkte" />

    <Section>
      <h2>Punkte Übersicht</h2>
      <div className="table-responsive text-nowrap">
        <table className="table">
          <thead>
          <tr>
            <th/>
            <th>Hören/Lesen</th>
            <th>Schreiben</th>
            <th>Sprechen</th>
          </tr>
          </thead>
          <tbody>
          <tr className="text-gray-600">
            <td>Total</td>
            <td>45</td>
            <td>20</td>
            <td>100</td>
          </tr>
          <tr className="text-success">
            <td>B1</td>
            <td>45-33</td>
            <td>20-15</td>
            <td>100-75</td>
          </tr>
          <tr className="text-warning">
            <td>A2</td>
            <td>32-20</td>
            <td>14-7</td>
            <td>74-35</td>
          </tr>
          <tr className="text-danger">
            <td>Unter A2</td>
            <td>19-0</td>
            <td>6-0</td>
            <td>34-0</td>
          </tr>
          </tbody>
        </table>
      </div>

      <h2 className="my-4">Mögliche Ergebnisse</h2>
      <div className="table-responsive text-nowrap">
        <table className="table">
          <thead>
          <tr>
            <th>Teil</th>
            <th>Fall 1</th>
            <th>Fall 2</th>
            <th>Fall 3</th>
            <th>Fall 4</th>
            <th>Fall 5</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Hören/Lesen</td>
            <td>B1</td>
            <td>B1</td>
            <td>B1</td>
            <td>A2</td>
            <td>Unter A2</td>
          </tr>
          <tr>
            <td>Schreiben</td>
            <td>B1</td>
            <td>A2</td>
            <td>Unter A2</td>
            <td>B1</td>
            <td>B1</td>
          </tr>
          <tr>
            <td className="text-danger">Sprechen*</td>
            <td>B1</td>
            <td>B1</td>
            <td>B1</td>
            <td>B1</td>
            <td>B1</td>
          </tr>
          <tr className="fw-bold" style={{borderTop: "2px solid"}}>
            <td>Ergebnisse</td>
            <td>B1</td>
            <td>B1</td>
            <td>B1</td>
            <td>B1</td>
            <td>B1</td>
          </tr>
          </tbody>
        </table>

        <div className="alert" role="alert">
          <span className="fw-bold text-danger">Wichtig:</span> <span className="fst-italic">Sprechen</span> muss <span className="fw-bold">B1</span> sein.
        </div>
      </div>
    </Section>
  </>
  )
}

export default TestPunkte;