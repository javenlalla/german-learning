import React from 'react';
import PropTypes from 'prop-types';
import TopicHeader from "../features/layout/TopicHeader";
import Section from "../features/layout/Section";

const Sample = () => {
  return (<>
      <TopicHeader header="Sample"/>

      <Section>

        <h2>Sample Sub-section</h2>

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