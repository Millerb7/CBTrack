import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import ContentContainer from './components/ContentContainer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Router className="bg-warning">
          <div className="flex-column justify-center align-center min-100-vh bg-primary">
            <Switch>
              <Route exact path="/">
                <ContentContainer />
              </Route>
              <Route exact path="/settings">
                <Settings />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
