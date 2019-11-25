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
import {App} from './components/App';

const client = new ApolloClient({
  cache: new InMemoryCache({
    dataIdFromObject,
    fragmentMatcher: new IntrospectionFragmentMatcher({
      introspectionQueryResultData,
    }),
  }),
  link: new HttpLink({
    uri: 'http://localhost:8080/query',
  }),

  connectToDevTools: true,
  queryDeduplication: false,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('main'),
);
