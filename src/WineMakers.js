import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Catalog from "./Catalog";
import About from "./About";

class WineMakers extends React.Component {
  renderWineMakersList() {
    return (
      <ul>
        <li>
          <Link to="/winemakers/WM2">Wine & Co</Link>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Catalog} />
        <Route path="/winemakers" component={WineMakers} />
        <Route path="/about" component={About} />
      </Switch>
    );
  }
}

export default WineMakers;
