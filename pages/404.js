import React from "react";
import Image from "next/image";
import PsLink from "../src/components/PsLink/PsLink";
import PageHead from "../src/components/PageHead/PageHead";
import pagenotfound from "../public/assets/svgs/404image.svg";

const PageNotFound = () => {
  return (
    <>
      <PageHead name="404 - Page not found" />
      <div className="text-center mx-auto py-5 my-5">
        <Image
          src={pagenotfound}
          height={200}
          width={200}
          className="my-5"
        ></Image>
        <h5>Sorry, Page not found!</h5>
        <p className="lg:w-2/3 mx-auto my-2 leading-relaxed text-base">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <PsLink href="/">← Back to Home</PsLink>
      </div>
    </>
  );
};

export default PageNotFound;
