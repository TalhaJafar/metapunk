import React from "react";
import "./index.css";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqsList = [
  {
    id: 1,
    question: "How can I buy a MetaPunk?",
    answer:
      "You will be able to buy on our website. Join our discord to have more information about the launch date.",
  },
  {
    id: 2,
    question: "How much will it cost to mint a MetaPunk?",
    answer:
      "You will be able to buy on our website. Join our discord to have more information about the launch date.",
  },
  {
    id: 3,
    question: "Why did you choose MetaPunks?",
    answer:
      "You will be able to buy on our website. Join our discord to have more information about the launch date.",
  },
  {
    id: 4,
    question: "When is the collection launch?",
    answer:
      "You will be able to buy on our website. Join our discord to have more information about the launch date.",
  },
];

export default function Faqs() {
  return (
    <div id="main" className="faq-sec section_margin">
      <div className=" heading_2 text-center mb-5">
        Frequently Asked Questions
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="accordion w-50" id="faq">
          {faqsList.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-header" id="faqhead1">
                  <a
                    href="#"
                    className="btn btn-header-link"
                    data-toggle="collapse"
                    data-target={"#faq" + index}
                    aria-expanded="true"
                    aria-controls={"faq" + index}
                  >
                    <div className="heading_4">{item.question} </div>
                    {/* <FaChevronUp />
                    <FaChevronDown /> */}
                  </a>
                </div>

                <div
                  id={"faq" + index}
                  className="collapse show"
                  aria-labelledby="faqhead1"
                  data-parent="#faq"
                >
                  <div className="card-body text_2">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-5 mb-5 heading_4 text-center">
        The presale date will be announced soon. Join our Discord to get more
        information.
      </div>
    </div>
  );
}
