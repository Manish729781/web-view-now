
import React from 'react';
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQProps {
  toolDetails: any;
}

const FAQ = ({ toolDetails }: FAQProps) => {
  if (!toolDetails.faq || toolDetails.faq.length === 0) return null;

  return (
    <Card className="p-6 bg-white">
      <h2 className="text-2xl font-bold text-[#22223b] mb-6">FAQ from {toolDetails.name}</h2>
      <Accordion type="single" collapsible className="w-full">
        {toolDetails.faq.map((faq: any, index: number) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[#5f5f7a]">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
};

export default FAQ;
