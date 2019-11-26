import {ApolloCache} from 'apollo-cache';

type TCache = {};

type Context = {
    cache: ApolloCache<TCache>;
};

export type ApolloClientResolver<TArgs> = (
    rootValue?: any,
    args?: TArgs,
    context?: Context,
    info?: any,
    ) => any;
