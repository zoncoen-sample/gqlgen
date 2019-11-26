import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {ApolloClient} from 'apollo-client';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-hooks';

import {dataIdFromObject} from './cache';
import introspectionQueryResultData from './graphql/generated/fragmentTypes.json';
import typeDefs from './graphql/schema.graphql';
import {GetTodoVisibilitiesQuery} from './graphql/generated/graphql';
import {resolvers} from './resolvers';
import {App} from './components/App';

const cache = new InMemoryCache({
  dataIdFromObject,
  fragmentMatcher: new IntrospectionFragmentMatcher({
    introspectionQueryResultData,
  }),
});
const link = new HttpLink({
  uri: 'http://localhost:8080/query',
});

const client = new ApolloClient({
  cache,
  link,
  typeDefs,
  resolvers,

  connectToDevTools: true,
  queryDeduplication: false,
});

// prepare initial data
cache.writeData<GetTodoVisibilitiesQuery>({
  data: {
    todoVisibilities: {
      __typename: 'TodoVisibilities',
      todo: true,
      done: true,
    },
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('main'),
);
