import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type CreateTodoInput = {
  clientMutationId: Scalars['String'],
  text: Scalars['String'],
  userId: Scalars['String'],
};

export type CreateTodoPayload = {
   __typename?: 'CreateTodoPayload',
  clientMutationId: Scalars['String'],
  todo: Todo,
};

export type DeleteTodoInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
};

export type DeleteTodoPayload = {
   __typename?: 'DeleteTodoPayload',
  clientMutationId: Scalars['String'],
  todo: Todo,
};

export type Mutation = {
   __typename?: 'Mutation',
  noop?: Maybe<NoopPayload>,
  createTodo: CreateTodoPayload,
  deleteTodo: DeleteTodoPayload,
  toggleTodo: ToggleTodoPayload,
};


export type MutationNoopArgs = {
  input?: Maybe<NoopInput>
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput
};


export type MutationDeleteTodoArgs = {
  input: DeleteTodoInput
};


export type MutationToggleTodoArgs = {
  input: ToggleTodoInput
};

export type Node = {
  id: Scalars['ID'],
};

export type NoopInput = {
  clientMutationId: Scalars['String'],
};

export type NoopPayload = {
   __typename?: 'NoopPayload',
  clientMutationId: Scalars['String'],
};

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  node?: Maybe<Node>,
  todos: TodoConnection,
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};


export type QueryTodosArgs = {
  first: Scalars['Int'],
  after?: Maybe<Scalars['String']>
};

export type Todo = Node & {
   __typename?: 'Todo',
  id: Scalars['ID'],
  text: Scalars['String'],
  done: Scalars['Boolean'],
  user: User,
};

export type TodoConnection = {
   __typename?: 'TodoConnection',
  pageInfo: PageInfo,
  edges: Array<TodoEdge>,
  nodes: Array<Todo>,
};

export type TodoEdge = {
   __typename?: 'TodoEdge',
  cursor: Scalars['String'],
  node: Todo,
};

export type ToggleTodoInput = {
  clientMutationId: Scalars['String'],
  id: Scalars['ID'],
  done: Scalars['Boolean'],
};

export type ToggleTodoPayload = {
   __typename?: 'ToggleTodoPayload',
  clientMutationId: Scalars['String'],
  todo: Todo,
};

export type User = Node & {
   __typename?: 'User',
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput
};


export type CreateTodoMutation = (
  { __typename?: 'Mutation' }
  & { createTodo: (
    { __typename?: 'CreateTodoPayload' }
    & { todo: (
      { __typename?: 'Todo' }
      & Pick<Todo, 'id' | 'text' | 'done'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      ) }
    ) }
  ) }
);

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput
};


export type DeleteTodoMutation = (
  { __typename?: 'Mutation' }
  & { deleteTodo: (
    { __typename?: 'DeleteTodoPayload' }
    & { todo: (
      { __typename?: 'Todo' }
      & Pick<Todo, 'id'>
    ) }
  ) }
);

export type GetTodosQueryVariables = {
  first: Scalars['Int'],
  after?: Maybe<Scalars['String']>
};


export type GetTodosQuery = (
  { __typename?: 'Query' }
  & { todos: (
    { __typename?: 'TodoConnection' }
    & { nodes: Array<(
      { __typename?: 'Todo' }
      & Pick<Todo, 'id' | 'text' | 'done'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      ) }
    )> }
  ) }
);

export type ToggleTodoMutationVariables = {
  input: ToggleTodoInput
};


export type ToggleTodoMutation = (
  { __typename?: 'Mutation' }
  & { toggleTodo: (
    { __typename?: 'ToggleTodoPayload' }
    & { todo: (
      { __typename?: 'Todo' }
      & Pick<Todo, 'id' | 'done'>
    ) }
  ) }
);


export const CreateTodoDocument = gql`
    mutation createTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    todo {
      id
      text
      done
      user {
        id
        name
      }
    }
  }
}
    `;
export type CreateTodoMutationFn = ApolloReactCommon.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, baseOptions);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = ApolloReactCommon.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation deleteTodo($input: DeleteTodoInput!) {
  deleteTodo(input: $input) {
    todo {
      id
    }
  }
}
    `;
export type DeleteTodoMutationFn = ApolloReactCommon.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, baseOptions);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = ApolloReactCommon.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const GetTodosDocument = gql`
    query getTodos($first: Int!, $after: String) {
  todos(first: $first, after: $after) {
    nodes {
      id
      text
      done
      user {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetTodosQuery__
 *
 * To run a query within a React component, call `useGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetTodosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, baseOptions);
      }
export function useGetTodosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, baseOptions);
        }
export type GetTodosQueryHookResult = ReturnType<typeof useGetTodosQuery>;
export type GetTodosLazyQueryHookResult = ReturnType<typeof useGetTodosLazyQuery>;
export type GetTodosQueryResult = ApolloReactCommon.QueryResult<GetTodosQuery, GetTodosQueryVariables>;
export const ToggleTodoDocument = gql`
    mutation toggleTodo($input: ToggleTodoInput!) {
  toggleTodo(input: $input) {
    todo {
      id
      done
    }
  }
}
    `;
export type ToggleTodoMutationFn = ApolloReactCommon.MutationFunction<ToggleTodoMutation, ToggleTodoMutationVariables>;

/**
 * __useToggleTodoMutation__
 *
 * To run a mutation, you first call `useToggleTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleTodoMutation, { data, loading, error }] = useToggleTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useToggleTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleTodoMutation, ToggleTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<ToggleTodoMutation, ToggleTodoMutationVariables>(ToggleTodoDocument, baseOptions);
      }
export type ToggleTodoMutationHookResult = ReturnType<typeof useToggleTodoMutation>;
export type ToggleTodoMutationResult = ApolloReactCommon.MutationResult<ToggleTodoMutation>;
export type ToggleTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<ToggleTodoMutation, ToggleTodoMutationVariables>;