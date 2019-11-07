import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {ApolloClient} from 'apollo-client';
import {ApolloCache} from 'apollo-cache';
import {ApolloProvider} from '@apollo/react-hooks';

export interface AppProps {
  client: ApolloClient<any>;
}

export const App = (props: AppProps) => (
  <div>
    <h2>My first Apollo app 🚀</h2>
  </div>
);
