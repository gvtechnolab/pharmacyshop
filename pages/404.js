import React from "react";
import PageTitle from "../src/components/PageTitle/PageTitle";
import pagenotfound from "../public/assets/svgs/404image.svg";
import NotFound from "../src/components/NotFound/NotFound";

const PageNotFound = () => {
  return (
    <>
      <PageTitle name="404 - Page not found" />
      <NotFound what="page" />
    </>
  );
};

export default PageNotFound;
