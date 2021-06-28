import React from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles, Grid, Card, CardContent, Typography, Link, Hidden } from "@material-ui/core";

function ActivityCard({ props }) {
  const classes = useStyles();
  const { title, icon, subtitle, description } = props;

  return (
    <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <img src={icon} className={classes.image} />
          <div className={classes.titleCont}>
            <Typography variant="h6" color="textSecondary" gutterBottom className={classes.title}>
              {title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <Link>
                <KeyboardArrowRightIcon style={{ marginLeft: ".05rem" }} />
              </Link>
            </Typography>
          </div>
          <Typography variant="h4" className={classes.margin} gutterBottom>
            {subtitle}
          </Typography>
          <Hidden smDown>
            <Typography variant="subtitle1" className={classes.margin} gutterBottom>
              {description}
            </Typography>
          </Hidden>
        </CardContent>
      </Card>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    boxShadow: "0px 4px 15px rgba(55, 64, 161, 0.25)",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      height: 70,
    },
  },
  titleCont: {
    display: "flex",
  },
  title: {
    textTransform: "uppercase",
  },
  cardContent: {
    padding: theme.spacing(4),
    position: "relative",
  },
  margin: {
    marginTop: theme.spacing(2),
    cursor: "pointer",
  },
  image: {
    position: "absolute",
    right: -20,
    bottom: 0,
    height: 120,
    [theme.breakpoints.down("sm")]: {
      height: 100,
    },
  },
}));

export default ActivityCard;
