import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectUser } from "./features/userSlice";

import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {user ? (
        <Fragment>
          <Sidebar />
          <Chat />
        </Fragment>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
