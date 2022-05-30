import React from 'react';
import PropTypes from 'prop-types';
import TopicHeader from "../features/layout/TopicHeader";
import Section from "../features/layout/Section";
import SubSection from "../features/layout/SubSection";

const Sample = () => {
  return (<>
      <TopicHeader header="Sample"/>

      <Section>

        <SubSection header="Sample Sub-section">
          <div className="table-responsive">
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
        </SubSection>

      </Section>
    </>
  )
}

Sample.propTypes = {
  type: PropTypes.oneOf(['one', 'two']).isRequired,
}

Sample.defaultProps = {
  type: 'one',
}

export default Sample;