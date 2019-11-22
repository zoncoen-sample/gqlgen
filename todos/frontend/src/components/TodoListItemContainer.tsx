import UUID from 'uuid';

import * as React from 'react';

import {useMutation} from '@apollo/react-hooks';

import GET_TODOS from '../graphql/getTodos.graphql';
import DELETE_TODO from '../graphql/deleteTodo.graphql';
import TOGGLE_TODO from '../graphql/toggleTodo.graphql';
import TOGGLE_TODO_FRAGMENT from '../graphql/toggleTodoFragment.graphql';
import {
  deleteTodo as DeleteTodo,
  deleteTodoVariables as DeleteTodoVars,
} from '../graphql/__generated__/deleteTodo';
import {
  toggleTodo as ToggleTodo,
  toggleTodoVariables as ToggleTodoVars,
  toggleTodo_toggleTodo as ToggleTodoPayload,
} from '../graphql/__generated__/toggleTodo';
import {TodoListItem} from '../components/TodoListItem';

interface Props {
  id: string;
  text: string;
  done: boolean;
}

export const TodoListItemContainer = ({id, text, done}: Props) => {
  const [deleteTodo] = useMutation<DeleteTodo, DeleteTodoVars>(DELETE_TODO, {
    variables: {input: {clientMutationId: UUID.v4(), id: id}},
    refetchQueries: [{query: GET_TODOS, variables: {first: 1000}}],
  });
  const [toggleTodo] = useMutation<ToggleTodo, ToggleTodoVars>(TOGGLE_TODO, {
    variables: {input: {clientMutationId: UUID.v4(), id: id, done: !done}},
    optimisticResponse: {
      toggleTodo: {
        __typename: 'ToggleTodoPayload',
        id: id,
        done: !done,
      },
    },
    update: (proxy, {data}) => {
      if (data) {
        proxy.writeFragment<ToggleTodoPayload>({
          id: data.toggleTodo.id,
          fragment: TOGGLE_TODO_FRAGMENT,
          data: data.toggleTodo,
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
