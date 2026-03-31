import React from "react";
import { MessageSquareQuote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Professional, creative, and highly skilled, she understood our needs perfectly and delivered with excellence. Her contribution made the entire process smooth and successful, and we confidently recommend her work.",
    author: "CEO",
    company: "MAWPrint",
  },
  {
    quote:
      "Her commitment, adaptability, and strong technical capabilities truly set her apart. She approaches every task with professionalism and a problem-solving mindset, while bringing a thoughtful sense of design and user experience to her work. Her dedication and positive attitude make her someone I would confidently recommend for any web or mobile development role.",
    author: "CTO",
    company: "42Ai",
  },
];

const TestimonialCard = ({ quote, author, company }) => (
  <article className="h-full rounded-[28px] bg-[#F5F5F5] p-6 sm:p-8 shadow-[8px_8px_18px_#d1d9e6,-8px_-8px_18px_#ffffff] transition-all duration-300 hover:shadow-[inset_6px_6px_14px_#d1d9e6,inset_-6px_-6px_14px_#ffffff]">
    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-gray-700 shadow-[5px_5px_12px_#d1d9e6,-5px_-5px_12px_#ffffff]">
      <MessageSquareQuote className="h-5 w-5" />
    </div>
    <p className="text-sm leading-7 text-gray-700 sm:text-base">"{quote}"</p>
    <div className="mt-6 border-t border-gray-200 pt-4">
      <p className="text-base font-semibold text-gray-900">{author}</p>
      <p className="text-sm text-gray-500">{company}</p>
    </div>
  </article>
);

export default function Testimonials() {
  return (
    <section className="px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-700 shadow-md">
            <MessageSquareQuote className="h-4 w-4" />
            Testimonials
          </span>
          <h2 className="text-2xl font-light text-gray-900 sm:text-3xl md:text-4xl">
            What Clients Say
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">
            A few words from people I have worked with on real products and
            digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={`${testimonial.company}-${testimonial.author}`}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
