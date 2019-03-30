import React from "react";
import Paper from "@material-ui/core/Paper";
import propTypes from 'prop-types';
import ImageFetch from '../../Services/imageLoad';
import { withStyles } from '@material-ui/core/styles';
import { Hidden } from "@material-ui/core";

const styles = theme => ({
    root: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflowY: "scroll",
        backgroundColor: "#081B23",
    },
    imageContainer: {
        maxWidth: "185px",
        overflow: "hidden",
        position: "relative",
        top: "-100px"
    },
    backgroundImageContainer: {
        width: "100%",
        maxHeight: "250px",
        [theme.breakpoints.up('md')] : {
            minHeight: "100vh"
        },
        overflow: "hidden",
        position: "relative",
    },
    backgroundImage: {
        minWidth: "100%",
        minHeight: "100%",
        display: "block"
    },
    profileImage: {
        display: "block",
        minWidth: "100%",
        minHeight: "100%",
    }
});

const MovieFullView = (props) => {
  const { classes } = props;
  let imageUrl = `https://image.tmdb.org/t/p/w185/${props.item.poster_path}`;
  
  return (
    <div className={classes.root}>
        <div className={classes.backgroundImageContainer}>
            {<ImageFetch style={classes.backgroundImage} imageUrl={props.item.backdrop_path}/>}
        </div>
      <Paper className={classes.imageContainer} elevation={2}>
        <img className={classes.profileImage} src={imageUrl} />
      </Paper>

      <div>{props.item.title}</div>
      <div>{props.item.year}</div>
      <div>{props.item.overview}</div>
    </div>
  );
};

MovieFullView.propTypes = {
  item: propTypes.shape({
    imageUrl: propTypes.string,
    title: propTypes.string,
    year: propTypes.string
  })
};

export default withStyles(styles)(MovieFullView);
