import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import ContentContainer from './components/ContentContainer';

const client = new ApolloClient({
  uri: '/graphql',
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
