import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledSpan = styled("span")`
  background-color: ${props => props.ratingColor};
  display: block;
  padding: 3px 9px;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
`;

const RatingDisplay = props => {
    const { lowRatingColor, midRatingColor, highRatingColor, rating } = props;
    let stdRating = rating * 10;
    let ratingColor = midRatingColor;
    if (stdRating < 30) {
        ratingColor = lowRatingColor;
    } else if (stdRating > 80) {
        ratingColor = highRatingColor;
    }
    
    return <StyledSpan ratingColor={ratingColor}>{stdRating}%</StyledSpan>
};

RatingDisplay.propTypes = {
  lowRatingColor: propTypes.string,
  midRatingColor: propTypes.string,
  highRatingColor: propTypes.string,
  rating: propTypes.number.isRequired,
};

RatingDisplay.defaultProps = {
  lowRatingColor: '#D1225B',
  midRatingColor: '#4902A3',
  highRatingColor: '#01D277',
}

export default RatingDisplay;