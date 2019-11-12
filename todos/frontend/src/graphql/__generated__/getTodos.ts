/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTodos
// ====================================================

export interface getTodos_todos_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface getTodos_todos {
  __typename: "Todo";
  id: string;
  text: string;
  done: boolean;
  user: getTodos_todos_user;
}

export interface getTodos {
  todos: getTodos_todos[];
}
