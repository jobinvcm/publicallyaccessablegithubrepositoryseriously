import React from "react";
import Paper from "@material-ui/core/Paper";
import propTypes from 'prop-types';

const MovieFullView = (props) => {
  let imageUrl = `https://image.tmdb.org/t/p/w92/${props.item.poster_path}`;
  let backdropURl = `https://image.tmdb.org/t/p/w1280/${props.item.backdrop_path}`;
  
  return (
    <div>
      <img src={backdropURl} />
      <Paper elevation={2}>
        <img src={imageUrl} />
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

export default MovieFullView;
