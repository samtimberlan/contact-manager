import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header(props) {
  const { title } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
      <div className="container">
        <a href="/" className="navbar-brand">
          {title}
        </a>
      </div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <ion-icon name="home" />
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contacts/add" className="nav-link">
            <ion-icon name="add" />
            Add
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <ion-icon name="book" />
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Header.defaultProps = {
  title: "Contact App"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};
export default Header;
