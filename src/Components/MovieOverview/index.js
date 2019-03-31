import React from "react";
import Paper from "@material-ui/core/Paper";
import Moment from "react-moment";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import RatingDisplay from "../RatingDisplay";

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
  textTitle: {
    color: "#E6F7FF",
    textDecoration: "none",
    fontSize: "14px",
    lineHeight: "16px",
    marginBottom: "8px"
  },
  textDate: {
    color: '#A1D1E6',
    textDecoration: "none",
    fontSize: "12px",
    lineHeight: "14px",
  },
  imageContainer: {
    borderRadius: "8px",
    overflow: "hidden",
    position: "relative",
    marginBottom: "12px"
  },
  rating: {
    position: "absolute",
    top: "4px",
    left: "4px"
  }
});

const MovieOverview = props => {
  let imageUrl = `https://image.tmdb.org/t/p/w185/${props.item.poster_path}`;
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.imageContainer} elevation={10}>
        <div className={classes.rating}>
          <RatingDisplay rating={props.item.vote_average} />
        </div>
        <img className={classes.image} src={imageUrl} />
      </Paper>
      <div className={classes.textTitle}>{props.item.title}</div>
      <div className={classes.textDate}>{<Moment format="MMMM YYYY">{new Date(props.item.release_date)}</Moment>}</div>
    </div>
  );
};

MovieOverview.propTypes = {
  item: propTypes.shape({
    imageUrl: propTypes.string,
    title: propTypes.string.isRequired,
    release_date: propTypes.string.isRequired,
    vote_average: propTypes.number.isRequired,
  })
};

export default withStyles(styles)(MovieOverview);
