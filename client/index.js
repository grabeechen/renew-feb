import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
// utils
import './utils/i18n';
import history from './utils/history';
import theme from './utils/theme';
import store from './utils/store';
// components
import GlobalStyle from './components/GlobalStyle';
// views
import App from './views/App';

render(
  <Suspense fallback>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
    <GlobalStyle />
  </Suspense>,
  document.querySelector('#app-root'),
);
