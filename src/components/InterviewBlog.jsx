import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const questions = [
  {
    qn: "What is the difference between Props and state?",
    ans: "Props are immutable which let React do fast reference check, whereas state is mutable and it can be managed in our view control. Props have better performance and state has worse performance. We use props to pass data to child component and use state to pass it down with props instead.",
  },
  {
    qn: "How does useState work?",
    ans: "useState is a react hook. It returns an array with two value. One is the current state and another is the function to update this state. It takes an initial value as argument and return an update state value whenever the setter function is called.",
  },
  {
    qn: "What is the purpose of useEffect other than fetching data?",
    ans: "useEffect is a react hook that allows us to perform side effects in our component. The purpose of useEffect is fetching data as well as direct DOM updates, performing different types of add event listener and also timer related function.",
  },
  {
    qn: "How Does React work?",
    ans: "React is a javascript library that is used for building user interface. It works by creating a virtual representation of user interface called Virtual DOM, which allows React to efficiently update and render changes in response to user interaction and data changes.",
  },
];

export default function InterviewBlog() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const expandHandler = (index) => {
    setExpandedIndex(index);
  };
  return (
    <section className="container my-24">
      <h1 className="text-4xl px-4 text-center font-bold mb-8">
        React Interview Question
      </h1>
      {questions.map((question, i) => (
        <>
          <div className="border-b mb-4 pb-2">
            <div
              onClick={() => expandHandler(i)}
              className="flex items-center justify-between gap-x-4 hover:cursor-pointer"
            >
              <h2
                className={`text-2xl font-semibold ${
                  expandedIndex === i ? "text-gradient" : ""
                }`}
              >
                {question.qn}
              </h2>
              <FontAwesomeIcon
                className={`text-purple-400/80 text-xl duration-500 ${
                  expandedIndex === i ? "rotate-180" : "rotate-0"
                }`}
                icon={faChevronDown}
              />
            </div>
            <div
              className={`overflow-hidden mb-2 ${
                expandedIndex === i ? "h-fit" : "h-0"
              }`}
            >
              <p>{question.ans}</p>
            </div>
          </div>
        </>
      ))}
    </section>
  );
}
