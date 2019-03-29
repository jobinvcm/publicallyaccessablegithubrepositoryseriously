import React, { Component } from "react";
import MovieOverview from "./Components/MovieOverview";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import SearchPage from "./Components/SearchPage";
import query from "./Services/query";
import "./App.css";
import CardsContainer from "./Components/CardsContainer";
import MovieFullView from "./Components/MovieFullView";

const RouteGenetrator = props => {
  if (props.data) {
    return props.data.map(item => (
      <Route
        path={`/movie/${item.id}`}
        key={item.id}
        component={() => <MovieFullView item={item} />}
      />
    ));
  } else {
    return (
      <Route
        component={() => {
          return <div>sdfsd</div>;
        }}
      />
    );
  }
};

// const LinkGenerator = (props) => {
//   if (props.data) {
//     return props.data.map(item => <Link key={item.id} to={`/movie/${item.id}`}><MovieOverview item={{title: item.original_title, year: item.release_date, imageUrl: item.poster_path}} /></Link>)
//   }
//   else {
//     return <div>Nothing</div>
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "", data: "" };
    this.onUpdateInput = this.onUpdateInput.bind(this);
  }

  onUpdateInput(e) {
    if (e.target.value) {
      let queryBuilt = query("search/movie", { query: e.target.value });
      queryBuilt.then(res => {
        this.setState({ data: res.data.results });
      });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div class="content-wrapper">
          <div className="header-search-container">
            <div className="header-search">
              <SearchPage onChange={this.onUpdateInput} />
            </div>
          </div>
          <div className="body-display">
            {/* <MovieOverview item={{title: "slkd", year: "sldkf", imageUrl: "https://ssss"}} /> */}
            {/* <Link to="/view">View</Link> */}
            <Switch>
              <Route
                exact
                path="/"
                component={({ location }) => (
                  <CardsContainer data={this.state.data} location={location} />
                )}
              />
              {<RouteGenetrator data={this.state.data} />}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
