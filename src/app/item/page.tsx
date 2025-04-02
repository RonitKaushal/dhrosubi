"use client";

import { useState } from "react";

interface ProductData {
  name: string;
  price: string;
  colors: {
    [key: string]: {
      label: string;
      images: string[];
    };
  };
  sizes: string[],
  gsm: string[];
}

const productData: ProductData = {
  name: "Shoes Reebok Zig Kinetica 3",
  price: "$199.00",
  colors: {
    white: {
      label: "blue",
      images: [
        "/products/Dcut-pink.png",
        "/products/d-cut-photo2.webp",
        "/products/d-cut-photo.jpg",
      ],
    },
    blue: {
      label: "Gray",
      images: [
        "/products/Dcut-blue.png",
        "/products/d-cut-photo2.webp",
        "/products/d-cut-photo.jpg",
      ],
    },
    pink: {
      label: "Black",
      images: [
        "/products/Dcut-green.png",
        "/products/d-cut-photo2.webp",
        "/products/d-cut-photo.jpg",
      ],
    },
  },
  sizes: ["16 x 20 Inches", "12 x 16 Inches", "14 x 19 Inches", "14 x 24 Inches"],
    gsm: ["200 GSM", "300 GSM", "400 GSM", "500 GSM"],
};

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState<string>("white");
  const [selectedImage, setSelectedImage] = useState<string>(
    productData.colors.white.images[0]
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="flex justify-center items-center flex-col w-full h-auto max-w-[1200px] mt-28">
      <div className="flex justify-center items-start w-full h-auto gap-8">
        {/* Left: Image Gallery */}
        <div className="w-1/2">
          <img
            src={selectedImage}
            alt="Product"
            className="w-full h-96 object-cover rounded-xl border-2 border-l-4 border-b-4 border-black"
          />
          <div className="flex gap-2 mt-4">
            {productData.colors[selectedColor].images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Thumbnail"
                className={`w-20 h-20 cursor-pointer rounded-xl border-2 border-l-4 border-b-4 border-black ${
                  selectedImage === img ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="w-1/2">
          <h1 className="inter text-2xl md:text-4xl lg:text-5xl font-semibold font-inter tracking-normal leading-snug">{productData.name}</h1>
          {/* <p className="text-xl text-gray-700 mt-2">{productData.price}</p> */}

          {/* Color Selection */}
          <div className="mt-4">
            <h3 className="inter text-base md:text-lg lg:text-xl font-inter text-gray-700 font-bold leading-relaxed">Color</h3>
            <div className="flex justify-start items-center gap-3 mt-2">
              {Object.keys(productData.colors).map((color) => (
                <button
                  key={color}
                  className={`relative w-12 h-12 rounded-full transition-all border-0 ${
                    selectedColor === color ? "border-2 border-l-4 border-b-4 border-black" : "border-2 border-black"
                  }`}
                  onClick={() => {
                    setSelectedColor(color);
                    setSelectedImage(productData.colors[color].images[0]);
                  }}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-4">
            <h3 className="inter text-base md:text-lg lg:text-xl font-inter text-gray-700 leading-relaxed font-bold">Size</h3>
            <div className="flex gap-2 mt-2 flex-wrap">
              {productData.sizes.map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 rounded-sm border text-sm outline-none"
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="inter text-base md:text-lg lg:text-xl font-inter text-gray-700 leading-relaxed font-bold">GSM</h3>
            <div className="flex gap-2 mt-2 flex-wrap">
              {productData.gsm.map((gsm) => (
                <button
                  key={gsm}
                  className="px-4 py-2 rounded-sm border text-sm outline-none"
                  
                  onClick={() => setSelectedSize(gsm)}
                >
                  {gsm}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          {/* <button className="inter uppercase mt-10 font-bold text-lg w-full h-12 rounded-lg border-2 border-b-4 border-l-4 border-black bg-light-green text-black">
            Call now!
          </button> */}
        </div>
      </div>
      <div className="flex justify-center items-start flex-col w-full h-auto mt-10">
        <h1 className="anton text-2xl font-bold">Description</h1>
        <p className="inter text-lg mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
          consectetur justo. Nullam sit amet urna in nunc fringilla bibendum.
          Curabitur nec justo in sem tincidunt interdum. Nulla facilisi. Donec
          nec nunc auctor, lacinia purus in, tincidunt nunc. Integer sit amet
          justo et lorem ultricies ultricies. Phasellus et libero nec turpis
          fermentum lacinia. Donec sit amet orci in libero lacinia tincidunt.
          Integer sit amet justo et lorem ultricies ultricies. Phasellus et
          libero nec turpis fermentum lacinia. Donec sit amet orci in libero
          lacinia tincidunt.
        </p>
      </div>
      <div className="flex justify-center items-start flex-col w-full h-auto mt-10">
        <h1 className="anton text-2xl font-bold">Additional information</h1>
          <div className="relative flex justify-center items-start flex-col w-full h-auto mt-10">
            <div className="relative flex justify-center items-start w-full h-auto">
              <div className="relative flex justify-center items-start flex-col w-[50%] h-auto border-2 border-black inter text-base md:text-lg lg:text-xl font-inter font-bold leading-relaxed"><h2>MOQ</h2></div>
              <div className="relative flex justify-center items-start flex-col w-[50%] h-auto border-2 border-black border-l-0 inter text-base md:text-lg lg:text-xl font-inter text-gray-700 font-bold leading-relaxed">100</div>
            </div>
            <div className="relative flex justify-center items-start w-full h-auto">
              <div className="relative flex justify-center items-start flex-col w-[50%] h-auto border-2 border-black inter text-base md:text-lg lg:text-xl font-inter font-bold leading-relaxed"><h2>MOQ</h2></div>
              <div className="relative flex justify-center items-start flex-col w-[50%] h-auto border-2 border-black border-l-0 inter text-base md:text-lg lg:text-xl font-inter text-gray-700 font-bold leading-relaxed">100</div>
            </div>
            <div className="relative flex justify-center items-start w-full h-auto">
              <div className="relative flex justify-center items-start flex-col w-[50%] h-auto border-2 border-black inter text-base md:text-lg lg:text-xl font-inter font-bold leading-relaxed"><h2>MOQ</h2></div>
              <div className="relative flex justify-center items-start flex-col w-[50%] h-auto border-2 border-black border-l-0 inter text-base md:text-lg lg:text-xl font-inter text-gray-700 font-bold leading-relaxed">100</div>
            </div>

          </div>
      </div>
    </div>
  );
}

