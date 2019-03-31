import React from "react";
import withWidth from "@material-ui/core/withWidth";
import { withStyles } from "@material-ui/core/styles";
import propTypes from "prop-types";

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
  xs: "w300",
  sm: "w780",
  all: "w1280"
});

const imageFetch = props => {
  const { classes, width, imageUrl } = props;
  if (width === "xs" || width === "sm") {
    return (
      <img
        alt="Background Image"
        className={classes.root}
        src={`${imageBase}/${breakpointBackdropMapping()[props.width]}/${
          imageUrl
        }`}
      />
    );
  } else {
    return (
      <img
        alt="Background Image"
        className={classes.root}
        src={`${imageBase}/${breakpointBackdropMapping().all}/${
          imageUrl
        }`}
      />
    );
  }
};

imageFetch.propTypes = {
  classes: propTypes.object,
  width: propTypes.string,
  imageUrl: propTypes.string.isRequired,
}

export default withWidth()(withStyles(styles)(imageFetch));
