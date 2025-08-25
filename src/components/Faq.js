import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
    {
        question: "What services do you offer?",
        answer:
            "I specialize in web design, branding, UI/UX, and Framer development, creating modern, user-friendly experiences tailored to your needs.",
    },
    {
        question: "Do you provide revisions?",
        answer: "Yes, I offer multiple rounds of revisions to ensure you're fully satisfied.",
    },
    {
        question: "How do I start working with you?",
        answer: "You can start by reaching out through the contact form or email.",
    },
    {
        question: "What is your pricing structure?",
        answer: "Pricing varies based on the project. Contact me for a custom quote.",
    },
    {
        question: "How long does a project take?",
        answer: "Most projects take between 1–4 weeks depending on scope.",
    },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
    <div className="bg-white text-gray-800 rounded-xl shadow-md transition-all duration-300 overflow-hidden">
        <button
            className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none"
            onClick={onClick}
        >
            <span className="font-medium text-sm md:text-base">{question}</span>
            {isOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
        </button>
        {isOpen && <div className="px-5 pb-4 text-sm text-gray-600">{answer}</div>}
    </div>
);

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleIndex = (index) =>
        setOpenIndex(openIndex === index ? null : index);

    return (
        <section className="w-full h-full flex items-center justify-center px-6 py-16 relative z-10 bg-[#F2F2F2]"
            style={{
                borderRadius: 100
            }}>
            <div className="max-w-6xl w-full">
                <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1 text-sm rounded-full border border-gray-300 bg-white shadow text-gray-700">
                        FAQS
                    </span>
                    <h2 className="text-4xl font-semibold mt-4">Questions? Answers!</h2>
                    <p className="text-gray-600 mt-2 text-sm max-w-xl mx-auto">
                        Find quick answers to the most common questions about the services offered
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Contact Box */}
                    <div className="rounded-2xl bg-[#f2f4f8] p-8 shadow-[10px_10px_20px_#c3c6ca,-10px_-10px_20px_#ffffff]">
                        <div className="flex justify-center mb-4">
                            <div className="bg-white shadow-md rounded-xl p-3">
                                <span className="text-xl">❔</span>
                            </div>
                        </div>
                        <h3 className="text-center text-lg font-semibold mb-2">Get In Touch Now!</h3>
                        <p className="text-center text-sm text-gray-600 mb-6">
                            Still have questions? Feel free to get in touch with us today!
                        </p>
                        <div className="flex justify-center">
                            <button className="px-5 py-2 rounded-xl bg-gradient-to-bl from-[#0000B9] to-[#000000] text-white text-sm sm:text-base shadow-[6px_6px_12px_#00005D,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#00005D,inset_-6px_-6px_12px_#0000FF] transition-all">
                                ↗ Ask A Question
                            </button>
                        </div>
                    </div>

                    {/* Accordion */}
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <AccordionItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openIndex === index}
                                onClick={() => toggleIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQs;
