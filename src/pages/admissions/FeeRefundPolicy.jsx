import React from "react";

const FeeRefundPolicy = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Banner */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold text-white text-center px-4">
          Fee Refund / Cancellation Policy
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 leading-relaxed">
        <p className="text-gray-700 mb-6">
          There is no refund applicable under any circumstances once the fee has
          been deposited.
        </p>
        <p className="text-gray-700 mb-6">
          Refunds, if considered applicable, will be at the sole discretion of
          the Management of City Law College. Any such refund, if approved, will
          be processed only to the original payment method (i.e., the debit or
          credit card or bank account used during the initial transaction).
        </p>
        <p className="text-gray-700 mb-6">
          For the avoidance of doubt, nothing in this policy shall obligate City
          Law College to refund the fees (or any part thereof) unless such fees
          have actually been received by the college.
        </p>
      </div>
    </div>
  );
};

export default FeeRefundPolicy;
