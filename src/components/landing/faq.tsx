import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How do I receive the material?',
    answer: "Instantly! As soon as your payment is processed, you will receive a secure link to download all the recipe books and guides in PDF format.",
  },
  {
    question: 'Do I need professional tools?',
    answer: "Not at all. Our guide is made for home bartenders. We show you how to use common kitchen items to create amazing cocktails. The 'Home Bar in 5 Minutes' bonus also shows the only affordable tools you might want to consider.",
  },
  {
    question: 'Is access for life?',
    answer: 'Yes! You pay once and have lifetime access to all materials, including all future updates and new recipe additions to the Pro Pack. No subscriptions, no hidden fees.',
  },
  {
    question: 'Can I view it on my phone?',
    answer: 'Yes, our PDFs are designed to be beautifully readable on any device: phone, tablet, or computer. Take your recipes with you wherever you go.',
  },
];

const Faq = () => {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Got questions? We have the answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
