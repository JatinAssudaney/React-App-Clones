import React, { Fragment } from "react";
import { Header, Profiles } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function SelectProfileContainer({ user, setProfile }) {
  return (
    <Fragment>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo src={logo} to={ROUTES.HOME} alt="Netflix" />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's Watching</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </Fragment>
  );
}
