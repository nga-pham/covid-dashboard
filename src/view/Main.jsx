import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Copyright from "./Copyright";
import Graph from './Graph';
import Home from './Home';
import NavBar from './NavBar';
import Table from "./Table";
import useStyles from "./useStyles";

export default function Main() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <NavBar />
      </AppBar>
      {/* Hero unit */}
      <Router>
        <Switch>
          <Route path="/table"><Table /></Route>
          <Route path="/graph">
            <Graph />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      {/* End hero unit */}

      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}