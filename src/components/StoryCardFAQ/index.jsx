import React from 'react'
import './StoryCardFAQ.css'

import EmailForm from '../EmailForm'

function StoryCardFAQ() {

  function FAQListItems() {
    return (
      <li></li>
    )
  }

  return (
    <div class="storyCardFAQ">
        <div className="storyCardFAQ__container">
            <h1 className="storyCardFAQ__heading">
                Frequently Asked Questions
            </h1>
            <ul className="storyCardFAQ__FAQContainer">
              <FAQListItems />
            </ul>
            <EmailForm />
        </div>
    </div>
  )
}

export default StoryCardFAQ