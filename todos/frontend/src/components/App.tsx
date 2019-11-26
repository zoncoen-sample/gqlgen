import React from 'react';
import {Container} from '@material-ui/core';

import {Title} from './Title';
import {TodoVisibilityCheckboxContainer} from './TodoVisibilityCheckboxContainer';
import {TodoFormContainer} from './TodoFormContainer';
import {TodoListContainer} from './TodoListContainer';

export const App = () => (
  <div>
    <Container maxWidth="md">
      <Title />
      <TodoFormContainer />
      <TodoVisibilityCheckboxContainer />
      <TodoListContainer />
    </Container>
  </div>
);
