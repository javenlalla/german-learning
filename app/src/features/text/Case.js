import React from 'react';
import PropTypes from 'prop-types';

const Case = (props) => {

  let styleClass;
  switch (props.type) {
    case 'nom':
      styleClass = 'bg-secondary';
      break;

    case 'akk':
      styleClass = 'bg-warning';
      break;

    case 'dat':
      styleClass = 'bg-dark';
      break;

    case 'gen':
      styleClass = 'bg-danger';
      break;

    default:
      break;
  }

  return (
    <span className={`badge ${styleClass}`}>{props.children}</span>
  )
}

Case.propTypes = {
  type: PropTypes.oneOf(['dat', 'akk', 'nom', 'gen']).isRequired,
}

export default Case;