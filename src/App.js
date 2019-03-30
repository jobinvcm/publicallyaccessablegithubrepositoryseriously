import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import SearchPage from "./Components/SearchPage";
import query from "./Services/query";
import CardsContainer from "./Components/CardsContainer";
import MovieFullView from "./Components/MovieFullView";
import "./App.css";

const FullOverlayNothingFound = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #081b23;
  z-index: 1000;
`;

const PopularTitle = styled.div`
  font-weight : bold;
  font-family: Montserrat;
  font-size: 20px;
  line-height: 24px;
  color: #E3F4FC;
  position: relative;
  z-index: 100;
  padding-bottom: 12px;
`;

const RouteGenetrator = props => {
  if (props.data) {
    return props.data.map(item => (
      <Route
        path={`/movie/*`}
        key={item.id}
        component={({ match }) => <MovieFullView match={match} />}
      />
    ));
  } else {
    return (
      <Route
        component={() => {
          console.log("nothing ofund");
          return (
            <FullOverlayNothingFound>Invalid Route</FullOverlayNothingFound>
          );
        }}
      />
    );
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "", data: "", query: "" };
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.initialQuery = this.initialQuery.bind(this);
  }

  initialQuery() {
    let queryBuilt = query("movie/popular");
    queryBuilt.then(res => {
      this.setState({ data: res.data.results });
      this.setState({ query: "popular" });
    });
  }

  onUpdateInput(e) {
    if (e.target.value) {
      let queryBuilt = query("search/movie", { query: e.target.value });
      queryBuilt.then(res => {
        this.setState({ data: res.data.results });
        this.setState({ query: "movies" });
      });
    } else {
      this.initialQuery();
    }
  }

  componentDidMount() {
    this.initialQuery();
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
            {this.state.query && this.state.query === "popular" && (
              <PopularTitle>Popular Movies</PopularTitle>
            )}
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
