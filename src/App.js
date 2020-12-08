import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/pages/home.js";
import About from "./component/pages/about.js";
import Contact from "./component/pages/contact.js";
import Navbar from "./component/layout/navbar.js";
import Addusers from "./component/users/addUsers.js";
import EditUser from "./component/users/editusers";
import User from "./component/users/users";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={Addusers} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
