/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ToggleTodoInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: toggleTodo
// ====================================================

export interface toggleTodo_toggleTodo {
  __typename: "ToggleTodoPayload";
  id: string;
  done: boolean;
}

export interface toggleTodo {
  toggleTodo: toggleTodo_toggleTodo;
}

export interface toggleTodoVariables {
  input: ToggleTodoInput;
}
