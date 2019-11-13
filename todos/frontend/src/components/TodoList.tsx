import * as React from 'react';
import {Grid, CircularProgress, List} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import {TodoListItemContainer} from './TodoListItemContainer';

interface Todo {
  id: string;
  text: string;
}

interface Props {
  loading: boolean;
  todos?: Todo[];
}

const useStyles = makeStyles(theme => ({
  progress: {
    marginTop: theme.spacing(5),
  },
}));

export const TodoList = ({loading, todos}: Props) => {
  const classes = useStyles();
  return loading ? (
    <Grid container justify="center">
      <CircularProgress className={classes.progress} />
    </Grid>
  ) : (
    <div>
      <List>
        {todos?.map(todo => (
          <TodoListItemContainer id={todo.id} text={todo.text} />
        ))}
      </List>
    </div>
  );
};
