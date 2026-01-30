import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/App";
import store from "./core/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import * as serviceWorker from "./serviceWorker";
import { theme } from "./core/theme";
import { GlobalStyle } from "./core/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

