import React from 'react';
import './Rules.css';

function Rules() {
  const rules = [
    "Participants can register anytime before the event ends. The topics will be released only when the event starts.",
    "Participants should submit their works during the event timeline only, and strictly in a pdf format.",
    "Participants can submit their work anytime during the event submission window, which is open from 2 pm to 6 pm.",
    "There is no word limit to the stories. They can be as long or as short as you want!",
    "The aforementioned submission pdf must contain the name of the participant, registration number, and topic mandatorily, or else the submission won't be considered.",
    "Plagiarism and AI checks will be kept in place, and any offenders will be disqualified from the competition.",
    "Profanities in the written work will not be tolerated."
  ];

  return (
    <div className="rules-container">
      <h2>Event Rules</h2>
      <p className="centered-paragraph">
        All participants are strictly required to adhere to the following rules. After reading the rules, you are required to enter your registration number to get your topic. The writing piece has to be submitted using the Google form link given at the end. All the best.<br/> <b>Happy Writing!</b>
      </p>
      <ul>
        {rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
    </div>
  );
}

export default Rules;
