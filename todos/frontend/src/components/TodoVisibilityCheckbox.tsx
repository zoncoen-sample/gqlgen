import React from 'react';

import {FormGroup, FormControlLabel, Checkbox} from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons';

interface Props {
  todo: boolean;
  onClickTodo: () => void;
  done: boolean;
  onClickDone: () => void;
}

export const TodoVisibilityCheckbox = ({
  todo,
  onClickTodo,
  done,
  onClickDone,
}: Props) => (
  <FormGroup row>
    <FormControlLabel
      control={
        <Checkbox
          icon={<VisibilityOff />}
          checkedIcon={<Visibility />}
          checked={todo}
          color="default"
          onClick={onClickTodo}
        />
      }
      label="Todo"
    />
    <FormControlLabel
      control={
        <Checkbox
          icon={<VisibilityOff />}
          checkedIcon={<Visibility />}
          checked={done}
          color="default"
          onClick={onClickDone}
        />
      }
      label="Done"
    />
  </FormGroup>
);
