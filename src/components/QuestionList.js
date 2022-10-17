import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

const fetchQuestions = async () => {
  const response = await fetch("http://localhost:4000/questions");
  const data = await response.json();
  return data;
};

function QuestionList() {
  const [questions, setQuestions] = React.useState([]);

  useEffect(() => {
    fetchQuestions().then((data) => setQuestions(data));
  }, []);

  function handleDeleteQuestion(id) {
    const updatedQuestions = questions.filter((question) => question.id !== id);
    setQuestions(updatedQuestions);
  }

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onAddAnswer={handleAddQuestion}
            onDeleteQuestion={handleDeleteQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
