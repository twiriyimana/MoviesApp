import styled from "styled-components";

const faqs = [
  {
    question: "What is included in the Basic plan?",
    answer:
      "The Basic plan includes HD quality streaming on 1 device with limited content and ad-supported viewing.",
  },
  {
    question: "Can I change my plan anytime?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes will take effect immediately.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "We offer a 7-day free trial for all new subscribers. You can cancel anytime during the trial period.",
  },
  {
    question: "How many devices can I use simultaneously?",
    answer:
      "Depending on your plan, you can stream on 1, 2, or 4 devices at the same time.",
  },
];

export const FAQ = () => {
  return (
    <Section id="faq">
      <div className="px-6 mb-8 text-center">
        <h2 className="text-white text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-gray-400 mt-2">Find answers to common questions about our service</p>
      </div>
      <div className="max-w-3xl mx-auto px-6">
        {faqs.map((faq) => (
          <div key={faq.question} className="faq-item">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Section = styled.section`
  background-color: #000;
  padding: 40px 24px;

  .faq-item {
    border-bottom: 1px solid #1f2937;
    padding: 20px 0;

    &:first-child {
      border-top: 1px solid #1f2937;
    }
  }

  .faq-question {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 8px;
  }

  .faq-answer {
    color: #9ca3af;
    font-size: 14px;
    margin: 0;
    line-height: 1.6;
  }
`;
