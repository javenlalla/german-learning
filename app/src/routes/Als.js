import React from 'react';
import PropTypes from 'prop-types';
import TopicHeader from "../features/layout/TopicHeader";
import Section from "../features/layout/Section";

const Als = () => {
  return (<>
      <TopicHeader header="Als"/>

      <Section>

        <h2>Als Sub-section</h2>

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

export default Als;