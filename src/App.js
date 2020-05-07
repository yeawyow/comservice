import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard";
import ComEquipFrom from "./Components/Pages/ComEquipFrom";
import RepairRegist from "./Components/Pages/RepairRegist";
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
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/comequipfrom" component={ComEquipFrom} />
            <Route exact path="/RepairRegist" component={RepairRegist} />
          </Switch>

          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
