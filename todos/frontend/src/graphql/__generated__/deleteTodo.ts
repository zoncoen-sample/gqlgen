/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { DeleteTodoInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: deleteTodo
// ====================================================

export interface deleteTodo_deleteTodo {
  __typename: "DeleteTodoPayload";
  id: string;
}

export interface deleteTodo {
  deleteTodo: deleteTodo_deleteTodo;
}

export interface deleteTodoVariables {
  input: DeleteTodoInput;
}
