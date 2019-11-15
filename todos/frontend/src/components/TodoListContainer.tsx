import * as React from 'react';

import {useQuery} from '@apollo/react-hooks';

import GET_TODOS from '../graphql/getTodos.graphql';
import {
  getTodos as GetTodos,
  getTodosVariables as GetTodosVars,
} from '../graphql/__generated__/getTodos';
import {TodoList} from '../components/TodoList';

export const TodoListContainer = () => {
  const {loading, data} = useQuery<GetTodos, GetTodosVars>(GET_TODOS, {
    variables: {first: 1000},
  });
  return <TodoList loading={loading} todos={data?.todos.nodes} />;
};
