import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";

import { deletePost } from "../../../actions/posts";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const openPost = () => {
    history.push(`/posts/${post._id}`);
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      
        <CardMedia
          className={classes.media}
          image={
            post.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          title={post.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6"  onClick={openPost}>{post.creator}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes.overlay2}>
          <Button
            style={{ color: "blue" }}
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        <div className={classes.details}>
         
        </div>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
          onClick={openPost}
        >
          {post.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" onClick={openPost}>
            {post.message}
          </Typography>
        </CardContent>
   
      <CardActions className={classes.cardActions}>
       
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
