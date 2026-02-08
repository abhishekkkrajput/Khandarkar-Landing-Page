
import React, { useEffect, useState } from 'react';

const Contact: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert("Thank you for your message. We will get back to you soon Insha'Allah.");
    };

    return (
        <div className="min-h-screen bg-[#F4F4F4] relative overflow-hidden font-sans flex items-center justify-center pt-20 pb-10 md:pt-0 md:pb-0">

            {/* --- BACKGROUND PATTERN --- */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E3A8A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
            </div>

            {/* Floating Gradients (Positioned to not interfere with text) */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#B6337D]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">

                    {/* --- LEFT: CONTENT --- */}
                    <div className="w-full md:w-5/12 text-center md:text-left animate-fade-in-left space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#D4AF37]/20 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[#B6337D] animate-pulse"></span>
                            <span className="text-[#1E3A8A] text-xs uppercase tracking-[0.25em] font-bold">Contact Us</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-cinzel text-[#1E3A8A] font-medium leading-tight">
                            Get in <span className="text-gold-plated italic font-serif">Touch</span>
                        </h1>

                        <p className="text-lg text-gray-600 leading-relaxed font-light">
                            Have questions about our service or want to know more about finding your soulmate? We are here to listen.
                        </p>

                        <div className="hidden md:flex flex-col gap-4 pt-4">
                            <div className="flex items-center gap-4 text-[#1E3A8A] group cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center group-hover:bg-[#1E3A8A] transition-colors duration-300">
                                    <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <span className="font-medium tracking-wide">support@khandarkar.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-[#1E3A8A] group cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center group-hover:bg-[#1E3A8A] transition-colors duration-300">
                                    <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <span className="font-medium tracking-wide">+91 91234 56789</span>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT: GLASS FORM --- */}
                    <div className="w-full md:w-6/12 animate-fade-in-right">
                        <div className="bg-white/30 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] relative">

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div className="group relative">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="w-full bg-transparent border-b border-gray-400/50 px-0 py-2 focus:outline-none focus:border-[#D4AF37] transition-all font-light placeholder:text-gray-500 text-gray-800 text-sm"
                                            required
                                        />
                                    </div>
                                    {/* Email */}
                                    <div className="group relative">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email"
                                            className="w-full bg-transparent border-b border-gray-400/50 px-0 py-2 focus:outline-none focus:border-[#D4AF37] transition-all font-light placeholder:text-gray-500 text-gray-800 text-sm"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="group relative">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number (Optional)"
                                        className="w-full bg-transparent border-b border-gray-400/50 px-0 py-2 focus:outline-none focus:border-[#D4AF37] transition-all font-light placeholder:text-gray-500 text-gray-800 text-sm"
                                    />
                                </div>

                                {/* Message */}
                                <div className="group relative">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                        rows={3}
                                        className="w-full bg-transparent border-b border-gray-400/50 px-0 py-2 focus:outline-none focus:border-[#D4AF37] transition-all font-light placeholder:text-gray-500 text-gray-800 text-sm resize-none"
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-xl bg-[#0066FF] text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 hover:shadow-blue-500/50 font-bold uppercase tracking-widest text-xs transform hover:-translate-y-0.5 active:scale-95"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

            <style>{`
        .text-gold-plated {
            background: linear-gradient(to bottom, #F5E0A3 0%, #D4AF37 30%, #C5A028 60%, #B8860B 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
           from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }
         .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }
      `}</style>
        </div>
    );
};

export default Contact;
