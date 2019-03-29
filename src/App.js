import React, { Component } from "react";
import MovieOverview from "./Components/MovieOverview";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import SearchPage from "./Components/SearchPage";
import query from "./Services/query";
import "./App.css";

const items = [{x: 1}, {x: 2}, {x: 4}];

const RouteGenetrator = (props) => {
  if (props.data) {
    return props.data.map(item => <Route path={`/${item.id}`} key={item.id} component={() => <div>{item.original_title}</div>} />);
  };
};

const LinkGenerator = (props) => {
  console.log(props.data);
  if (props.data) {
    return props.data.map(item => <Link key={item.id} to={`/${item.id}`}><MovieOverview item={{title: item.original_title, year: item.release_date, imageUrl: item.poster_path}} /></Link>)
  }
  else {
    return <div>Nothing</div>
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state={input: "", data: ""};
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
        <div className="App">
          <SearchPage onChange={this.onUpdateInput} />
          {/* <MovieOverview item={{title: "slkd", year: "sldkf", imageUrl: "https://ssss"}} /> */}
          {/* <Link to="/view">View</Link> */}
          >
          <Switch>
            <Route exact path="/" component={() => <LinkGenerator data={this.state.data}/>} />
            {<RouteGenetrator data={this.state.data}/>}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
