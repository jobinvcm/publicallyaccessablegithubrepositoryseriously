import React, { Component } from "react";
import MovieOverview from "./Components/MovieOverview";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

import "./App.css";

const items = [{x: 1}, {x: 2}, {x: 4}];

const RouteGenetrator = (props) => {
  console.log(`/${items[0].x}`);
  return items.map(item => <Route path={`/${item.x}`} key={item.x} component={() => <div>{item.x}</div>} />);
};

const LinkGenerator = (props) => {
  return items.map(item => <Link key={item.x} to={`/${item.x}`}><MovieOverview item={{title: "slkd", year: "sldkf", imageUrl: "https://ssss"}} /></Link>)
}

class App extends Component {
  render() {
    console.log(<LinkGenerator />);
    return (
      <BrowserRouter>
        <div className="App">
          {/* <MovieOverview item={{title: "slkd", year: "sldkf", imageUrl: "https://ssss"}} /> */}
          {/* <Link to="/view">View</Link> */}
          <LinkGenerator />
          <Switch>
            <Route exact path="/" component={() => <div>HOMEPAGE</div>} />
            {<RouteGenetrator />}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
