import React from "react";
import Paper from "@material-ui/core/Paper";
import propTypes from 'prop-types';

const MovieOverview = (props) => {
  return (
    <div>
      <Paper elevation={2}>
        <img src={props.item.imageUrl} />
      </Paper>

      <div>{props.item.title}</div>
      <div>{props.item.year}</div>

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

export default MovieOverview;
