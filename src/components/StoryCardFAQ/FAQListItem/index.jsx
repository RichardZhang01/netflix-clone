import React from "react";
import "./FAQListItem.css";

import { AiOutlinePlus } from "react-icons/ai";

function FAQListItem({ faq, index, opened, faqStateHandler }) {
  return (
    <li className="faqListItem">
      <button
        className="faqListItem__question"
        data-index-number={index}
        onClick={faqStateHandler}
      >
        {faq.question}
        <AiOutlinePlus
          className={`faqListItem__question__icon ${
            opened ? "faqListItem__question__icon__open" : ""
          }`}
        />
      </button>
      <div
        className={`faqListItem__answer ${
          opened ? "faqListItem__answer__open" : "faqListItem__answer__closed"
        }`}
      >
        <span className="faqListItem__answer__text">
          {faq.answer.split("\n").map((paragraph, index) => {
            return (
              <React.Fragment key={index}>
                {paragraph}
                {index !== faq.answer.split("\n").length - 1 && <br />}
              </React.Fragment>
            );
          })}
        </span>
      </div>
    </li>
  );
}

export default FAQListItem;
