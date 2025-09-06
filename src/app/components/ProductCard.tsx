"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/components/products/products";

export default function ProductsPage() {
  return (
    <div className="max-w-[1200px] mx-auto py-6">

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="border md:border-2 md:border-l-4 md:border-b-4 border-black rounded-xl p-2 md:p-4 hover:shadow-lg transition"
          >
            <div className="relative w-full h-40 md:h-78">
              <Image
                src={product.mainImage}
                alt={product.title}
                fill
                className="object-cover rounded-lg border md:border-2 border-black"
              />
            </div>
            <h3 className="mt-3 inter font-semibold text-sm">
              {product.title}
            </h3>
            <p className="md:text-sm text-xs text-gray-600 mt-1 line-clamp-2">
              {product.description}
            </p>
            <span className="inline-block mt-3 bg-black text-white px-3 py-1 rounded-lg md:rounded-sm text-sm font-bold">
              View Details
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
