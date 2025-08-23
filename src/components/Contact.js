import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { socialLinks, contactInfo } from "../config/socialLinks";

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState({
        status: "idle",
        message: "",
    });

    const [typingIndex, setTypingIndex] = useState(0);
    const typingText = "Let's build something amazing together";

    useEffect(() => {
        emailjs.init("VqmLO9PXzRgCoE7z1");
    }, []);

    const validateEmail = (email) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const fieldMap = {
            from_name: "name",
            from_email: "email",
            subject: "subject",
            message: "message",
        };

        setFormData({
            ...formData,
            [fieldMap[name] || name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setFormStatus({
                status: "error",
                message: "Please fill in all fields",
            });
            return;
        }

        if (!validateEmail(formData.email)) {
            setFormStatus({
                status: "error",
                message: "Please enter a valid email address",
            });
            return;
        }

        setFormStatus({
            status: "submitting",
            message: "Sending message...",
        });

        try {
            const templateParams = {
                to_email: "yashindibhagya@gmail.com",
                from_name: formData.name,
                reply_to: formData.email,
                subject: formData.subject,
                message: formData.message,
            };

            await emailjs.send(
                "service_lx3foyj",
                "template_4qyx2dj",
                templateParams,
                "VqmLO9PXzRgCoE7z1"
            );

            setFormStatus({
                status: "success",
                message: "Message sent successfully!",
            });

            setTimeout(() => {
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                setFormStatus({
                    status: "idle",
                    message: "",
                });
            }, 4000);
        } catch (error) {
            setFormStatus({
                status: "error",
                message:
                    error.message || "Failed to send message. Please try again later.",
            });
        }
    };

    useEffect(() => {
        if (typingIndex < typingText.length) {
            const timer = setTimeout(() => {
                setTypingIndex(typingIndex + 1);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [typingIndex]);

    const ContactCard = ({ icon, title, value }) => (
        <div className="flex items-center p-6 rounded-2xl bg-[#E0E5E] shadow-[9px_9px_16px_#bec3c9,-9px_-9px_16px_#ffffff] transition-all hover:shadow-[inset_9px_9px_16px_#bec3c9,inset_-9px_-9px_16px_#ffffff] duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl mr-4 bg-[#E0E5E] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
                {icon}
            </div>
            <div>
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                    {title}
                </div>
                <div className="text-gray-800 font-medium">{value}</div>
            </div>
        </div>
    );

    return (
        <section id="contact" className="py-20 sm:py-28 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
                            Let's Connect
                        </h2>

                        <div className="text-gray-500 text-lg">
                            <span>{typingText.substring(0, typingIndex)}</span>
                            <span className="inline-block w-0.5 h-5 bg-gray-400 ml-0.5 animate-blink"></span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {/* Contact info */}
                        <div className="lg:col-span-5 space-y-6">
                            <ContactCard
                                icon={<span className="text-gray-600">📧</span>}
                                title="Email"
                                value={contactInfo.email}
                            />
                            <ContactCard
                                icon={<span className="text-gray-600">📞</span>}
                                title="Phone"
                                value={contactInfo.phone}
                            />
                            <ContactCard
                                icon={<span className="text-gray-600">📍</span>}
                                title="Location"
                                value={contactInfo.location}
                            />

                            {/* Social Links */}
                            <div className="flex gap-4 mt-6">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#E0E5E] shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] transition-all"
                                    >
                                        <span className="text-gray-600">{social.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact form */}
                        <div className="lg:col-span-7">
                            <div className="p-1 rounded-2xl bg-[#E0E5E] shadow-[9px_9px_16px_#bec3c9,-9px_-9px_16px_#ffffff]">
                                <div className="p-8 rounded-xl">
                                    {formStatus.status === "success" ? (
                                        <div className="flex flex-col items-center justify-center py-10 text-center">
                                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-200 shadow-inner mb-4">
                                                ✅
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                                Message Sent!
                                            </h3>
                                            <p className="text-gray-600 mb-6">
                                                Thanks for reaching out. I'll get back to you shortly.
                                            </p>
                                        </div>
                                    ) : (
                                        <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <input
                                                    type="text"
                                                    name="from_name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Name"
                                                    className="w-full px-4 py-3 rounded-xl bg-[#E0E5E] text-gray-700 shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] focus:outline-none"
                                                    required
                                                />
                                                <input
                                                    type="email"
                                                    name="from_email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Email"
                                                    className="w-full px-4 py-3 rounded-xl bg-[#E0E5E] text-gray-700 shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] focus:outline-none"
                                                    required
                                                />
                                            </div>

                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Subject"
                                                className="w-full px-4 py-3 rounded-xl bg-[#E0E5E] text-gray-700 shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] focus:outline-none"
                                                required
                                            />

                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={5}
                                                placeholder="Your message..."
                                                className="w-full px-4 py-3 rounded-xl bg-[#E0E5E] text-gray-700 shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] focus:outline-none resize-none"
                                                required
                                            />

                                            {formStatus.status === "error" && (
                                                <div className="p-3 rounded-lg bg-red-100 text-red-600 text-sm">
                                                    {formStatus.message}
                                                </div>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={formStatus.status === "submitting"}
                                                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-bl from-[#0000B9] to-[#000000] text-white text-sm sm:text-base shadow-[6px_6px_12px_#00005D,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#00005D,inset_-6px_-6px_12px_#0000FF] transition-all"
                                            >
                                                {formStatus.status === "submitting"
                                                    ? "Sending..."
                                                    : "Send Message"}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
