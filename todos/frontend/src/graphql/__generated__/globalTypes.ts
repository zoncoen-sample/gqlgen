/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CreateTodoInput {
  clientMutationId: string;
  text: string;
  userId: string;
}

export interface DeleteTodoInput {
  clientMutationId: string;
  id: string;
}

export interface ToggleTodoInput {
  clientMutationId: string;
  id: string;
  done: boolean;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
