import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/faq/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Perguntas Frequentes - SyntaxWear" }],
  }),
});

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Qual é o prazo de entrega dos produtos?",
    answer:
      "O prazo varia de acordo com a sua região. Você pode calcular o frete e o prazo estimado na página do produto ou durante o checkout digitando seu CEP.",
  },
  {
    question: "Como funciona a política de troca e devolução?",
    answer:
      "Você tem até 30 dias após o recebimento para solicitar a troca ou devolução gratuita, desde que o produto esteja sem marcas de uso e na embalagem original.",
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer:
      "Aceitamos cartões de crédito em até 10x sem juros, Pix com desconto exclusivo e boleto bancário.",
  },
  {
    question: "Como posso rastrear meu pedido?",
    answer:
      "Assim que seu pedido for despachado, enviaremos o código de rastreio por e-mail e você também poderá acompanhá-lo pela sua conta no site.",
  },
];

function RouteComponent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen text-text px-8 py-16 lg:px-20 max-w-4xl mx-auto flex flex-col justify-center">
      <h2 className="text-4xl lg:text-5xl font-medium text-heading mb-4 text-center">
        Perguntas Frequentes
      </h2>
      <p className="text-gray-text text-center mb-12">
        Tire suas dúvidas sobre entregas, trocas, pagamentos e pedidos.
      </p>

      <div className="space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border-b border-gray-200 dark:border-neutral-800 pb-4 transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left py-3 text-lg font-medium text-heading focus:outline-none cursor-pointer"
              >
                <span>{item.question}</span>
                <span
                  className={`ml-4 text-2xl transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out text-gray-text ${
                  isOpen ? "grid-rows-[1fr] opacity-100 pt-2" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}