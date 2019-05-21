import React, { useContext, useReducer, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/Layout';
import routes from './routes';
import history from './helper/history';
import Store from './store/context';
import reducer from './store/reducer';
import { usePersistedContext, usePersistedReducer } from './store/usePersist';

const { REACT_APP_API_URL } = process.env;

export default function App() {
  const globalStore = usePersistedContext(useContext(Store), 'state');

  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    'state' // The localStorage key
  );

  axios.defaults.baseURL = REACT_APP_API_URL;
  axios.defaults.headers.common.Authorization = state.user.token || '';

  useEffect(() => {
    if (!state.isAuth) {
      history.push('/login');
    }
  });

  return (
    <React.Fragment>
      <Store.Provider value={{ state, dispatch }}>
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
      </Store.Provider>
    </React.Fragment>
  );
}
