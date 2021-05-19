import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { ThemeProvider } from '@material-ui/core';
import { store } from './redux/store'
import { Provider } from 'react-redux'

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

let Theme = createMuiTheme({
  palette: {
      primary: {
          main: `#181D27`
      },
      secondary: {
          main: red[500]
      },
  },
  typography: {
      fontFamily: [
          'RocknRoll One',
          'sans-serif',
      ].join(','),
      fontSize: 12
  },
  spacing: 4,
});
Theme = responsiveFontSizes(Theme);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={Theme}>
        <Router>
      <Auth0ProviderWithHistory>
          <App />
      </Auth0ProviderWithHistory>
        </Router>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
