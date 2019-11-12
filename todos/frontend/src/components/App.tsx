import * as React from 'react';

import {TodoForm} from './TodoForm';
import {TodoList} from './TodoList';

export const App = () => (
  <div>
    <h2>Todos</h2>
    <TodoForm />
    <TodoList />
  </div>
);
