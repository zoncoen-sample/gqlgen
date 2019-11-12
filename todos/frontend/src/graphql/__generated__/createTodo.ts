/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { NewTodo } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createTodo
// ====================================================

export interface createTodo_createTodo_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface createTodo_createTodo {
  __typename: "Todo";
  id: string;
  text: string;
  done: boolean;
  user: createTodo_createTodo_user;
}

export interface createTodo {
  createTodo: createTodo_createTodo;
}

export interface createTodoVariables {
  input: NewTodo;
}
