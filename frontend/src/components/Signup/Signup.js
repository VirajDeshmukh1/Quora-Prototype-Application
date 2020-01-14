import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import "./signup.css";
import { connect } from "react-redux";
var signupUser = require("../../Actions/authentication").signupUser;

//Define a Login Component
class Signup extends Component {
  constructor(props) {
    super(props);
  }

  renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label>{label}</label>
      <input
        className="input"
        {...input}
        placeholder={label}
        type={type}
        className="form-control"
      />
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );

  //submit Login handler to send a request to the node backend
  onSignup = values => {
    this.props.signupUser(values, this.props.history);
    console.log("values entered ", values);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="bg_container">
          <div className="signup">
            <div className="form">
              <img src="//qsf.fs.quoracdn.net/-3-images.logo.wordmark_default.svg-26-bfa6b94bc0d6af2e.svg" />
              <h4>
                A place to share knowledge and better understand the world
              </h4>
              <form onSubmit={handleSubmit(this.onSignup.bind(this))}>
                <div className="row">
                  <div className="col-md-6">
                    <Field
                      label="First Name"
                      type="text"
                      component={this.renderField}
                      name="firstName"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <Field
                      label="Last Name"
                      type="text"
                      component={this.renderField}
                      name="lastName"
                      className="form-control"
                    />
                  </div>
                </div>

                <Field
                  label="Email"
                  type="text"
                  component={this.renderField}
                  name="email"
                  className="form-control"
                />

                <Field
                  label="Password"
                  type="password"
                  component={this.renderField}
                  name="password"
                  className="form-control"
                />
                <div>
                  <button className="btn btn-primary">Sign Up</button>
                  <Link to="/login" style={{ display: "block" }}>
                    <span> Already have an account ? </span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "* Required";
  }
  if (!values.lastName) {
    errors.lastName = "* Required";
  }
  if (!values.email) {
    errors.email = "* Required";
  } else if (!/\w+(\.|\w)+\w+@\w+([.-]?\w+)*\.(edu|com)/gi.test(values.email)) {
    errors.email = "Please Sign up with a valid email id";
  }

  if (!values.password) {
    errors.password = "* Required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/g.test(
      values.password
    )
  ) {
    console.log("Invalid Password");
    errors.password =
      "Please enter a valid Password. (Minimum 8 characters, atleast 1 number, 1 uppercase and 1 lowercase letter and 1 special character)";
  }
  return errors;
}

const mapStateToProps = state => ({
  user: state.userData,
  errors: state.errors
});

export default reduxForm({ mapStateToProps, validate, form: "signup" })(
  connect(
    null,
    { signupUser }
  )(withRouter(Signup))
);
