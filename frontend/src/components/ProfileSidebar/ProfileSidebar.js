import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./ProfileSidebar.css";
class ProfileSidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("sidebarprops:" + this.props.id);
    return (
      <div className="profileSidebar">
        <h3>
          <div className="title">Feeds</div>
        </h3>
        <ul>
          <div>
            <div>
              <li className="rounded editableList">
                <Link to={`/profile/${this.props.id}/`}>Profile</Link>
              </li>
            </div>
          </div>
          <div>
            <div>
              <li className="rounded editableList">
                <Link to={`/profile/${this.props.id}/yourAnswers`}>
                  Answers
                </Link>
              </li>
            </div>
          </div>
          <div>
            <div>
              <li className="rounded editableList">
                <Link to={`/profile/${this.props.id}/yourQuestions`}>
                  Questions
                </Link>
              </li>
            </div>
          </div>
          <div>
            <div>
              <li className="rounded editableList">
                <Link to={`/profile/${this.props.id}/Followers`}>
                  Followers
                </Link>
              </li>
            </div>
          </div>
          <div>
            <div>
              <li className="rounded editableList">
                <Link to={`/profile/${this.props.id}/Following`}>
                  Following
                </Link>
              </li>
            </div>
          </div>
          <div>
            <div>
              <li className="rounded editableList">
                <Link to={`/courses/${this.props.id}/Activity`}>Activity</Link>
              </li>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}

export default withRouter(ProfileSidebar);
