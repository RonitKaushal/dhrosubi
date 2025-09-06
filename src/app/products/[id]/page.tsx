"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { products } from "@/app/components/products/products";
import { Badge } from "@/components/ui/badge";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  // Track the currently displayed image
  const [selectedImage, setSelectedImage] = useState(product?.mainImage);

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <div className="max-w-[1200px] flex justify-start items-start w-[95%] md:w-full flex-col md:flex-row mx-auto gap-5 py-6 mt-20">
      <div className="flex justify-start items-start flex-col w-full md:w-[50%] h-auto">
        {/* Big Main Image */}
        <div className="relative w-full h-[500px]">
          <Image
            src={selectedImage || product.mainImage}
            alt={product.title}
            fill
            className="object-cover rounded-lg border-2 border-black"
          />
        </div>

        {/* Small Images Grid */}
        <div className="flex justify-center items-center flex-wrap w-full h-auto mt-3 gap-3">
          {[product.mainImage, ...product.additionalImages].map((img, index) => (
            <div
              key={index}
              className={`relative w-20 h-20 md:w-28 md:h-28 cursor-pointer ${
                selectedImage === img ? "" : ""
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img}
                alt={`${product.title}-${index}`}
                fill
                className="object-cover rounded-lg border-2 border-black"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="flex justify-start items-start flex-col w-full md:w-[50%] h-auto">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="mt-2 text-gray-700">{product.description}</p>

        <div className="mt-4">
          <h2 className="font-semibold">Colors:</h2>
          <div className="flex gap-2 mt-2">
            {product.colors.map((color, i) => (
              <span
                key={i}
                className="w-6 h-6 rounded-full border-2 border-black"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold">Sizes:</h2>
          <div className="flex gap-2 mt-2">
            {product.size.map((size, i) => (
              <Badge key={i}>{size}</Badge>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold">GSM:</h2>
          <div className="flex gap-2 mt-2">
            {product.gsm.map((gsm, i) => (
              <Badge key={i}>{gsm}</Badge>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-black/30 w-full pt-4">
          <h2 className="font-bold text-xl">Additional Info</h2>
          <p>
            <strong>Material:</strong> {product.additionalInfo.material}
          </p>
          <p>
            <strong>Use For:</strong> {product.additionalInfo.useFor.join(", ")}
          </p>
          <p>
            <strong>Min Order:</strong>{" "}
            {product.additionalInfo.minOrderQuantity.india} (India),{" "}
            {product.additionalInfo.minOrderQuantity.otherCountries} (Other)
          </p>
          <p>
            <strong>Price Range:</strong> {product.additionalInfo.priceRange}
          </p>
        </div>

        <button
          onClick={() => (window.location.href = "tel:+919173144109")}
          className="inter mt-6 w-full max-w-md mx-auto block bg-light-green text-black py-3 rounded-lg font-bold text-lg uppercase border-2 border-b-4 border-l-4 border-black"
        >
          Call Now
        </button>
      </div>
    </div>
  );
}
