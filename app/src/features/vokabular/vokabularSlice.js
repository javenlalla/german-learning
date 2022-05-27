import { createSlice, createSelector } from '@reduxjs/toolkit';
import Gender from "../text/Gender";

const initialState = {
  words: [
    {value: "angeln/reiten", tags: ["wochenende"]},
    {value: "bügeln", tags: ["wochenende"]},
    {value: "grillen", tags: ["wochenende"]},
    {value: "kochen/backen", tags: ["wochenende"]},
    {value: "schlafen", tags: ["wochenende"]},
    {value: "staubsauger", tags: ["wochenende"]},
    {value: "telefonieren", tags: ["wochenende"]},
    {value: <span>pflanzen/gießen <Gender type="plural">Blumen</Gender></span>, tags: ["wochenende"]},
    {value: "putzen", tags: ["wochenende"]},
    {value: "spazierengehen", tags: ["wochenende"]},
    {value: <span>wandern/machen eine <Gender type="die">Wanderung</Gender></span>, tags: ["wochenende"]},
    {value: <span><Gender type="plural">Wäsche</Gender> waschen</span>, tags: ["wochenende"]},
    {value: <span>besuchen ein <Gender type="das">Denkmal</Gender></span>, tags: ["wochenende"]},
    {value: <span><Gender type="das">Geschirr</Gender> spülen</span>, tags: ["wochenende"]},
    {value: <span>besuchen eine <Gender type="die">Galerie</Gender></span>, tags: ["wochenende"]},
    {value: <span>besichtigten <Gender type="plural">Sehenswürdigkeiten</Gender></span>, tags: ["wochenende"]},
    {value: <span>einladen <Gender type="plural">Freunde</Gender></span>, tags: ["wochenende"]},
    {value: <span>fahren zum <Gender type="der">Zoo</Gender></span>, tags: ["wochenende"]},
    {value: <span>fahren ein <Gender type="das">Schiff</Gender></span>, tags: ["wochenende"]},
    {value: <span>fahren an der <Gender type="der">See</Gender></span>, tags: ["wochenende"]},
    {value: <span>gehen in die <Gender type="die">Oper</Gender></span>, tags: ["wochenende"]},
    {value: <span>gehen in die <Gender type="die">Bücherei</Gender></span>, tags: ["wochenende"]},
    {value: <span>gehen <Gender type="das">Bowling</Gender></span>, tags: ["wochenende"]},
    {value: <span>gehen zu einem <Gender type="das">Konzert</Gender></span>, tags: ["wochenende"]},
    {value: <span>gehen ins <Gender type="das">Kino</Gender></span>, tags: ["wochenende"]},
    {value: <span>gehen ins <Gender type="das">Theater</Gender></span>, tags: ["wochenende"]},
    {value: <span>gehen ins <Gender type="das">Bar</Gender></span>, tags: ["wochenende"]},
    {value: <span>gehen ins <Gender type="das">Museum</Gender></span>, tags: ["wochenende"]},
    {value: <span>gehen zum <Gender type="der">Flohmarkt</Gender></span>, tags: ["wochenende"]},
    {value: <span>gehen zum <Gender type="der">Zirkus</Gender></span>, tags: ["wochenende"]},
    {value: <span>gehen zur <Gender type="die">Disko</Gender></span>, tags: ["wochenende"]},
    {value: <span>lesen ein <Gender type="das">Buch</Gender></span>, tags: ["wochenende"]},
    {value: <span>machen <Gender type="der">Sport</Gender></span>, tags: ["wochenende"]},
    {value: <span>machen <Gender type="das">Yoga</Gender></span>, tags: ["wochenende"]},
    {value: <span>machen einen <Gender type="der">Ausflug</Gender></span>, tags: ["wochenende"]},
    {value: <span>machen eine <Gender type="die">Radtour</Gender></span>, tags: ["wochenende"]},
    {value: <span>machen ein <Gender type="das">Picknick</Gender></span>, tags: ["wochenende"]},
    {value: <span>surfen im <Gender type="das">Internet</Gender></span>, tags: ["wochenende"]},
    {value: <span>trinken einen Kaffee in <Gender type="das">Bäckerei</Gender></span>, tags: ["wochenende"]},
    {value: <span>unternehmen <span className="fst-italic">etwas</span></span>, tags: ["wochenende"]},
    {value: "vorsichtig", tags: ["auto"]},
    {value: "hupen", tags: ["auto"]},
    {value: "tanken", tags: ["auto"]},
    {value: <span>öffentliche <Gender type="plural">Verkehrsmittel</Gender></span>, tags: ["auto"]},
    {value: <Gender type="der">der Bürgersteig</Gender>, tags: ["auto"]},
    {value: <Gender type="der">der Zug</Gender>, tags: ["auto"]},
    {value: <Gender type="der">der Bahnhof</Gender>, tags: ["auto"]},
    {value: <Gender type="der">der Verkehr</Gender>, tags: ["auto"]},
    {value: <Gender type="der">der Fahrradweg</Gender>, tags: ["auto"]},
    {value: <Gender type="der">der Zebrastreifen</Gender>, tags: ["auto"]},
    {value: <Gender type="der">der Strafzettel</Gender>, tags: ["auto"]},
    {value: <Gender type="der">der Blitzer</Gender>, tags: ["auto"]},
    {value: <Gender type="der">der Parkplatz</Gender>, tags: ["auto"]},
    {value: <Gender type="der">der Autofahrer</Gender>, tags: ["auto"]},
    {value: <Gender type="der">der Fußgänger</Gender>, tags: ["auto"]},
    {value: <Gender type="der">der Führerschein</Gender>, tags: ["auto"]},
    {value: <Gender type="der">der Abschleppdienst</Gender>, tags: ["auto"]},
    {value: <Gender type="der">der Schwarzfahrer</Gender>, tags: ["auto"]},
    {value: <Gender type="die">die Ampel</Gender>, tags: ["auto"]},
    {value: <Gender type="die">die Autobahn</Gender>, tags: ["auto"]},
    {value: <Gender type="die">die Fahrbahn</Gender>, tags: ["auto"]},
    {value: <Gender type="die">die Kreuzung</Gender>, tags: ["auto"]},
    {value: <Gender type="die">die Autoversicherung</Gender>, tags: ["auto"]},
    {value: <Gender type="die">die Raststätte</Gender>, tags: ["auto"]},
    {value: <Gender type="die">die Führerscheinstelle</Gender>, tags: ["auto"]},
    {value: <Gender type="die">die Autofahrerin</Gender>, tags: ["auto"]},
    {value: <Gender type="die">die Polizei</Gender>, tags: ["auto"]},
    {value: <Gender type="die">die Autobahn</Gender>, tags: ["auto"]},
    {value: <Gender type="die">die Fahrbahn</Gender>, tags: ["auto"]},
    {value: <Gender type="die">die Straße</Gender>, tags: ["auto"]},
    {value: <Gender type="die">die Bushaltestelle</Gender>, tags: ["auto"]},
    {value: <Gender type="die">die Bauhaltestelle</Gender>, tags: ["auto"]},
    {value: <Gender type="die">die Tankstelle</Gender>, tags: ["auto"]},
    {value: <Gender type="die">die Panne</Gender>, tags: ["auto"]},
    {value: <Gender type="die">die Fahrschule</Gender>, tags: ["auto"]},
    {value: <Gender type="die">die Umleitung</Gender>, tags: ["auto"]},
    {value: <Gender type="die">die Raststätte</Gender>, tags: ["auto"]},
    {value: <Gender type="das">das Auto</Gender>, tags: ["auto"]},
    {value: <Gender type="das">das Tempo</Gender>, tags: ["auto"]},
    {value: <Gender type="das">das Bußgeld</Gender>, tags: ["auto"]},
    {value: <Gender type="das">das Verkehrsschild</Gender>, tags: ["auto"]},
    {value: <Gender type="das">das Moped</Gender>, tags: ["auto"]},
    {value: <Gender type="das">das Kennzeichen</Gender>, tags: ["auto"]},
  ],
  filterTags: [],
}

export const vokabularSlice = createSlice({
  name: "vokabular",
  initialState: initialState,
  reducers: {
    updateFilterTags: (state, action) => {
      const filterTag = action.payload;
      console.log(filterTag);
      state.filterTags.push("test");
    },
  }
})

export const { updateFilterTags } = vokabularSlice.actions;

export const selectWords = createSelector(
  (state) => state.vokabular.words,
  (state) => state.vokabular.filterTags,
  (words, tags) => {
    let filteredWords = [];
    if (tags.length > 0) {
      filteredWords = words.map(word => {
        if (word.tags[0] === tags[0]) {
          return word;
        }

        return null;
      })
    }

    return filteredWords;
  }
)

// After exporting, update the `store` to include this reducer.
export default vokabularSlice.reducer;