/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTodos
// ====================================================

export interface getTodos_todos_nodes_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface getTodos_todos_nodes {
  __typename: "Todo";
  id: string;
  text: string;
  done: boolean;
  user: getTodos_todos_nodes_user;
}

export interface getTodos_todos {
  __typename: "TodoConnection";
  nodes: getTodos_todos_nodes[];
}

export interface getTodos {
  todos: getTodos_todos;
}

export interface getTodosVariables {
  first: number;
  after?: string | null;
}
