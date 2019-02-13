import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  render() {
    // First get the contacts using destructuring
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <h1 className="display-4">
                <span className="text-danger">Contact</span> List
              </h1>
              {value.contacts.map(contact => (
                <Contact
                  key={contact.id}
                  name={contact.name}
                  phone={contact.phone}
                  email={contact.email}
                  id={contact.id}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
