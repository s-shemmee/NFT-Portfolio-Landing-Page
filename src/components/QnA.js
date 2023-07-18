import React, { useState } from "react";
import "./QnA.css";

export default function QnA() {
  // Separate states for each card's active question
  const [activeQuestionLeft, setActiveQuestionLeft] = useState(null);
  const [activeQuestionRight, setActiveQuestionRight] = useState(null);

  const toggleAnswerLeft = (questionId) => {
    setActiveQuestionLeft((prevQuestionId) =>
      prevQuestionId === questionId ? null : questionId
    );
  };

  const toggleAnswerRight = (questionId) => {
    setActiveQuestionRight((prevQuestionId) =>
      prevQuestionId === questionId ? null : questionId
    );
  };

  const questions = [
    {
      id: 1,
      question: "What is Nerko's NFT Collection?",
      answer:
        "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    },
    {
      id: 2,
      question: "How can we buy and invest in NFTs?",
      answer:
        "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    },
    {
      id: 3,
      question: "Why should we choose Nerko's NFT?",
      answer:
        "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    },
    {
      id: 4,
      question: "How secure is this token?",
      answer:
        "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    },
    {
      id: 5,
      question: "What is your contract address?",
      answer:
        "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    }
  ];

  return (
    <section className="QnA">
      <div className="container-fluid">
        <div className="row">
          <h2>ASKED <span>QUESTIONS</span></h2>
        </div>
        <div className="row">
          <div className="col-md-6 card">
            {questions.map((q, index) => (
              <div className="question" key={q.id}>
                <h5 onClick={() => toggleAnswerLeft(q.id)} data-active={activeQuestionLeft === q.id}>
                  {q.question}
                  {activeQuestionLeft === q.id ? (
                    <i className="bi bi-dash-lg"></i>
                  ) : (
                    <i className="bi bi-plus-lg"></i>
                  )}
                </h5>
                {activeQuestionLeft === q.id && (
                  <p>{q.answer}</p>
                )}
                {index !== questions.length - 1 && <hr />}
              </div>
            ))}
          </div>

          <div className="col-md-6 card">
            {questions.map((q, index) => (
              <div className="question" key={q.id}>
                <h5 onClick={() => toggleAnswerRight(q.id)} data-active={activeQuestionRight === q.id}>
                  {q.question}
                  {activeQuestionRight === q.id ? (
                    <i className="bi bi-dash-lg"></i>
                  ) : (
                    <i className="bi bi-plus-lg"></i>
                  )}
                </h5>
                {activeQuestionRight === q.id && (
                  <p>{q.answer}</p>
                )}
                {index !== questions.length - 1 && <hr />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
