import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "#081B23",
    zIndex: "1000",
    padding: "24px"
  }
});

const NotFoundPage = props => {
  const { classes } = props;
  console.log(props);
  return (
    <div className={classes.container}>
      <Link to="/">
        <Button variant="raised">Invalid Route Go Back</Button>
      </Link>
    </div>
  );
}; 

export default withStyles(styles)(NotFoundPage);
