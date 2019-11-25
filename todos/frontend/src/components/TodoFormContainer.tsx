import UUID from 'uuid';

import React, {useState} from 'react';

import {
  useCreateTodoMutation,
  GetTodosDocument,
  GetTodosQuery,
  GetTodosQueryVariables,
} from '../graphql/generated/graphql';
import {TodoForm} from './TodoForm';

export const TodoFormContainer = () => {
  const [text, setText] = useState('');
  const [createTodo, {}] = useCreateTodoMutation({
    variables: {
      input: {
        clientMutationId: UUID.v4(),
        text: text,
        userId: '0',
      },
    },
    update: (cache, {data}) => {
      if (data) {
        const cacheData = cache.readQuery<
          GetTodosQuery,
          GetTodosQueryVariables
        >({
          query: GetTodosDocument,
          variables: {first: 1000},
        });
        if (cacheData) {
          cache.writeQuery<GetTodosQuery, GetTodosQueryVariables>({
            query: GetTodosDocument,
            variables: {first: 1000},
            data: {
              __typename: 'Query',
              todos: {
                __typename: 'TodoConnection',
                nodes: [...cacheData.todos.nodes, data.createTodo.todo],
              },
            },
          });
        }
      }
    },
  });
  return (
    <TodoForm
      text={text}
      onChange={setText}
      onSubmit={() => {
        if (text === '') {
          return;
        }
        createTodo()
          .then(res => {
            setText('');
          })
          .catch(err => {
            console.error(err);
          });
      }}
    />
  );
};
