import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQAccordion = () => {
  const faqData = [
    {
      question:
        "What if I don't meet all the eligibility criteria? Can I still apply for the CSHS?",
      answer:
        "Absolutely. If you find that you don't meet certain criteria, you can still apply. When completing your application, simply indicate 'no' for the respective question, and you'll be prompted to fill out a waiver form. Complete this, and you can proceed with your application.",
    },
    {
      question:
        "How does the CSHS application process differ from the NHS application process?",
      answer:
        "The primary difference lies in the timing. NHS typically conducts its application process at the end of the academic year and confirms acceptance for the following year. In contrast, CSHS accepts applications throughout the year and processes them on a rolling basis, allowing for more flexibility in application and acceptance times.",
    },
    {
      question:
        "When can I expect to hear back after submitting my application, and what is the best time to apply?",
      answer:
        "We review applications in batches every one to two weeks throughout the year, so you can apply at any time that's convenient for you. After each review period, we will notify you about your application status.",
    },
    {
      question: "How will I be informed if I am accepted into the CSHS?",
      answer:
        "Upon acceptance, you'll receive an email from us with all the necessary details and further instructions regarding your membership and next steps.",
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqData.map((faq, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
