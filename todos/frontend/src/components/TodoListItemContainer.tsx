import UUID from 'uuid';

import React from 'react';

import {
  useDeleteTodoMutation,
  useToggleTodoMutation,
  GetTodosDocument,
  GetTodosQuery,
  GetTodosQueryVariables,
} from '../graphql/generated/graphql';
import {TodoListItem} from '../components/TodoListItem';
import {dataIdFromObject} from '../cache';

interface Props {
  id: string;
  text: string;
  done: boolean;
}

export const TodoListItemContainer = ({id, text, done}: Props) => {
  const [deleteTodo] = useDeleteTodoMutation({
    variables: {input: {clientMutationId: UUID.v4(), id: id}},
    optimisticResponse: {
      deleteTodo: {
        __typename: 'DeleteTodoPayload',
        todo: {
          __typename: 'Todo',
          id: id,
        },
      },
    },
    update: (cache, {data}) => {
      const cacheData = cache.readQuery<GetTodosQuery, GetTodosQueryVariables>({
        query: GetTodosDocument,
        variables: {first: 1000},
      });
      if (cacheData) {
        const nodes = cacheData.todos.nodes.filter(todo => {
          return todo.id !== data?.deleteTodo.todo.id;
        });
        cache.writeQuery<GetTodosQuery, GetTodosQueryVariables>({
          query: GetTodosDocument,
          variables: {first: 1000},
          data: {
            __typename: 'Query',
            todos: {
              __typename: 'TodoConnection',
              nodes: nodes,
            },
          },
        });
      }
    },
  });
  const [toggleTodo] = useToggleTodoMutation({
    variables: {input: {clientMutationId: UUID.v4(), id: id, done: !done}},
    optimisticResponse: {
      toggleTodo: {
        __typename: 'ToggleTodoPayload',
        todo: {
          __typename: 'Todo',
          id: id,
          done: !done,
        },
      },
    },
    update: (cache, {data}) => {
      if (data) {
        cache.writeData({
          id: dataIdFromObject(data.toggleTodo.todo),
          data: {done: data.toggleTodo.todo.done},
        });
      }
    },
  });
  return (
    <TodoListItem
      text={text}
      done={done}
      onDelete={deleteTodo}
      onToggle={toggleTodo}
    />
  );
};
