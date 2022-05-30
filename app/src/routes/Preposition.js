import React from 'react';
import PropTypes from 'prop-types';
import Section from "../features/layout/Section";
import SubSection from "../features/layout/SubSection";

const Preposition = () => {
  const prepositions = {
    uber: [
      'sich aufregen',
      'sich ärgern',
      'sich beschweren',
      'sich freuen',
      'diskutieren',
      'reden',
      'sprechen',
      'streiten',
      'Worüber sprichst du?',
      'Worüber ärgerst du dich?',
      'Über wen ärgerst du dich?',
      'darüber',
    ],
    auf: [
      'Lust haben',
      'sich freuen',
      'achten',
      'reagieren',
      'warten',
      'Worauf wartest du?',
      'Worauf freust du dich?',
      'Auf wen wartest du?',
      'darauf',
    ],
    an: [
      'denken',
      'erinnern',
      'glauben',
      'Woran denkst du?',
      'An wen denkst du?',
      'daran',
    ],
    vor: [
      'Angst haben',
      'Wovor hast du Angst?',
      'Vor wem hast du Angst?',
      'davor',
    ],
    um: [
      'sich bewerben',
      'sich kümmern',
      'bitten',
      'Worum kümmerst du dich?',
      'Worum bittest du?',
      'Um wen kümmerst du dich?',
      'darum',
    ],
    fur: [
      'sich bedanken',
      'sich interessieren',
      'Wofür interessierst du dich?',
      'Für wen interessierst du dich?',
      'dafür',
    ],
    mit: [
      'sich treffen',
      'diskutieren',
      'reden',
      'sprechen',
      'telefonieren',
      'Mit wem triffst du dich?',
      'Mit wem sprichst du?',
    ],
    von: [
      'erzählen',
      'träumen',
      'Wovon träumst du?',
      'Von wem erzählst du?',
      'Von wem träumst du?',
      'davon',
    ],
  }

  return (<>
      <Section>
        <SubSection header="Präpositionen">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-sm-3">
                <PrepositionTable name="über" preps={prepositions.uber}/>
              </div>
              <div className="col-sm-3">
                <PrepositionTable name="auf" preps={prepositions.auf}/>
              </div>
              <div className="col-sm-3">
                <PrepositionTable name="an" preps={prepositions.an}/>
              </div>
              <div className="col-sm-3">
                <PrepositionTable name="vor" preps={prepositions.vor}/>
              </div>
            </div>
            <div className="row align-items-start">
              <div className="col-sm-3">
                <PrepositionTable name="um" preps={prepositions.um}/>
              </div>
              <div className="col-sm-3">
                <PrepositionTable name="für" preps={prepositions.fur}/>
              </div>
              <div className="col-sm-3">
                <PrepositionTable name="mit" preps={prepositions.mit}/>
              </div>
              <div className="col-sm-3">
                <PrepositionTable name="von" preps={prepositions.von}/>
              </div>
            </div>
          </div>
        </SubSection>
      </Section>
    </>
  )
}

const PrepositionTable = (props) => {
  const rowsRender = props.preps.map( (prep) => {
    return <tr key={`${props.name}-${prep}`}>
      <td>
        {prep}
      </td>
    </tr>
  });

  return (
    <div className="table-responsive text-nowrap">
      <table className="table">
        <thead>
        <tr>
          <th>{props.name}</th>
        </tr>
        </thead>
        <tbody>
          {rowsRender}
        </tbody>
      </table>
    </div>
  )
}

PrepositionTable.propTypes = {
  name: PropTypes.string.isRequired,
  preps: PropTypes.array.isRequired,
}

export default Preposition;