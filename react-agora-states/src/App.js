import { useState, useEffect } from "react";
import "./App.css";
import { FormContainer } from "./FormContainer";
import { Pagenation } from "./Pagenation";
import { DiscussionWrapper } from "./DiscussionWrapper";
import { getFindAll } from "./api/DiscussionsDataApi";

const App = () => {
  const [discussions, setDiscussions] = useState([]);
  const [submitCheck, setSubmitCheck] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFindAll();
      const localStorageJsonArray = getLocalStorageData();

      let discussions = [];
      if (localStorageJsonArray) {
        discussions = [...localStorageJsonArray, ...response];
      } else {
        discussions = [...response];
      }
      setDiscussions(discussions);
    };

    fetchData();
  }, [submitCheck]);

  const getLocalStorageData = () => {
    return JSON.parse(localStorage.getItem("discussion_array"));
  };

  const onClickSubmitBtn = (discussionObj) => {
    console.log(discussionObj);
    const localStorageJsonArray = getLocalStorageData();
    let JsonArray = [];
    if (localStorageJsonArray) {
      JsonArray = [discussionObj, ...localStorageJsonArray];
    } else {
      JsonArray = [discussionObj];
    }

    localStorage.setItem("discussion_array", JSON.stringify(JsonArray));
    setSubmitCheck(!submitCheck);
  };

  return (
    <main>
      <h1>My Agora States</h1>
      <FormContainer onClickSubmitBtn={onClickSubmitBtn} />
      <DiscussionWrapper discussions={discussions} />
      <Pagenation discussions={discussions} />
    </main>
  );
};

export default App;
