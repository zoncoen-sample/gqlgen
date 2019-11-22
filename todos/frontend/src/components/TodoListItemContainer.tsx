import UUID from 'uuid';

import * as React from 'react';

import GET_TODOS from '../graphql/getTodos.graphql';
import {useDeleteTodoMutation} from '../graphql/generated/graphql';
import {TodoListItem} from '../components/TodoListItem';

interface Props {
  id: string;
  text: string;
}

export const TodoListItemContainer = ({id, text}: Props) => {
  const [deleteTodo] = useDeleteTodoMutation({
    variables: {input: {clientMutationId: UUID.v4(), id: id}},
    refetchQueries: [{query: GET_TODOS, variables: {first: 1000}}],
  });
  return <TodoListItem text={text} onDelete={deleteTodo} />;
};
