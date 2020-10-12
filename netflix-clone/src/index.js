import React, { Fragment } from "react";
import { render } from "react-dom";
import "normalize.css";
import App from "./app";
import { GlobalStyles } from "./global-styles";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";

render(
  <Fragment>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </Fragment>,
  document.getElementById("root")
);
