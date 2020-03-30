import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import ComEquip from "./Components/ComEquip";
import Navbars from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbars />
          <Sidebar />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/comequip" component={ComEquip} />
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
