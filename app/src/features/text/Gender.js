import React from 'react';
import PropTypes from 'prop-types';

const Gender = (props) => {

  let styleClass;
  switch (props.type) {
    case 'der':
      styleClass = 'text-success';
      break;

    case 'die':
      styleClass = 'text-danger';
      break;

    case 'das':
      styleClass = 'text-primary';
      break;

    case 'plural':
      styleClass = 'text-info';
      break;
  }

  return (
    <span className={`fw-bold ${styleClass}`}>{props.children}</span>
  )
}

Gender.propTypes = {
  type: PropTypes.oneOf(['der', 'die', 'das', 'plural']).isRequired,
}

export default Gender;