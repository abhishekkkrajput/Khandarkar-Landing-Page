
import React, { useEffect } from 'react';

const Terms: React.FC = () => {
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
                        Terms & <span className="text-gold-plated italic font-serif">Conditions</span>
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
                            Welcome to KhandarKar, a matrimonial platform created to help people of Jammu & Kashmir find compatible life partners in a respectful, dignified and faith-conscious way. By using our platform, you agree to these Terms and Conditions.
                        </p>

                        <h3>1. Acceptance of Terms</h3>
                        <p>If you do not agree with these Terms, you must not use the platform.</p>

                        <h3>2. Eligibility</h3>
                        <ul>
                            <li>You must be at least 18 years old.</li>
                            <li>All information provided must be accurate and truthful.</li>
                        </ul>

                        <h3>3. Account Responsibility</h3>
                        <ul>
                            <li>One person → one account.</li>
                            <li>You are responsible for your login credentials.</li>
                            <li>No impersonation or misuse.</li>
                        </ul>

                        <h3>4. User Conduct</h3>
                        <p>You agree not to:</p>
                        <ul>
                            <li>Post false or offensive content.</li>
                            <li>Harass or abuse other members.</li>
                            <li>Request or share inappropriate material.</li>
                            <li>Use the platform for commercial purposes.</li>
                        </ul>

                        <h3>5. Verification</h3>
                        <p>We may verify profiles, but users should still exercise personal judgment and caution.</p>

                        <h3>6. Privacy</h3>
                        <p>Your data is handled according to our Privacy Policy. By using the platform, you consent to this.</p>

                        <h3>7. Payments</h3>
                        <p>Some features may require payment. Fees are non-refundable unless required by law.</p>

                        <h3>8. Matches</h3>
                        <p>We help introduce people but do not guarantee marriage or outcomes. Users are responsible for their interactions.</p>

                        <h3>9. Intellectual Property</h3>
                        <p>All branding, design, and materials belong to KhandarKar and may not be reused without permission.</p>

                        <h3>10. Termination</h3>
                        <p>Accounts may be suspended if policies are violated.</p>

                        <h3>11. Liability</h3>
                        <p>Use of the platform is at your own risk. We are not responsible for user misrepresentation or disputes.</p>

                        <h3>12. Updates</h3>
                        <p>Continued use of the service means you accept any updated Terms.</p>

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

export default Terms;
