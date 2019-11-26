import React from 'react';

import {
  useGetTodosQuery,
  useGetTodoVisibilitiesQuery,
} from '../graphql/generated/graphql';
import {TodoList} from '../components/TodoList';

export const TodoListContainer = () => {
  const {loading, data} = useGetTodosQuery({
    variables: {first: 1000},
  });
  let todos = data?.todos.nodes;

  const {loading: visLoading, data: visData} = useGetTodoVisibilitiesQuery();
  if (!visLoading) {
    todos = todos?.filter(todo => {
      if (todo.done) {
        return visData?.todoVisibilities.done;
      }
      return visData?.todoVisibilities.todo;
    });
  }

  return <TodoList loading={loading} todos={todos} />;
};
