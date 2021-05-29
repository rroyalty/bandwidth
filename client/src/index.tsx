
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history"
import { ThemeProvider } from "@material-ui/core";
import { store } from "./redux/store"
import { Provider } from "react-redux"
import { createMuiTheme, responsiveFontSizes, Theme } from "@material-ui/core/styles";


// declare module "@material-ui/core/styles/createMuiTheme" {
//   interface Theme {
//     palette?: any;
//   }

//   interface ThemeOptions {
//     paeltte?: any;
//   }
// }

let theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: `#181D27`
    },
    secondary: {
      main: `#AA2E25`
    },
  },
  typography: {
    fontFamily: [
      "RocknRoll One",
      "sans-serif",
    ].join(","),
    fontSize: 10,
    htmlFontSize: 10 
  },
  spacing: 4,
});

theme = responsiveFontSizes(theme);
ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Auth0ProviderWithHistory>
            <App />
          </Auth0ProviderWithHistory>
        </Router>
      </ThemeProvider>
    </Provider>
  // </React.StrictMode>,
  ,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();