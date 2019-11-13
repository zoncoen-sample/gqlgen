import * as React from 'react';
import {Container} from '@material-ui/core';

import {Title} from './Title';
import {TodoFormContainer} from './TodoFormContainer';
import {TodoListContainer} from './TodoListContainer';

export const App = () => (
  <div>
    <Container maxWidth="md">
      <Title />
      <TodoFormContainer />
      <TodoListContainer />
    </Container>
  </div>
);
