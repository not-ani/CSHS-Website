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
      question: "Can I Still Apply if I don't meet the requirements?",
      answer:
        "Yes. When you fill your application, if you select 'no' on the question, you will be asked to fill out a waiver form. After you finish that you can apply.",
    },
    {
      question: "How are CSHS applications like NHS applications?",
      answer:
        "NHS does applications at the end of the year and accept the subjsequent year. We allow you to apply year round and accept you on a rolling basis.",
    },
    {
      question: "When will I hear back?/ when should I apply?",
      answer:
        "We allow you to apply year round and accept you on a rolling basis. Each batch of applications will be reviewed every one-two weeks. You will hear back from us at that time",
    },
    {
      question: "How do I know if I got accepted?",
      answer: "You will receive an email from us with further instructions.",
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
