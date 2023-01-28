import React, { useState } from "react";
import "./StoryCardFAQ.css";

import { AiOutlinePlus } from "react-icons/ai";
import EmailForm from "../EmailForm";

function StoryCardFAQ() {
  const data = [
    {
      id: "description",
      question: "What is Netflix?",
      answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
      
      You can watch as much as you want, whenever you want - all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
    },
    {
      id: "cost",
      question: "How much does Netflix cost?",
      answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $5.99 to $20.99 a month. No extra costs, no contracts.`,
    },
    {
      id: "basic",
      question: "What's different on Basic with ads?",
      answer: `Basic with ads is a great way to enjoy movies and TV shows at a lower price. You can stream your favorites on any device with limited ad breaks. This plan does not allow downloads and a limited number of movies and TV shows are not available due to licensing restrictions. Some location and device restrictions also apply.`,
    },
  ];

  const [openedFaq, setOpenedFaq] = useState(
    data.map((faq) => ({ open: false }))
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

  function FAQListItems() {
    return data.map((faq, index) => {
      return (
        <li key={faq.id} className="faqListItem">
          <button
            className="faqListItem__question"
            data-index-number={index}
            onClick={faqStateHandler}
          >
            {faq.question}
            <AiOutlinePlus
              className={`faqListItem__question__icon ${
                openedFaq[index].open ? "faqListItem__question__icon__open" : ""
              }`}
            />
          </button>
          <div className="">
            <span>
              {openedFaq[index].open
                ? faq.answer.split("\n").map((paragraph, key) => {
                    return (
                      <React.Fragment key={key}>
                        {paragraph}
                        <br />
                      </React.Fragment>
                    );
                  })
                : null}
            </span>
          </div>
        </li>
      );
    });
  }

  return (
    <div className="storyCardFAQ">
      <div className="storyCardFAQ__container">
        <h1 className="storyCardFAQ__heading">Frequently Asked Questions</h1>
        <ul className="storyCardFAQ__FAQContainer">
          <FAQListItems />
        </ul>
        <EmailForm />
      </div>
    </div>
  );
}

export default StoryCardFAQ;
