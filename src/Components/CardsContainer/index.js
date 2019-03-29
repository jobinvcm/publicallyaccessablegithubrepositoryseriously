import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Switch, Route, Link } from "react-router-dom";

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
          let imageUrl = `https://image.tmdb.org/t/p/w92/${item.poster_path}`;
          return (
            <Grid
              item
              xs={6}
              sm={3}
              lg={2}
              onClick={() => props.onClickCard(item)}
              key={item.id}
            >
              <Link to={item.id}>
                <Paper elevation={3} key={item.id}>
                  <img className={classes.gridImage} src={imageUrl} />
                </Paper>
                <div>{item.title}</div>
                <div>{item.release_date}</div>
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