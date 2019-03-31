import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import MovieOverview from "../MovieOverview";

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
      zIndex: "10"
    }
  };
};

const CardsContainer = props => {
  const { classes, data, type, ItemComponent } = props;
  if (data.length) {
    return (
      <Grid container spacing={24} className={classes.gridContainer}>
        {data.map(item => {
          return (
            <Grid
              className={classes.gridItem}
              item
              xs={6}
              sm={4}
              lg={2}
              key={item.id}
            >
              <Link className={classes.link} to={`/${type}/${item.id}`}>
                {<ItemComponent item={item} />}
              </Link>
            </Grid>
          );
        })}
      </Grid>
    );
  } else {
    return <div>No Movie Found !!</div>;
  }
};

CardsContainer.propTypes = {
  classes: propTypes.object,
  type: propTypes.string,
  ItemComponent: propTypes.func
};

CardsContainer.defaultProps = {
  type: "movie",
  ItemComponent: MovieOverview
};

export default withStyles(styles)(CardsContainer);
