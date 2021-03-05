import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Containers from '../components/Container'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Col(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
            {props.gridOne}
        </Grid>
        <Grid item xs={6}>
            {props.gridTwo}
        </Grid>
      </Grid>
    </div>
  );
}
export default Col;