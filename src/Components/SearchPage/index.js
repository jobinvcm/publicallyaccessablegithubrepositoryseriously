import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import propTypes from "prop-types";

const styles = theme => ({
  container: {
    width: "300px",
    position: "absolute",
    zIndex: "10",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "44px",
    overflow: "hidden"
  },
  root: {
    backgroundColor: "#fff",
    borderRadius: "25px",
    width: "100%"
  },
  inputBase: {
    display: "block",
    borderRadius: "5px",
    padding: "4px 16px",
  },
  iconButton: {
    color: "#01D277",
    position: "absolute",
    right: 0,
    bottom: "50%",
    transform: "translateY(50%)"
  },
  paperContainer: {
    borderRadius: "16px"
  }
});

const SearchPage = props => {
  const { classes, onChange } = props;
  return (
    <div className={classes.container}>
      <Paper elevation={20} className={classes.paperContainer}>
        <InputBase className={classes.inputBase} onChange={onChange} placeholder="Search Movies" />
        <IconButton
          className={classes.iconButton}
          aria-label="Search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

SearchPage.propTypes = {
  classes: propTypes.object,
}

export default withStyles(styles)(SearchPage);
