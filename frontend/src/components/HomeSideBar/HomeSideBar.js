import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./HomeSideBar.css";
class HomeSideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("sidebarprops:" + this.props.id);
    return (
      <div className="courseSideBar">
        <div className="coursesidebarInner">
          <ul>
            <li className="rounded">
              <Link to={`/courses/${this.props.id}/Home`}>Home</Link>
            </li>
            <li className="rounded">
              <Link to={`/courses/${this.props.id}/Announcements`}>
                Announcements
              </Link>
            </li>
            <li className="rounded">
              <Link to={`/courses/${this.props.id}/Assignments`}>
                Assignments
              </Link>
            </li>
            <li className="rounded">
              <Link to={`/courses/${this.props.id}/Discussion`}>
                Discussions
              </Link>
            </li>
            <li className="rounded">
              <Link to={`/courses/${this.props.id}/Grades`}>Grades</Link>
            </li>
            <li className="rounded">
              <Link to={`/courses/${this.props.id}/People`}>People</Link>
            </li>
            <li className="rounded">
              <Link to={`/courses/${this.props.id}/Files`}>Files</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(HomeSideBar);
