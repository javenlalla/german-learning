import React from 'react';
import PropTypes from 'prop-types';

const TopicHeader = (props) => {
  return (
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h1>{props.header}</h1>
        </div>
      </div>
    </div>
  )
}

TopicHeader.propTypes = {
  header: PropTypes.string.isRequired,
}

export default TopicHeader;