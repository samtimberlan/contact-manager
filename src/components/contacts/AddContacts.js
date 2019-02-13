import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInput from "../layout/TextInput";
//import uuid from "uuid";
//For HTTP requests
import Axios from "axios";

class AddContacts extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

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

    const newContact = {
      //id: uuid(),
      name,
      email,
      phone
    };
    const res = await Axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payload: res.data });

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
              <div className="card-header">Add Contact</div>
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
                    Add Contact
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

export default AddContacts;
