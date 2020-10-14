import React, { Fragment, useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";
import { Header, Loading } from "../components";
import { SelectProfileContainer } from "./profiles";
import { FooterContainer } from "./footer";

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <Fragment>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1">
        <p>HELLO</p>
      </Header>
      <FooterContainer />
    </Fragment>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
