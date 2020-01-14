import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import axios from "axios";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Profile from "../Profile/Profile";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Answer from "../Answer/Answer";
import "../../App.css";
import "./Dashboard.css";
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  //Dummy componenet did mount
  render() {
    return (
      <div>
        <Navbar />

        <div className="page-content">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/Answer" component={Answer} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginStateStore: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(withRouter(Dashboard));
