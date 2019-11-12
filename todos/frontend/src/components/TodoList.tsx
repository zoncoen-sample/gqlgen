import * as React from 'react';

import {useQuery} from '@apollo/react-hooks';

import GET_TODOS from '../graphql/getTodos.graphql';
import {
  getTodos as GetTodos,
  getTodos_todos as Todo,
} from '../graphql/__generated__/getTodos';

export const TodoList = () => {
  const {loading, data} = useQuery<GetTodos, Todo>(GET_TODOS, {});
  return loading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      <ul>
        {data?.todos.map(todo => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </div>
  );
};
