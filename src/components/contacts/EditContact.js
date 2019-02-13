import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInput from "../layout/TextInput";
//import uuid from "uuid";
//For HTTP requests
import Axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await Axios.get(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  onFormSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    //Check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (phone === "") {
      return this.setState({ errors: { phone: "Phone Number is required" } });
    }

    const { id } = this.props.match.params;
    const updatedContact = {
      name,
      email,
      phone
    };
    const res = await Axios.put(
      "https://jsonplaceholder.typicode.com/users/" + id,
      updatedContact
    );

    dispatch({ type: "EDIT_CONTACT", payload: res.data });

    //Clear State
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  onStateChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onFormSubmit.bind(this, dispatch)}>
                  <TextInput
                    label="Name"
                    placeholder="Name"
                    value={name}
                    name="name"
                    error={errors.name}
                    onChange={this.onStateChange}
                  />
                  <TextInput
                    label="Email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    name="email"
                    error={errors.email}
                    onChange={this.onStateChange}
                  />
                  <TextInput
                    label="Phone"
                    placeholder="Phone Number"
                    value={phone}
                    name="phone"
                    error={errors.phone}
                    onChange={this.onStateChange}
                  />
                  <button className="btn btn-light btn-block" type="submit">
                    Update Contact
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
