import "./App.css";
import { FormContainer } from "./FormContainer";
import { Pagenation } from "./Pagenation";
import { DiscussionWrapper } from "./DiscussionWrapper";

const App = () => {
  return (
    <main>
      <h1>My Agora States</h1>
      <FormContainer />
      <DiscussionWrapper />
      <Pagenation />
    </main>
  );
};

export default App;
