import React from "react";
import Input from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

const styles = theme => ({
  container: {
    width: "300px",
    position: "absolute",
    zIndex: "10",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "44px",
  },
  root: {
    backgroundColor: "#fff",
    borderRadius: "25px",
    width: "100%",
  },
  input: {
    margin: "8px 20px!important"
  },
  label: {
    marginLeft: "20px",
    color: "#01D277",
  }
});

const SearchPage = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Input
        className={classes.root}
        InputLabelProps={{ className: classes.label }}
        InputProps={{
          className: classes.input,
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="accent" />
            </InputAdornment>
          )
        }}
        onChange={props.onChange}
        label="Search Movie"
      />
    </div>
  );
};
export default withStyles(styles)(SearchPage);
