import UUID from 'uuid';

import React from 'react';

import {
  useGetTodoVisibilitiesQuery,
  useSetTodoVisibilitiesMutation,
} from '../graphql/generated/graphql';
import {TodoVisibilityCheckbox} from './TodoVisibilityCheckbox';

export const TodoVisibilityCheckboxContainer = () => {
  const {loading, data} = useGetTodoVisibilitiesQuery();
  const [setTodoVisibilities] = useSetTodoVisibilitiesMutation();
  let todo = true;
  let done = true;
  if (!loading) {
    if (data) {
      todo = data.todoVisibilities.todo;
      done = data.todoVisibilities.done;
    }
  }
  return (
    <TodoVisibilityCheckbox
      todo={todo}
      onClickTodo={() => {
        setTodoVisibilities({
          variables: {
            input: {
              clientMutationId: UUID.v4(),
              todo: !todo,
              done: done,
            },
          },
        });
      }}
      done={done}
      onClickDone={() => {
        setTodoVisibilities({
          variables: {
            input: {
              clientMutationId: UUID.v4(),
              todo: todo,
              done: !done,
            },
          },
        });
      }}
    />
  );
};
