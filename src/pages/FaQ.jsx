import React, { useState } from 'react';
import '../styles/FaQ.css';
import HeaderAbout from '../assets/header-bg.png'

const faqData = [
    {
      question: "What is Blue Carbon?",
      answer: "Blue carbon refers to carbon captured by the world’s ocean and coastal ecosystems, such as mangroves, salt marshes, and seagrass meadows."
    },
    {
      question: "How does the platform ensure transparency?",
      answer: "Our platform leverages blockchain technology to provide transparent, secure, and traceable transactions for every blue carbon credit purchased."
    },
    {
      question: "What are the benefits of investing in blue carbon credits?",
      answer: "Investing in blue carbon credits not only helps reduce atmospheric carbon levels but also supports marine ecosystem restoration and biodiversity. Blue carbon projects have long-term environmental, social, and economic impacts."
    },
    {
      question: "How are blue carbon credits verified?",
      answer: "Our blue carbon credits are verified by globally recognized standards like Verra, ensuring that the credits meet the highest environmental and social standards and contribute to genuine carbon sequestration."
    },
    {
      question: "How do I purchase blue carbon credits?",
      answer: "You can purchase blue carbon credits directly through our platform by creating an account, selecting your desired projects, and completing the transaction. Each purchase is secured and recorded on the blockchain for full transparency."
    },
    {
      question: "What is the role of blockchain in this platform?",
      answer: "Blockchain technology ensures that every transaction is transparent, secure, and immutable. This provides confidence to investors and stakeholders that their contributions are making a verifiable impact."
    },
    {
      question: "What types of blue carbon projects are available?",
      answer: "Our platform supports a variety of blue carbon projects, including mangrove restoration, seagrass meadow protection, and salt marsh rehabilitation. These ecosystems are highly efficient at sequestering carbon and restoring biodiversity."
    },
    {
      question: "How do I track the impact of my carbon credits?",
      answer: "Once you purchase blue carbon credits, you can track their impact through our platform's dashboard. You'll have access to project updates, including metrics on carbon sequestration and ecosystem health improvements."
    },
    {
      question: "Can businesses participate in blue carbon projects?",
      answer: "Yes, businesses can purchase blue carbon credits to offset their carbon emissions and meet sustainability goals. We provide tailored solutions for companies looking to integrate blue carbon projects into their environmental strategies."
    },
    {
      question: "Are there any risks associated with blue carbon investments?",
      answer: "While blue carbon projects are backed by rigorous standards and verified processes, all environmental investments carry some risk. However, our blockchain-backed platform offers transparency and security, ensuring that you can track your investment and its impact."
    }
  ];  

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
    <div className="gradient-circle"></div>
    <div className="HeaderAbout">
          <img src={HeaderAbout} alt="About Ocean Conservation" />
        </div>

      <h1>Frequently Asked Questions</h1>
      <p>Uncover valuable details in our carefully compiled Frequently Asked Questions resource.</p>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">
            <span>{faq.question}</span>
            <span>{activeIndex === index ? '–' : '+'}</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
