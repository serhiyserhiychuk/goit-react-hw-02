import Describtion from "./components/Describtion/Describtion";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import { useState } from "react";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  return (
    <>
      <Describtion />
      <Options updateFeedback={updateFeedback} />
      <Feedback feedback={feedback} />
    </>
  );
};

export default App;
