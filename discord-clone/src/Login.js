import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
function Login() {
  const signIn = () => {};
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://www.pngkit.com/png/full/19-191133_discord-logo-png-transparent-graphic-discord.png"
          alt="discord-clone-icon"
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
