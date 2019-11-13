import * as React from 'react';
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(5),
  },
}));

export const Title = () => {
  const classes = useStyles();
  return (
    <Typography
      align="center"
      color="primary"
      variant="h2"
      className={classes.title}>
      Todos
    </Typography>
  );
};
