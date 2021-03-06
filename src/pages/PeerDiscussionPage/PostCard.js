import { makeStyles, Typography, Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import { Link } from "react-router-dom";
import AttachmentIcon from "@material-ui/icons/Attachment";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "1px 1px 3px 1px lightgray",
    borderRadius: "7px",
    margin: theme.spacing(2),
    padding: "15px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  viewcomment: {
    margin: "7px",
  },
  material: {
    border: "1px solid lightgray",
    borderRadius: "5px",
    margin: theme.spacing(1),
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  Buttons: {
    padding: "15px",
  },
  BoxSpaces: {
    padding: "15px",
  },
  info: {
    paddingLeft: "5px",
  },
  comment: {
    marginLeft: "15px",
    display: "flex",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
  sendicon: {
    marginLeft: "4px",
    marginTop: "12px",
    cursor: "pointer",
  },
  attachicon: {
    marginLeft: "4px",
    cursor: "pointer",
  },
}));

function PostCard({ data }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid>
            <Avatar className={classes.orange}>{data.person.slice(0, 1)}</Avatar>
          </Grid>
          <Box margin={1}>
            <div>
              <div>
                <Typography variant="body2" className={classes.info}>
                  {data.person}
                </Typography>
                <Typography variant="body1" className={classes.info}>
                  {data.date}
                </Typography>
              </div>
            </div>
          </Box>

          <Box className={classes.BoxSpaces}>
            <Typography variant="body1">{data.text}</Typography>

            {data.material && (
              <div className={classes.material}>
                <Typography variant="body2">{data.material}</Typography>

                <AttachmentIcon className={classes.attachicon} />
              </div>
            )}
            {data.media && <CardMedia className={classes.media} image={data.media} title="media" />}
          </Box>

          <div className={classes.viewcomment}>
            <Typography>
              <Link to="/peer/:id/comments">
                <i style={{ color: "gray" }}>View all 28 comments </i>
              </Link>
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <Grid>
              <Avatar className={classes.purple}>I</Avatar>
            </Grid>
            <div className={classes.comment}>
              <TextField
                id="standard-full-width"
                style={{ margin: 8 }}
                placeholder="Add a Comment.."
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <div className={classes.sendicon}>
                <SendIcon />
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </>
  );
}

export default PostCard;
