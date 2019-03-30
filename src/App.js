import React, { Component } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import styled from "styled-components";
import SearchPage from "./Components/SearchPage";
import query from "./Services/query";
import CardsContainer from "./Components/CardsContainer";
import MovieFullView from "./Components/MovieFullView";
import "./App.css";

const PopularTitle = styled.div`
  font-weight: bold;
  font-family: Montserrat;
  font-size: 20px;
  line-height: 24px;
  color: #e3f4fc;
  position: relative;
  z-index: 100;
  padding-bottom: 12px;
`;

const RouteGenerator = props => {
  if (props.data) {
    return props.data.map(item => (
      <Route
        path={`/movie/*`}
        key={item.id}
        component={({ match }) => <MovieFullView match={match} />}
      />
    ));
  }
  else {
    return (
      <Route
        component={() => <div>Invalid Route</div>}
      />
    );
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "", data: "", query: "", location: "" };
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
    this.setState({location: "/"});
    this.initialQuery();
  }

  render() {
    return (
      <BrowserRouter>
        <div class="content-wrapper">
          <div className="header-search-container">
            <div className="header-search">
              <SearchPage onChange={this.onUpdateInput} location={this.state.location}/>
            </div>
          </div>
          <div className="body-display">
            {this.state.query && this.state.query === "popular" && (window.location.pathname === "/") && (
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
              {<RouteGenerator data={this.state.data} />}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
