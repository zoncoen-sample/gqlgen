import {GetTodoVisibilitiesDocument, GetTodoVisibilitiesQuery, MutationSetTodoVisibilitiesArgs,} from '../graphql/generated/graphql';

import {ApolloClientResolver} from './types';

export const setTodoVisibilities:
    ApolloClientResolver<MutationSetTodoVisibilitiesArgs> = (
        root,
        args,
        context,
        ) => {
        if (context && args) {
            context.cache.writeQuery<GetTodoVisibilitiesQuery>({
                query: GetTodoVisibilitiesDocument,
                data: {
                    todoVisibilities: {
                        __typename: 'TodoVisibilities',
                        todo: args.input.todo,
                        done: args.input.done,
                    },
                },
            });
        }
    };
