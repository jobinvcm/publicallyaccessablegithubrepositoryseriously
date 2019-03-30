import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Switch, Route, Link } from "react-router-dom";
import MovieOverview from "../MovieOverview";
import { relative } from "path";

const styles = theme => {
  return {
    link: {
      textDecoration: "none"
    },
    gridItem: {
      paddingLeft: "8px"
    },
    gridContainer: {
      position: "relative",
      zIndex: "10",
    }
  };
};

const CardsContainer = props => {
  const { classes } = props;
  if (props.data.length) {
    return (
      <Grid container spacing={24} className={classes.gridContainer}>
        {props.data.map(item => {
          return (
            <Grid className={classes.gridItem} item xs={6} sm={4} lg={2} key={item.id}>
              <Link className={classes.link} to={`/movie/${item.id}`}>
                <MovieOverview item={item} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    );
  } else {
    return <div>NOTHING!!</div>;
  }
};

export default withStyles(styles)(CardsContainer);
