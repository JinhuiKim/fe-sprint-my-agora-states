import React from "react";

export const Discussion = (props) => {
  const { discussions } = props;

  const dateToLocaleString = (dateString) => {
    let dt = new Date(dateString);
    return dt.toLocaleString();
  };

  const setBodyHTML = (text) => {
    let lines = text.split("\n");
    let resultString = "";
    for (let i = 0; i < lines.length; i++) {
      resultString += lines[i] + "<br>\n";
    }
    return <p dir="auto">${resultString}</p>;
  };

  return (
    <>
      {discussions.map((discussion) => (
        <li key={discussion.id} className="discussion__container">
          <div className="discussion__avatar--wrapper">
            <img
              className="discussion__avatar--image"
              src={discussion.avatarUrl}
              alt={`avatar of ${discussion.author}`}
            />
          </div>
          <div className="discussion__content">
            <h2 className="discussion__title">
              <a href={discussion.url}>{discussion.title}</a>
            </h2>
            <div
              className={`discussion__information${
                discussion.answer ? " active" : ""
              }`}
            >
              {`${discussion.author} / ${dateToLocaleString(
                discussion.createdAt
              )} ・ `}
              <span>{discussion.answer ? "Answered" : "Unanswered"}</span>
            </div>
          </div>
          <div className="discussion__answered">
            <img
              src={
                discussion.answer
                  ? "./img/answered.png"
                  : "./img/unanswered.png"
              }
              alt={discussion.answer ? "Answered" : "Unanswered"}
            />
          </div>
        </li>
      ))}
      {/* <li className="discussion__container">
        <div className="discussion__avatar--wrapper">
          <img
            className="discussion__avatar--image"
            src="https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4"
            alt="avatar of kimploo"
          />
        </div>
        <div className="discussion__content">
          <h2 className="discussion__title">
            <a href="https://github.com/codestates-seb/agora-states-fe/discussions/6">
              [notice] 좋은 질문하는 법
            </a>
          </h2>
          <div className="discussion__information">
            kimploo / 2022-04-22T14:08:33Z
          </div>
        </div>
        <div className="discussion__answered">
          <p>☑</p>
        </div>
      </li> */}
    </>
  );
};
