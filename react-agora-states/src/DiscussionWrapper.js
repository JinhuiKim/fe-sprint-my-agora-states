import React from "react";
import { Discussion } from "./Discussion";

export const DiscussionWrapper = () => {
  return (
    <section className="discussion__wrapper hide">
      <ul className="discussions__container">
        <Discussion />
      </ul>
    </section>
  );
};
