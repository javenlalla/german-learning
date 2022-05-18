import React from 'react';
import PropTypes from 'prop-types';

const SubSection = (props) => {
  return (
    <>
      <h2 id={props.linkAnchor} className="my-4">{props.header}</h2>
      <div>
        {props.children}
      </div>
    </>
  )
}

SubSection.propTypes = {
  header: PropTypes.string.isRequired,
  linkAnchor: PropTypes.string,
}

SubSection.defaultProps = {
  linkAnchor: '',
}

export default SubSection;