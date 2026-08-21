import { useState } from "react";

const questions = [
  {
    question: "What is the purpose of an order list and how can I use it to place an order?",
    answer: "An order list helps you plan your thoughts out before ordering. You can head to the front register or call (770) 964-0099 to place your order. \nDisclaimer: An order list does not automatically place the order for you.",
  },
  {
    question: "Do you guys have any delivery services?",
    answer: "Unfortunately we do not deliver or offer any delivery services, but we do offer walk ins and call in/pick up orders (770) 964-0099.",
  },
  {
    question: "Are you guys opened on any holidays? ",
    answer: "Yes! We're opened everyday except on Sundays and Thanksgiving.",
  },
  {
    question: "Do you guys accept Apple Pay?",
    answer: "Yes! We accept Apple Pay, Google Pay, and all major credit/debit cards such as VISA, Mastercard, and Discover.",
  },
  {
    question: "Am I able to make special requests for my food?",
    answer: "Yes! We try our best to accommodate for our customers! Any requests that we can not fulfill we will let you know. Just leave a note on the order list tab under the item you would like to customize and tell to the cashier.",
  },
  {
    question: "What are your business hours?",
    answer: "Monday: 11am - 9:30pm\nTuesday: 11am - 9:30pm\nWednesday: 11am - 9:30pm\nThursday: 11am - 9:30pm\nFriday: 11am - 10:30pm\nSaturday: 11am - 10:30pm\nSunday: CLOSED",
  },
];

function Faq() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="mx-auto w-full max-w-[600px] px-6 lg:max-w-[1283px] lg:px-8" aria-labelledby="faq-title">
      <h2
        id="faq-title"
        className="mb-8 text-center font-black text-[30px] leading-tight tracking-[-1px] text-black lg:text-[64px] lg:leading-[70.4px] lg:tracking-[-1.92px]"
      >
        FREQUENTLY ASKED QUESTIONS
      </h2>

      <div className="space-y-3 lg:space-y-4">
        {questions.map(({ question, answer }, index) => {
          const isOpen = openQuestion === index;
          const answerId = `faq-answer-${index}`;

          return (
            <article key={question} className="overflow-hidden rounded-xl border-2 border-black/15 bg-white/70 shadow-sm lg:rounded-2xl">
              <h3>
                <button
                  type="button"
                  className="relative flex w-full items-center px-10 py-3 text-left text-[15px] font-semibold text-black transition-colors hover:bg-[#fff6ee] lg:px-16 lg:py-5 lg:text-2xl"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleQuestion(index)}
                >
                  <span>{question}</span>
                  <span className={`absolute right-4 text-xl font-normal leading-none transition-transform duration-200 lg:right-8 lg:text-3xl ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">+</span>
                </button>
              </h3>
              <div
                id={answerId}
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="border-t-2 border-black/10 px-5 py-3 text-center text-sm leading-relaxed text-black/80 lg:px-8 lg:py-5 lg:text-lg whitespace-pre-line">
                    {answer}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Faq;
