import React from "react";
import Paper from "@material-ui/core/Paper";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { isAbsolute } from "path";

const styles = theme => ({
  root: {
    maxWidth: "150px"
  },
  image: {
    minHeight: "100%",
    minWidth: "100%",
    verticalAlign: "bottom",
    display: "block"
  },
  text: {
    color: "#fff",
    textDecoration: "none"
  },
  imageContainer: {
    borderRadius: "5px",
    overflow: "hidden",
    position: "relative"
  },
  rating: {
    position: "absolute",
    top: "10px",
    left: "10px",
    padding: "2px 8px",
    fontSize: "12px",
    color: "#fff",
    backgroundColor: "orange",
    borderRadius: "6px"
  }
});

const MovieOverview = props => {
  let imageUrl = `https://image.tmdb.org/t/p/w185/${props.item.poster_path}`;
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.imageContainer} elevation={10}>
        <span className={classes.rating}>{props.item.vote_average * 10}</span>
        <img className={classes.image} src={imageUrl} />
      </Paper>
      <div className={classes.text}>{props.item.title}</div>
      <div className={classes.text}>{props.item.release_date}</div>
    </div>
  );
};

MovieOverview.propTypes = {
  item: propTypes.shape({
    imageUrl: propTypes.string,
    title: propTypes.string,
    year: propTypes.string
  })
};

export default withStyles(styles)(MovieOverview);
