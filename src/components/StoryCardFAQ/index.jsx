import React, { useState } from "react";
import "./StoryCardFAQ.css";

import EmailForm from "../EmailForm";
import FAQListItem from "./FAQListItem";
import faqData from "../../data/faqData";

function StoryCardFAQ() {
  const [openedFaq, setOpenedFaq] = useState(
    faqData.map((faq) => ({ open: false }))
  );

  function faqStateHandler(e) {
    const targetIndex = Number(e.target.attributes["data-index-number"].value);

    setOpenedFaq((prev) => {
      const newState = prev.map((faq, index) => {
        if (index === targetIndex) {
          return { ...faq, open: !faq.open };
        } else {
          return { ...faq, open: false };
        }
      });
      return newState;
    });
  }

  return (
    <div className="storyCardFAQ">
      <div className="storyCardFAQ__container">
        <h1 className="storyCardFAQ__heading">Frequently Asked Questions</h1>
        <ul className="storyCardFAQ__FAQContainer">
          {faqData.map((faq, index) => {
            return (
              <FAQListItem
                key={faq.id}
                faq={faq}
                index={index}
                opened={openedFaq[index].open}
                faqStateHandler={faqStateHandler}
              />
            );
          })}
        </ul>
        <EmailForm />
      </div>
    </div>
  );
}

export default StoryCardFAQ;
