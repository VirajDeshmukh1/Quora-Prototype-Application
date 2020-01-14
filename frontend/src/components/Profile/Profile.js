import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { getProfile } from "../../actions/profileAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Followers from "../Followers/Followers";
import Following from "../Following/Following";
import yourAnswers from "../yourAnswers/yourAnswers";
import yourQuestions from "../yourQuestions/yourQuestions";
import ProfileSidebar from "../ProfileSidebar/ProfileSidebar";

import "../../App.css";
import "./Profile.css";
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      userData: "",
      name: "",
      email: "",
      phone: "",
      city: "",
      country: "",
      homeTown: "",
      school: "",
      company: "",
      languages: "",
      gender: "",
      about: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    let Token = localStorage.jwtToken;
    const user = {
      name: this.state.name,
      email: this.state.email,
      //avatar: this.state.userData.avatar,
      type: this.state.type,
      city: this.state.city,
      phone: this.state.phone,
      country: this.state.country,
      school: this.state.school,
      company: this.state.company,
      languages: this.state.languages,
      homeTown: this.state.homeTown,
      about: this.state.about
    };
    axios
      .post(window.base_url + "/users/profile", user, {
        headers: { Authorization: Token }
      })
      .then(response => {
        console.log(response.data);
        this.setState({
          userData: response.data,
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
          city: response.data.city,
          country: response.data.country,
          homeTown: response.data.homeTown,
          school: response.data.school,
          company: response.data.company,
          languages: response.data.languages,
          gender: response.data.gender,
          about: response.data.about
        });
      });

    //this.props.updateProfile(user);
    /* profile(user).then(res => {
      this.props.history.push(`/profile`);
    });*/
  }

  /*componentWillMount() {
    //this.props.getProfile();
    let Token = localStorage.jwtToken;
    const decoded = jwt_decode(Token);
    console.log("server token:" + Token);
    console.log(decoded);
    axios
      .get(window.base_url + "/users/profile", {
        params: { email: decoded.email },
        headers: { Authorization: Token }
      })
      .then(response => {
        console.log(response.data);
        this.setState({
          userData: response.data,
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
          city: response.data.city,
          country: response.data.country,
          homeTown: response.data.homeTown,
          school: response.data.school,
          company: response.data.company,
          languages: response.data.languages,
          gender: response.data.gender,
          about: response.data.about
        });
      });
  } */
  logOut(e) {
    //e.prventDefault()
    localStorage.removeItem("jwtToken");

    this.props.history.push("login");
  }
  render() {
    return (
      <div className="container profileWrapper">
        <div className="row">
          <div className="col-9 profileLeftWrapper">
            <div className="container leftInner">
              <div className="row">
                <div className="col-12 profileBoxWrapper">
                  <div className="row">
                    <div className="col-2 leftWrapper profileImageWrapper">
                      <img
                        src="https://qph.fs.quoracdn.net/main-thumb-70332528-200-qpikqkavbsrjbupveiqfitmnpiraxvsw.jpeg"
                        className="rounded-circle"
                        alt="username"
                        height="100"
                        width="100"
                      />
                      <span>
                        <Link to="#">
                          <button className="edit-button" role="submit">
                            Edit Profile photo
                          </button>
                        </Link>
                      </span>
                    </div>
                    <div className="col-10 rightWrapper profileContentWrapper" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="container">
                    <div className="row">
                      <div className="col-3 leftWrapperfeedSidebarWrapper">
                        <ProfileSidebar />
                      </div>
                      <div className="col-9 rightWrapper ProfileActivityWrapper">
                        <Switch>
                          <Route
                            path="/profile/yourAnswers"
                            component={yourAnswers}
                          />
                          <Route
                            path="/profile/yourQuestions"
                            component={yourQuestions}
                          />
                          <Route
                            path="/profile/followers"
                            component={Followers}
                          />
                          <Route
                            path="/profile/following"
                            component={Following}
                          />
                        </Switch>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 profileRightWrapper">
            <div className="row">
              <div className="col-12 credentialWrapper profileSidebar">
                <h3 className="credflex">
                  Credentials & Highlights{" "}
                  <Link to="#xyz">
                    {" "}
                    <i class="fas fa-pencil-alt" />{" "}
                  </Link>
                </h3>
              </div>
              <div className="col-12 topicWrapper profileSidebar">
                <h3 className="credflex">
                  Konws About{" "}
                  <Link to="#abc">
                    <i class="fas fa-pencil-alt" />
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  //login: PropTypes.func.isRequired,
  //profile: PropTypes.func.isRequired,
  //auth: PropTypes.object.isRequired
  //errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
/*
export default connect(
  mapStateToProps,
  { updateProfile }
)(withRouter(Profile)); */

export default connect(
  mapStateToProps,
  {}
)(withRouter(Profile));
