import React, { useState } from "react";
import { Box, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const faqData = [
    { question: "What services do you offer?", answer: "I specialize in UI/UX design and mobile app development with React Native, while also bringing experience in web design, branding, and prototyping. My focus is on creating modern, user-friendly, and impactful digital experiences tailored to your goals." },
    { question: "Do you provide revisions?", answer: "Absolutely! I offer multiple rounds of revisions to ensure the final outcome aligns perfectly with your vision and requirements." },
    { question: "How do I start working with you?", answer: "Simply reach out through the contact form or email with details about your project. From there, we can discuss your needs, timeline, and next steps to get started." },
    { question: "What is your pricing structure?", answer: "Pricing depends on the scope, complexity, and timeline of the project. Once I understand your requirements, I’ll provide a custom quote that fits your budget and goals." },
    { question: "How long does a project take?", answer: "Timelines vary depending on the project’s scope. On average, most projects are completed within 2–4 weeks, but I’ll always provide a clear timeline after our initial discussion." },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
    <div className="bg-[#f2f2f2] text-gray-800 rounded-2xl shadow-[6px_6px_12px_#c3c6ca,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#c3c6ca,inset_-6px_-6px_12px_#ffffff] transition-all duration-300 overflow-hidden">
        <button
            className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none"
            onClick={onClick}
        >
            <span className="font-medium text-sm md:text-base">{question}</span>
            {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {isOpen && <div className="px-5 pb-4 text-sm text-gray-600">{answer}</div>}
    </div>
);

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleIndex = (index) => setOpenIndex(openIndex === index ? null : index);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <section className="w-full h-full flex items-center justify-center px-6 py-16 relative z-10">
            <div className="max-w-6xl w-full">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#fff] px-4 py-1 shadow-[3px_3px_7px_#c3c6ca,-3px_-3px_7px_#ffffff] text-gray-700 text-sm mb-2">
                        <Box className="w-4 h-4" /> FAQ
                    </span>
                    <h2 className="text-4xl font-light text-center mb-1">Questions? Answers!</h2>
                    <p className="text-sm text-gray-700 text-center max-w-xl mx-auto mb-10">
                        Find quick answers to the most common questions about the services offered
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Contact Box */}
                    <div className="rounded-2xl bg-[#f2f2f2] p-8 shadow-[10px_10px_20px_#c3c6ca,-10px_-10px_20px_#ffffff] hover:shadow-[inset_10px_10px_20px_#c3c6ca,inset_-10px_-10px_20px_#ffffff] transition-all">
                        <div className="flex justify-center mb-4">
                            <div className="bg-[#f2f2f2] shadow-[6px_6px_12px_#c3c6ca,-6px_-6px_12px_#ffffff] rounded-xl p-3">
                                <span className="text-xl">❔</span>
                            </div>
                        </div>
                        <h3 className="text-center text-lg font-semibold mb-2 text-gray-800">Get In Touch Now!</h3>
                        <p className="text-center text-sm text-gray-600 mb-6">
                            Still have questions? Feel free to get in touch with us today!
                        </p>
                        <div className="flex justify-center">
                            <button
                                onClick={() => {
                                    navigate('/contact');
                                    window.scrollTo(0, 0);
                                }}
                                className="px-5 py-2 rounded-xl bg-gradient-to-bl from-[#0000B9] to-[#000000] text-white text-sm sm:text-base shadow-[6px_6px_12px_#00005D,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#00005D,inset_-6px_-6px_12px_#0000FF] transition-all">
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
