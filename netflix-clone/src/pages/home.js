import React, { Fragment } from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";

export default function Home() {
  return (
    <Fragment>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </Fragment>
  );
}
