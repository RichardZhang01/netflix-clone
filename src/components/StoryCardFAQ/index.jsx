import React from 'react'
import './StoryCardFAQ.css'

import EmailForm from '../EmailForm'

function StoryCardFAQ() {
  return (
    <div class="storyCardFAQ">
        <div className="storyCardFAQ__container">
            <h1 className="storyCardFAQ__heading">
                Frequently Asked Questions
            </h1>
            <ul className="storyCardFAQ__FAQContainer"></ul>
            <EmailForm />
        </div>
    </div>
  )
}

export default StoryCardFAQ