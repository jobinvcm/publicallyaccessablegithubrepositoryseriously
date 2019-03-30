import React from "react";
import withWidth from "@material-ui/core/withWidth";
import { withStyles } from "@material-ui/core/styles";
import { isAbsolute } from "path";

const imageBase = "https://image.tmdb.org/t/p";

const styles = theme => ({
  root: {
    minWidth: "100%",
    minHeight: "100%",
		display: "block",
    position: "absolute",
    width: "auto",
    height: "auto",
    [theme.breakpoints.up('md')] : {
      position: "absolute",
      width: "auto"
    }
  }
});
const breakpointBackdropMapping = () => ({
  xs: "w780",
  sm: "w780",
  all: "w1280"
});

const imageFetch = props => {
  const { classes } = props;
  if (props.width === "xs" || props.width === "sm") {
    return (
      <img
        className={classes.root}
        src={`${imageBase}/${breakpointBackdropMapping()[props.width]}/${
          props.imageUrl
        }`}
      />
    );
  } else {
    return (
      <img
        className={classes.root}
        src={`${imageBase}/${breakpointBackdropMapping().all}/${
          props.imageUrl
        }`}
      />
    );
  }
};

export default withWidth()(withStyles(styles)(imageFetch));
