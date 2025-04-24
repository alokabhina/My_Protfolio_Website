import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then((result) => {
                setSubmitStatus('success');
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => {
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section
            id="Contact"
            className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-900 to-gray-800"
        >
            <RevealOnScroll>
                <div className="px-6 w-full max-w-4xl"> {/* Increased max-width */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                Contact Me
                            </span>
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Have a project in mind or want to discuss opportunities? Feel free to reach out!
                        </p>
                        <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 lg:p-12 shadow-xl">
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-300 text-center animate-fade-in">
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-center animate-fade-in">
                                Oops! Something went wrong. Please try again.
                            </div>
                        )}

                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Two-column layout on larger screens */}
                                <div className="relative group">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4
                                        text-white transition-all duration-300 focus:outline-none 
                                        focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30
                                        group-hover:border-white/20 placeholder-gray-400"
                                        placeholder="John Doe"
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div className="relative group">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4
                                        text-white transition-all duration-300 focus:outline-none 
                                        focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30
                                        group-hover:border-white/20 placeholder-gray-400"
                                        placeholder="john@example.com"
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="relative group">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    value={formData.message}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4
                                    text-white transition-all duration-300 focus:outline-none 
                                    focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30
                                    group-hover:border-white/20 placeholder-gray-400 resize-none"
                                    placeholder="Tell me about your project..."
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 relative overflow-hidden 
                                    ${isSubmitting 
                                        ? 'bg-blue-600 cursor-not-allowed' 
                                        : 'bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300'}
                                    text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-[1.02] active:scale-95`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="block transform transition duration-300 group-hover:scale-105">
                                            Send Message
                                        </span>
                                    )}
                                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300"></span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};