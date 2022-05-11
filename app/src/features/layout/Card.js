import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-body">
          { props.cardTitle &&
            <h3>{props.cardTitle}</h3>
          }

          {props.children}
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  cardTitle: PropTypes.string,
}

export default Card;