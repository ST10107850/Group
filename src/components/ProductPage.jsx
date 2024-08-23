import React from "react";

function ProductPage() {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-wrap items-center -mx-4">
        {/* Product Image */}
        <div className="w-full md:w-1/2 px-4">
          <img
            className="w-full rounded-lg shadow-lg"
            src="https://via.placeholder.com/400"
            alt="Product"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-4xl font-bold mb-4">Amazing Product</h2>
          <p className="text-gray-600 mb-4">
            This is an amazing product that helps you in many ways. It's packed
            with useful features and built with the best materials to ensure
            durability and comfort.
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Feature 1: High quality material</li>
            <li>Feature 2: Lightweight and durable</li>
            <li>Feature 3: Water-resistant</li>
            <li>Feature 4: Affordable price</li>
          </ul>

          <div className="mb-6">
            <span className="text-3xl font-semibold">$99.99</span>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
