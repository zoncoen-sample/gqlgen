import React, {useState} from 'react';

import {useMutation} from '@apollo/react-hooks';

import CREATE_TODO from '../graphql/createTodo.graphql';
import GET_TODOS from '../graphql/getTodos.graphql';
import {
  createTodo as CreateTodo,
  createTodoVariables as CreateTodoVars,
} from '../graphql/__generated__/createTodo';

export const TodoForm = () => {
  const [text, setText] = useState('');
  const [createTodo, {error, data}] = useMutation<CreateTodo, CreateTodoVars>(
    CREATE_TODO,
    {
      variables: {input: {text: text, userId: '0'}},
      refetchQueries: [{query: GET_TODOS}],
    },
  );
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
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
      }}>
      <input
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
    </form>
  );
};
