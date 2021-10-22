import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import "bulma/css/bulma.css";

import Home from './pages/Home';
import Daily from './pages/Daily';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Log from './pages/Log';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const styles = {
  body: {
    background: 'var(--dark)',
  }
};

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
      <ApolloProvider client={client}>
        <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/log">
                <Log />
              </Route>
              <Route exact path="/calendar">
                <Daily />
              </Route>
              <Route exact path="/settings">
                <Settings />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
        </Router>
      </ApolloProvider>
  );
}

export default App;
