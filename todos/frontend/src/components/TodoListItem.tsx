import * as React from 'react';
import {ListItem, Paper, Checkbox, IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 'auto',
  },
}));

interface Props {
  text: string;
  done: boolean;
  onDelete: () => void;
  onToggle: () => void;
}

export const TodoListItem = ({text, done, onDelete, onToggle}: Props) => {
  const classes = useStyles();
  return (
    <ListItem>
      <Paper className={classes.paper}>
        <Checkbox checked={done} onClick={onToggle} />
        {text}
        <IconButton
          className={classes.icon}
          onClick={e => {
            onDelete();
          }}>
          <Delete />
        </IconButton>
      </Paper>
    </ListItem>
  );
};
