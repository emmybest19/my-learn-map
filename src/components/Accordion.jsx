import React, { useState } from "react";

const Accordion = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-300">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 px-4 text-left text-lg font-medium text-gray-800 hover:bg-gray-100 transition"
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-40 p-4" : "max-h-0 p-0"
        }`}
      >
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};


export default function  mainAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "What is my-learn-app",
      content: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nisi facilis praesentium iusto fugiat quis inventore sed magni, ab voluptates debitis recusandae accusamus mollitia, ullam repellat asperiores! Earum, nesciunt nobis!",
    },
    {
      title: "What courses do you have?",
      content: "T Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nisi facilis praesentium iusto fugiat quis inventore sed magni, ab voluptates debitis recusandae accusamus mollitia, ullam repellat asperiores! Earum, nesciunt nobis!",
    },
    {
      title: "How does this entails?",
      content: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nisi facilis praesentium iusto fugiat quis inventore sed magni, ab voluptates debitis recusandae accusamus mollitia, ullam repellat asperiores! Earum, nesciunt nobis!",
    },
  ];

  return (
    <div className="px-6 md:px-10 py-16 bg-gray-50">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">Frequently Asked Questions</h1>
      {items.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
}
