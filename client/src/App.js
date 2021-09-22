import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  
} from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostDetails from "./components/PostDetails/PostDetails";
import Home from "./components/Home/Home";

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Photo Gallary
          </Typography>
        </AppBar>
      </Container>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/posts/:id" exact component={PostDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
