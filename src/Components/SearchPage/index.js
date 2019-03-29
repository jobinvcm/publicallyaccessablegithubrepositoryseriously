import React from "react";
import TextField from "@material-ui/core/TextField";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "", input: "" };
  }

  render() {
    return (
      <TextField onChange={this.props.onChange}/>
    )
  }
};

export default SearchPage;
