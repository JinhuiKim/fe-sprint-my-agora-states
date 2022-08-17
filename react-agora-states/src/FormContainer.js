import React from "react";

export const FormContainer = () => {
  return (
    <section className="form__container">
      <form action="" method="get" className="form">
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
