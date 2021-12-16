import React, { Component } from "react";
import "./App.css";
import Catalog from "./Catalog";
import About from "./About";
import WineMakers from "./WineMakers";
import { Link, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Catalog App</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Catalog</Link>
              </li>
              <li>
                <Link to="/winemakers">WineMakers</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route path="/winemakers" component={WineMakers} />
          <Route path="/about" component={About} />
          {/*<Route path="/footer" children={() => <Footer />} />*/}
          {/*/!*<Route path="/about" render={() => <About />} />*!/ this line can be use instead of the line 26 and the result is the same*/}
        </Switch>
      </div>
    );
  }
}

export default App;
