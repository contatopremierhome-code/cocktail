import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Como recebo o material?',
    answer: "Imediatamente! Assim que seu pagamento for processado, você receberá um link seguro para baixar todos os livros de receitas e guias em formato PDF.",
  },
  {
    question: 'Preciso de ferramentas profissionais?',
    answer: "De jeito nenhum. Nosso guia é feito para bartenders caseiros. Mostramos como usar itens de cozinha comuns para criar coquetéis incríveis. O bônus 'Bar em Casa em 5 Minutos' também mostra as únicas ferramentas acessíveis que você talvez queira considerar.",
  },
  {
    question: 'O acesso é vitalício?',
    answer: 'Sim! Você paga uma vez e tem acesso vitalício a todos os materiais, incluindo todas as futuras atualizações e novas adições de receitas ao Pacote Pro. Sem assinaturas, sem taxas ocultas.',
  },
  {
    question: 'Posso ver no meu celular?',
    answer: 'Sim, nossos PDFs são projetados para serem lindamente legíveis em qualquer dispositivo: celular, tablet ou computador. Leve suas receitas com você onde quer que vá.',
  },
];

const Faq = () => {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Tem perguntas? Nós temos as respostas.
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
