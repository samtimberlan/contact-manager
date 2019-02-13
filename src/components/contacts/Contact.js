import React, { Component } from "react";
// import {
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCol
// } from "mdbreact";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    await Axios.delete("https://jsonplaceholder.typicode.com/users/" + id);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    // Using Destructuring for cleaner code
    const { name, email, phone, id } = this.props;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              {/* <MDBCol>
              <MDBCard style={{ width: "22rem" }}>
                <MDBCardBody>
                  <MDBCardTitle>{name}</MDBCardTitle>
                  <MDBCardText>{email}</MDBCardText>
                  <MDBBtn href="#">{phone}</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol> */}

              <div className="card card-body mb-3">
                <div className="card-title">
                  {name}{" "}
                  <ion-icon
                    name="arrow-dropdown"
                    onClick={e => {
                      this.setState({
                        showContactInfo: !this.state.showContactInfo
                      });
                    }}
                    style={{ cursor: "pointer" }}
                  />
                  <ion-icon
                    name="close"
                    style={{ cursor: "pointer", float: "right", color: "red" }}
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  />
                  <Link to={`/contacts/edit/${id}`}>
                    <ion-icon
                      name="create"
                      style={{
                        cursor: "pointer",
                        float: "right",
                        color: "grey"
                      }}
                    />
                  </Link>
                </div>
                {showContactInfo ? (
                  <ul className="list-group">
                    <li className="list-group-item">Phone: {phone}</li>
                    <li className="list-group-item">Email: {email}</li>
                  </ul>
                ) : null}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};
