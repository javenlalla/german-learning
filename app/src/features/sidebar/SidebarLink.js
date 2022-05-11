import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SidebarLink = (props) => {
  return (
    <li
      className={`sidebar-item ${props.currentRoute === props.destinationLink ? 'active' : ''}`}>
      <Link to={props.destinationLink} className="sidebar-link">
        {/*<i className="bi bi-basket-fill" />*/}
        <span>{props.linkText}</span>
      </Link>
    </li>
  )
}

SidebarLink.propTypes = {
  currentRoute: PropTypes.string.isRequired,
  destinationLink: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default SidebarLink;