import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h1 class="display-4">Page Not Found</h1>
        <p className="lead">
          Here's a link to the homepage instead{" "}
          <Link exact to="/" path="/" component="Contacts">
            Home
          </Link>
        </p>
      </div>
    );
  }
}
