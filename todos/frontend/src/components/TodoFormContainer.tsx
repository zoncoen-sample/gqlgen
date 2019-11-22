import UUID from 'uuid';

import React, {useState} from 'react';

import GET_TODOS from '../graphql/getTodos.graphql';
import {useCreateTodoMutation} from '../graphql/generated/graphql';
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
    refetchQueries: [{query: GET_TODOS, variables: {first: 1000}}],
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
