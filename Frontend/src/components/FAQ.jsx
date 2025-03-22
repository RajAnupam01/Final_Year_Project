import React, { useState } from "react";

const faqs = [
  {
    question: "What is your bookstore about?",
    answer: "Our bookstore offers a wide range of books across various genres, including fiction, non-fiction, academic, and self-help.",
  },
  {
    question: "Do you offer home delivery?",
    answer: "Yes, we offer home delivery across multiple locations. Shipping times may vary based on your location.",
  },
  {
    question: "Can I return or exchange a book?",
    answer: "Yes, we have a 7-day return/exchange policy for books that are in their original condition.",
  },
  {
    question: "Do you sell second-hand books?",
    answer: "Yes, we offer a collection of pre-owned books at discounted prices. Check the 'Used Books' section for availability.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach out to us via email at support@bookstore.com or call us at +1234567890.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4">
        <div className="max-w-2xl mx-auto my-10 p-6 bg-yellow-100 rounded-lg shadow-black shadow-lg">
      <h2 className="text-5xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b">
          <button
            className="w-full text-left p-4 font-semibold flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className="text-4xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && <p className="p-4 bg-gray-100">{faq.answer}</p>}
        </div>
      ))}
    </div>
    </div>
  );
}

export default FAQ;
