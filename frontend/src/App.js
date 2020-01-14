import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
//import Interest from "./Components/Interests/Interests";
import "./App.css";

//App Component
class App extends Component {
  render() {
    return (
      //Use Browser Router to route to different pages
      <BrowserRouter>
        <div>
          {/*Render Different Component based on Route*/}
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
//Export the App component so that it can be used in index.js
export default App;

// <Route path="/interests" component={Interest} />
