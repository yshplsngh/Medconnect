import React, { useState } from "react";
import "./style.css";
import logo from './images/downar.png'

const questionsAnswers = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
  },
  {
    question: "Can I cancel my subscription?",
    answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
  },
  {
    question: "Do you provide additional support?",
    answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
  },
];

export default function FaqTemplate() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems({
      ...openItems,
      [index]: !openItems[index],
    });
  };

  return (
    <div className="container my-24 mx-auto md:px-6 xl:px-24">
      <section className="mb-32">
        <h2 className="mb-6 pl-6 text-3xl font-bold">Frequently asked questions</h2>

        <div>
          {questionsAnswers.map((item, index) => (
            <div
              key={index}
              className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200"
            >
              <h2 className="mb-0">
                <button
                  className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                  type="button"
                  onClick={() => toggleItem(index)}
                >
                  {item.question}
                  <span
                    className={`ml-auto h-5 w-5 fill-[#24cebd] transition-transform duration-200 ease-in-out ${
                      openItems[index] ? "rotate-180" : ""
                    }`}
                  >
                    <img src={logo} alt="" />
                  </span>
                </button>
              </h2>
              <div
                className={`${
                  openItems[index] ? "block" : "hidden"
                } py-4 px-5 text-neutral-500 dark:text-neutral-300`}
                style={{
                  transition: "max-height 0.3s ease",
                  maxHeight: openItems[index] ? "1000px" : "0",
                }}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
