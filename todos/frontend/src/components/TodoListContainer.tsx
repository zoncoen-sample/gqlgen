import * as React from 'react';

import {useGetTodosQuery} from '../graphql/generated/graphql';
import {TodoList} from '../components/TodoList';

export const TodoListContainer = () => {
  const {loading, data} = useGetTodosQuery({
    variables: {first: 1000},
  });
  return <TodoList loading={loading} todos={data?.todos.nodes} />;
};
