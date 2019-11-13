import * as React from 'react';
import {Input} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

interface Props {
  text: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
}

const useStyles = makeStyles(theme => ({
  input: {
    'margin-bottom': theme.spacing(2),
  },
}));

export const TodoForm = ({text, onChange, onSubmit}: Props) => {
  const classes = useStyles();
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}>
      <Input
        value={text}
        onChange={e => {
          onChange(e.target.value);
        }}
        autoFocus
        fullWidth
        className={classes.input}
      />
    </form>
  );
};
