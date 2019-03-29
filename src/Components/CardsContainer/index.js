import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Switch, Route, Link } from "react-router-dom";
import MovieOverview from "../MovieOverview";

const styles = theme => {
  return {
    gridImage: {
      minWidth: "100%",
      verticalAlign: "bottom"
    }
  };
};

const CardsContainer = props => {
  const { classes } = props;
  if (props.data.length) {
    return (
      <Grid container spacing={24}>
        {props.data.map(item => {
          return (
            <Grid
              item
              xs={6}
              sm={3}
              lg={2}
              key={item.id}
            >
              <Link to={`/movie/${item.id}`}>
                <MovieOverview item={item}/>
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
