import React from "react";
import { Discussion } from "./Discussion";

export const DiscussionWrapper = (props) => {
  const { discussions } = props;
  return (
    <section
      className={`discussion__wrapper${discussions.length <= 0 ? " hide" : ""}`}
    >
      <ul className="discussions__container">
        <Discussion discussions={discussions} />
      </ul>
    </section>
  );
};
