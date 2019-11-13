import * as React from 'react';

import {useQuery} from '@apollo/react-hooks';

import GET_TODOS from '../graphql/getTodos.graphql';
import {
  getTodos as GetTodos,
  getTodos_todos as Todo,
} from '../graphql/__generated__/getTodos';
import {TodoList} from '../components/TodoList';

export const TodoListContainer = () => {
  const {loading, data} = useQuery<GetTodos, Todo>(GET_TODOS, {});
  return <TodoList loading={loading} todos={data?.todos} />;
};
