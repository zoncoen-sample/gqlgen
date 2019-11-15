import UUID from 'uuid';

import * as React from 'react';

import {useMutation} from '@apollo/react-hooks';

import GET_TODOS from '../graphql/getTodos.graphql';
import DELETE_TODO from '../graphql/deleteTodo.graphql';
import {
  deleteTodo as DeleteTodo,
  deleteTodoVariables as DeleteTodoVars,
} from '../graphql/__generated__/deleteTodo';
import {TodoListItem} from '../components/TodoListItem';

interface Props {
  id: string;
  text: string;
}

export const TodoListItemContainer = ({id, text}: Props) => {
  const [deleteTodo] = useMutation<DeleteTodo, DeleteTodoVars>(DELETE_TODO, {
    variables: {input: {clientMutationId: UUID.v4(), id: id}},
    refetchQueries: [{query: GET_TODOS, variables: {first: 1000}}],
  });
  return <TodoListItem text={text} onDelete={deleteTodo} />;
};
