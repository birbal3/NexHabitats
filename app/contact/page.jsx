export default function Contact() {
    return (
        <div className=" flex justify-center bg-gray-50 p-6">
            <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 text-center border border-gray-200">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
                <p className="text-gray-600 mb-6">
                    We’d love to hear from you! Reach out via phone or email.
                </p>

                {/* Phone */}
                <div className="flex items-center justify-center gap-3 mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-blue-600"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h1.5a2.25 2.25 0 012.25 2.25v.75a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 7.5v-.75zm0 10.5c0-1.243 1.007-2.25 2.25-2.25h1.5a2.25 2.25 0 012.25 2.25v.75a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25v-.75zm7.5-5.25h9m-9 0v1.5a2.25 2.25 0 002.25 2.25h4.5A2.25 2.25 0 0018 13.5V12m-8.25 0V10.5a2.25 2.25 0 012.25-2.25h4.5A2.25 2.25 0 0118 10.5V12"
                        />
                    </svg>
                    <p className="text-gray-700 font-medium">+91-9128061230</p>
                </div>

                {/* Email */}
                <div className="flex items-center justify-center gap-3 mb-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-blue-600"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0L12 13.5 2.25 6.75"
                        />
                    </svg>
                    <p className="text-gray-700 font-medium">support@nexhabitats.com</p>
                </div>

                <button className="px-6 py-3 bg-black text-white rounded-full shadow-md hover:bg-gray-700 transition">
                    Send Message
                </button>
            </div>
        </div>
    );
}
