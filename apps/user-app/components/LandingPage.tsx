export function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Next Generation{" "}
            <span className="text-blue-600">Payment Platform</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Fast, secure, and seamless payments for the digital age. Join
            thousands of businesses transforming their payment experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
              Get Started Free
            </button>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Secure Transactions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Enterprise-grade security with end-to-end encryption for all your
              payment needs
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Multiple Payment Options
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive support for cards, e-wallets, and international bank
              transfers
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Real-time Processing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lightning-fast payment confirmation with instant settlement
              capabilities
            </p>
          </div>
        </div>
      </div>
    </main>
  );
  //   return (
  //     <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  //         {/* Hero Section */}
  //         <div className="text-center">
  //           <h1 className="text-5xl font-bold text-gray-900 mb-6">
  //             The Smart Payment Solution for Blockchain
  //           </h1>
  //           <p className="text-xl text-gray-600 mb-8">
  //             Fast, secure, and seamless payments for the digital age
  //           </p>
  //           <div className="flex justify-center gap-4">
  //             <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
  //               Get Started
  //             </button>
  //             <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition">
  //               Learn More
  //             </button>
  //           </div>
  //         </div>

  //         {/* Features Section */}
  //         <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
  //           <div className="p-6 bg-white rounded-xl shadow-sm">
  //             <h3 className="text-xl font-semibold mb-4">Secure Transactions</h3>
  //             <p className="text-gray-600">
  //               Enterprise-grade security for all your payment needs
  //             </p>
  //           </div>
  //           <div className="p-6 bg-white rounded-xl shadow-sm">
  //             <h3 className="text-xl font-semibold mb-4">
  //               Multiple Payment Options
  //             </h3>
  //             <p className="text-gray-600">
  //               Support for cards, e-wallets, and bank transfers
  //             </p>
  //           </div>
  //           <div className="p-6 bg-white rounded-xl shadow-sm">
  //             <h3 className="text-xl font-semibold mb-4">Real-time Processing</h3>
  //             <p className="text-gray-600">
  //               Instant payment confirmation and settlement
  //             </p>
  //           </div>
  //         </div>

  //         {/* CTA Section */}
  //         <div className="mt-24 text-center">
  //           <h2 className="text-3xl font-bold mb-6">
  //             Ready to transform your payments?
  //           </h2>
  //           <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
  //             Sign Up Now
  //           </button>
  //         </div>
  //       </div>
  //     </main>
  //   );
}
