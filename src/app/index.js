import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";

import App from "./containers/App";
import store from "./store";
render(
  <Provider store={store}>
    <App at={23} />
  </Provider>,
  window.document.getElementById("app")
);
