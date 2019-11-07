import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-hooks';

import {App} from './components/App';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:8080/query',
  }),

  connectToDevTools: true,
  queryDeduplication: false,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App client={client} />
  </ApolloProvider>,
  document.getElementById('main'),
);
