import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard";
import ComEquip from "./Components/Pages/ComEquip";
import Navbars from "./Components/Layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Layout/Sidebar";
import Footer from "./Components/Layout/Footer";

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
