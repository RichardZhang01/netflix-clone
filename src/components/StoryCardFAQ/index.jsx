import React, { useState } from "react";
import "./StoryCardFAQ.css";

import { AiOutlinePlus } from "react-icons/ai";
import EmailForm from "../EmailForm";
import { BsFillAwardFill } from "react-icons/bs";

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

const faqState = [];

data.forEach((faq) => {
  faqState.push({ open: false });
});

function StoryCardFAQ() {
  const [openedFaq, setOpenedFaq] = useState(faqState);
  console.log(openedFaq);

  function faqStateHandler(e) {
    const targetIndex = e.target.attributes["data-index-number"].value;
    console.log(targetIndex);

    setOpenedFaq((prev) => {
      prev[targetIndex].open = !prev[targetIndex].open;
    })
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
            {openedFaq[index].open ? "open" : "closed"}
            <AiOutlinePlus
              className={`faqListItem__question__icon ${
                openedFaq[index].open ? "faqListItem__question__icon__open" : ""
              }`}
            />
          </button>
          <div className=""></div>
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
