
import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#F4F4F4] pt-32 pb-20 relative overflow-hidden font-sans">

            {/* --- BACKGROUND PATTERN --- */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E3A8A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 animate-fade-in-up">

                {/* --- HEADER --- */}
                <div className="text-center mb-16 relative">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-[#D4AF37]/30 shadow-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#B6337D] animate-pulse"></span>
                        <span className="text-[#1E3A8A] text-xs uppercase tracking-[0.25em] font-bold">Legal</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-cinzel text-[#1E3A8A] font-medium mb-4 drop-shadow-sm tracking-tight">
                        Privacy & <span className="text-gold-plated italic font-serif">Policy</span>
                    </h1>

                    <p className="text-sm text-gray-500 font-medium tracking-widest uppercase mb-6">
                        Effective Date: 11-June-2025 | Last Updated: 11-June-2025
                    </p>

                    <div className="flex items-center justify-center gap-4 mb-8 opacity-60">
                        <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#B6337D]"></div>
                        <div className="w-3 h-3 rotate-45 border border-[#D4AF37] bg-[#F4F4F4]"></div>
                        <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#B6337D]"></div>
                    </div>
                </div>

                {/* --- CONTENT CARD --- */}
                <div className="bg-white/80 backdrop-blur-md p-8 md:p-16 rounded-[2rem] border border-white shadow-premium relative overflow-hidden">
                    {/* Shiny overlay */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-bl-[100%] pointer-events-none"></div>

                    <div className="prose prose-lg max-w-none text-gray-700 font-light leading-relaxed">
                        <p className="text-xl text-[#1E3A8A] font-serif italic mb-8 border-l-4 border-[#B6337D] pl-6 bg-purple-50/50 p-4 rounded-r-xl">
                            Welcome to KhandarKar. Your privacy is very important to us. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our service. By creating an account or using the platform, you agree to this policy.
                        </p>

                        <h3>1. Information We Collect</h3>
                        <p>We may collect:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <li>Full name</li>
                            <li>Gender</li>
                            <li>Date of birth / Age</li>
                            <li>Marital status</li>
                            <li>Religious details</li>
                            <li>Education & profession</li>
                            <li>Location</li>
                            <li>Photos uploaded</li>
                            <li>Phone number</li>
                        </ul>

                        <h3>2. How We Use Your Information</h3>
                        <ul>
                            <li>Create and manage your account</li>
                            <li>Match you with compatible users</li>
                            <li>Enable communication</li>
                            <li>Improve our service</li>
                            <li>Provide support</li>
                        </ul>
                        <p><strong>We do not sell or rent your personal data.</strong></p>

                        <h3>3. Sharing of Information</h3>
                        <ul>
                            <li>With other users (limited profile info)</li>
                            <li>With trusted technical providers</li>
                            <li>If legally required</li>
                        </ul>

                        <h3>4. Your Choices</h3>
                        <ul>
                            <li>Edit profile anytime</li>
                            <li>Request deletion</li>
                            <li>Control visibility</li>
                        </ul>

                        <h3>5. Security</h3>
                        <p>
                            We use authentication systems, encrypted storage, and HTTPS communication. However, no platform is 100% secure.
                        </p>

                        <h3>6. Updates</h3>
                        <p>
                            We may revise this policy. Major updates will be communicated through the app or official channels.
                        </p>

                        <h3>7. Consent</h3>
                        <p>
                            By using KhandarKar, you agree to this Privacy Policy.
                        </p>

                        <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-center">
                            <p className="text-sm text-gray-400 italic">
                                Questions? Contact us at <a href="mailto:contact@khandarkar.com" className="text-[#B6337D] font-bold hover:underline">contact@khandarkar.com</a>
                            </p>
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
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        /* Custom Prose Styling for this Theme */
        .prose h3 {
            color: #1E3A8A;
            font-family: 'Playfair Display', serif;
            margin-top: 2em;
            font-size: 1.5rem;
            border-bottom: 1px solid rgba(212, 175, 55, 0.2);
            padding-bottom: 0.5rem;
            display: inline-block;
        }
        .prose ul {
            list-style-type: none;
            padding-left: 0;
        }
        .prose li {
            position: relative;
            padding-left: 1.5em;
            margin-bottom: 0.5em;
        }
        .prose li::before {
            content: "•";
            color: #D4AF37;
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
        }
      `}</style>
        </div>
    );
};

export default PrivacyPolicy;
