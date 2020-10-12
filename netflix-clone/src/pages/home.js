import React, { Fragment } from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";

export default function Home() {
  return (
    <Fragment>
      <JumbotronContainer />
      <FooterContainer />
    </Fragment>
  );
}
