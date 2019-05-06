import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout'
import routes from './routes';

const history = createBrowserHistory();

export default function App(props) {
  return (
    <React.Fragment>
      <Layout>
        <Router history={history}>
          <Switch data-testid="switch">
          {routes.map(
              (route, idx) =>
              route.component && (
                  <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => <route.component {...props} />}
                  />
              )
          )}
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}