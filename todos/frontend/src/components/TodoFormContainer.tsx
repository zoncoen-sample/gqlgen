import UUID from 'uuid';

import React, {useState} from 'react';

import {useMutation} from '@apollo/react-hooks';

import GET_TODOS from '../graphql/getTodos.graphql';
import CREATE_TODO from '../graphql/createTodo.graphql';
import {
  createTodo as CreateTodo,
  createTodoVariables as CreateTodoVars,
} from '../graphql/__generated__/createTodo';
import {TodoForm} from './TodoForm';

export const TodoFormContainer = () => {
  const [text, setText] = useState('');
  const [createTodo, {}] = useMutation<CreateTodo, CreateTodoVars>(
    CREATE_TODO,
    {
      variables: {
        input: {
          clientMutationId: UUID.v4(),
          text: text,
          userId: '0',
        },
      },
      refetchQueries: [{query: GET_TODOS, variables: {first: 1000}}],
    },
  );
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
