/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CreateTodoInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createTodo
// ====================================================

export interface createTodo_createTodo_todo_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface createTodo_createTodo_todo {
  __typename: "Todo";
  id: string;
  text: string;
  done: boolean;
  user: createTodo_createTodo_todo_user;
}

export interface createTodo_createTodo {
  __typename: "CreateTodoPayload";
  todo: createTodo_createTodo_todo;
}

export interface createTodo {
  createTodo: createTodo_createTodo;
}

export interface createTodoVariables {
  input: CreateTodoInput;
}
