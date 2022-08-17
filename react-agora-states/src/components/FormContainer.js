import React from "react";

export const FormContainer = (props) => {
  const { onClickSubmitBtn } = props;
  const setBodyHTML = (text) => {
    let lines = text.split("\n");
    let resultString = "";
    for (let i = 0; i < lines.length; i++) {
      resultString += lines[i] + "<br>\n";
    }
    return <p dir="auto">${resultString}</p>;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { target } = event;
    const discussionObj = {
      id: `D_${Math.random().toString(36).substring(2)}`,
      createdAt: new Date().toISOString(),
      title: target[1].value,
      url: "#",
      author: target[0].value,
      answer: null,
      bodyHTML: setBodyHTML(target[2].value),
      avatarUrl: "https://joeschmoe.io/api/v1/random",
    };

    onClickSubmitBtn(discussionObj);
  };

  return (
    <section className="form__container">
      <form action="" method="get" className="form" onSubmit={onSubmit}>
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <label htmlFor="name">Enter your name: </label>
            <div className="form__input r">
              <input type="text" name="name" id="name" required="" />
            </div>
          </div>
          <div className="form__input--title">
            <label htmlFor="title">Enter your title: </label>
            <div className="form__input r">
              <input type="text" name="title" id="title" required="" />
            </div>
          </div>
          <div className="form__textbox">
            <label htmlFor="story">Your question: </label>
            <div className="form__input c">
              <textarea
                id="story"
                name="story"
                placeholder="질문을 작성하세요"
                required=""
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="form__submit">
          <input type="submit" defaultValue="submit" />
        </div>
      </form>
    </section>
  );
};
