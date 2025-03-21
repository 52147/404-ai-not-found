"use client";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold text-center mt-4">{product.title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mt-2 text-center">
        {product.description}
      </p>

      <div className="text-center mt-4">
        <Link href={`/products/${product.slug}`}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}