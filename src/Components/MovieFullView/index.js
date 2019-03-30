import React from "react";
import Paper from "@material-ui/core/Paper";
import Moment from "react-moment";
import ArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import propTypes from "prop-types";
import ImageFetch from "../../Services/imageLoad";
import query from "../../Services/query";
import timeConvert from "../../Services/timeConvert";

const styles = theme => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    overflowY: "scroll",
    backgroundColor: "#081B23",
    transition: "all .5s ease",
    zIndex: "100"
  },
  profileImageContainer: {
    maxWidth: "140px",
    overflow: "hidden"
  },
  backgroundImageContainer: {
    width: "100%",
    minHeight: "250px",
    [theme.breakpoints.up("sm")]: {
      minHeight: "400px",
    },
    [theme.breakpoints.up("md")]: {
      minHeight: "100vh"
    },

    overflow: "hidden",
    position: "relative"
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
    width: "100%"
  },
  notFound: {
    color: "#fff"
  },
  goBackIcon: {
    position: "absolute",
    top: "16px",
    left: "16px",
    zIndex: "1000",
  },
  goBackLink: {
    color: "#fff",
    backgroundColor: "rgba(0,0,0,.12)",
    display: "inline-block",
    padding: "4px",
    borderRadius: "50%",
  },
  infoSection: {
    padding: "0 24px"
  },
  infoImageSection: {
    display: "inline-block",
    width: "40%",
    position: "relative",
    top: "-40px",
    [theme.breakpoints.up("md")]: {
      top: "0",
    }
  },
  infoDetailsSection: {
    display: "inline-block",
    width: "60%",
    verticalAlign: "top",
    padding: "24px 0"
  },
  itemTitle: {
    fontFamily: "Montserrat",
    fontSize: "28px",
    fontWeight: "bold",
    lineHeight: "30px",
    color: "#E3F4FC",
    paddingBottom: "12px"
  },
  itemDetails: {
    fontFamily: "Montserrat",
    fontSize: "12px",
    color: "#B8D8E6",
    lineHeight: "21px"
  },
  overviewTitle: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: "20px",
    color: "#E3F4FC",
    paddingTop: "24px",
    paddingBottom: "12px",
    borderTop: "1px solid #0F303D"
  },
  overviewContainer: {
    padding: "0 24px"
  },
  overviewDetails: {
    color: "#9FBBC7",
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "24px"
  },
  notFound: {
    fontSize: "24px",
    padding: "100px 24px "
  },
  details: {
    [theme.breakpoints.up("md")]: {
      position: "fixed",
      bottom: "10%",
      maxWidth: "960px",
      borderRadius: "0 12px 12px 0",
      backgroundColor: "rgba(0,0,0,.6)",
      padding: "24px 0",
    }
  }
});

class MovieFullView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: "", error: "" };
    this.buildQuery = this.buildQuery.bind(this);
  }

  buildQuery(itemId) {
    let queryBuilt = query(`movie/${itemId}`);
    let _this = this;
    queryBuilt
      .then(res => {
        this.setState({ item: res.data });
      })
      .catch(function(error) {
        console.log(this);
        _this.setState({ error: "Cant Find Movie..." });
      });
  }

  componentDidMount() {
    this.buildQuery(this.props.match.params[0]);
  }

  render() {
    console.log(this.props)
    const { classes } = this.props;
    const { item } = this.state;
    let imageUrl = `https://image.tmdb.org/t/p/w185/${item.poster_path}`;

    return (
      <div className={classes.root}>
        {this.state.item && (
          <>
            <div className={classes.goBackIcon}>
              <Link to="/" className={classes.goBackLink}>
                <ArrowLeftIcon fontSize="large" />
              </Link>
            </div>
            <div className={classes.backgroundImageContainer}>
              {
                <ImageFetch
                  style={classes.backgroundImage}
                  imageUrl={item.backdrop_path}
                />
              }
            </div>
            <div className={classes.details}>
              <div className={classes.infoSection}>
                <div className={classes.infoImageSection}>
                  <Paper
                    className={classes.profileImageContainer}
                    elevation={12}
                  >
                    <img className={classes.profileImage} src={imageUrl} />
                  </Paper>
                </div>
                <div className={classes.infoDetailsSection}>
                  <div className={classes.itemTitle}>{item.title}</div>
                  <div className={classes.itemDetails}>
                    {
                      <Moment format="YYYY">
                        {new Date(item.release_date)}
                      </Moment>
                    }{" "}
                    . <span>{item.vote_average * 10} % User Score</span>
                  </div>
                  <div className={classes.itemDetails}>
                    {timeConvert(item.runtime)}
                  </div>
                </div>
              </div>
              <div className={classes.overviewContainer}>
                <div className={classes.overviewTitle}>Overview</div>
                <div className={classes.overviewDetails}>{item.overview}</div>
              </div>
            </div>
          </>
        )}
        {!this.state.item && (
          <>
            <div className={classes.goBackIcon}>
              <Link to="/" className={classes.goBackLink}>
                <ArrowLeftIcon fontSize="large" />
              </Link>
            </div>
            {this.state.error && (
              <div className={classes.notFound}>{this.state.error}</div>
            )}
            {!this.state.error && (
              <div className={classes.notFound}>Loading ....</div>
            )}
          </>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(MovieFullView);
