import React from 'react';
import { styled } from '@material-ui/core/styles';

const styledSpan = styled('span')((props) => {console.log(props) ;return {backgroundColor: "green"}} )
const RatingDisplay = props => {
    const { classes, lowRatingColor, midRatingColor, highRatingColor, rating } = props;
    let stdRating = rating * 10;
    let ratingColor = midRatingColor;
    if (stdRating < 30) {
        ratingColor = lowRatingColor;
    } else if (stdRating > 80) {
        ratingColor = highRatingColor;
    }
    
    return <styledSpan color={ratingColor} className={classes.root}>{stdRating}</styledSpan>
};

export default RatingDisplay;