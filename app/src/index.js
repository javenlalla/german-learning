import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import {store} from './app/store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Konjunktionen from './routes/Konjunktionen';
import Wo from './routes/Wo';
import Werden from "./routes/Werden";
import Vokabular from "./routes/Vokabular";
import Deklination from "./routes/Deklination";
import KonjunktivII from "./routes/KonjunktivII";
import Planen from "./routes/Planen";
import TestPunkte from "./routes/TestPunkte";
import Home from "./routes/Home";
import BriefSchreiben from "./routes/BriefSchreiben";
import Bildbeschreibung from "./routes/Bildbeschreibung";
import Lassen from "./routes/Lassen";
import IndirektFragen from "./routes/IndirektFragen";
import ModalVerben from "./routes/ModalVerben";
import Als from "./routes/Als";
import Passiv from "./routes/Passiv";
import Lesen from "./routes/Lesen";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="deklination" element={<Deklination/>}/>
            <Route path="konjunktiv-ii" element={<KonjunktivII/>}/>
            <Route path="planen" element={<Planen/>}/>
            <Route path="konjunktionen" element={<Konjunktionen/>}/>
            <Route path="wohin-wo-woher" element={<Wo/>}/>
            <Route path="werden" element={<Werden/>}/>
            <Route path="vokabular" element={<Vokabular/>}/>
            <Route path="lassen" element={<Lassen/>}/>
            <Route path="indirekt-fragen" element={<IndirektFragen/>}/>
            <Route path="prufung-punkte" element={<TestPunkte/>}/>
            <Route path="brief-schreiben" element={<BriefSchreiben/>}/>
            <Route path="bildbeschreibung" element={<Bildbeschreibung/>}/>
            <Route path="modalverben" element={<ModalVerben/>}/>
            <Route path="als" element={<Als/>}/>
            <Route path="passiv" element={<Passiv/>}/>
            <Route path="lesen" element={<Lesen/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
