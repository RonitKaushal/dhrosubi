"use client";

import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Badge } from "@/components/ui/badge";

// ---------------------------------------------------------------------------------

const products = [
  {
    id: 1,
    title: "Custom Printed Non-Woven Tote",
    mainImage: "/product.jpg",
    additionalImages: ["/product.jpg", "/product.jpg"],
    description:
      "Durable and reusable non-woven shopping bag, perfect for grocery shopping and promotional use.",
    colors: ["#FF0000", "#0000FF", "#008000", "#FFFF00"], // Red, Blue, Green, Yellow
    size: ["12x10 inches", "14x12 inches"],
    gsm: [60, 80, 100],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Shopping Bags", "Grocery Bags"],
      priceRange: "$0.50 - $2.00 per piece",
    },
  },
  {
    id: 2,
    title: "Custom Printed Non-Woven Tote",
    mainImage: "/product2.jpg",
    additionalImages: [
      "/images/non-woven-bag-2a.jpg",
      "/images/non-woven-bag-2b.jpg",
    ],
    description:
      "Stylish non-woven tote bag with custom printing options for branding and promotions.",
    colors: ["#000000", "#FFFFFF", "#FF5733", "#C70039"], // Black, White, Orange, Red
    size: ["14x12 inches", "16x14 inches"],
    gsm: [70, 90, 110],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Promotional Bags", "Event Giveaways"],
      priceRange: "$0.80 - $3.00 per piece",
    },
  },
  {
    id: 3,
    title: "Reusable Grocery Non-Woven Bag",
    mainImage: "/product.jpg",
    additionalImages: [
      "/images/non-woven-bag-3a.jpg",
      "/images/non-woven-bag-3b.jpg",
    ],
    description:
      "Strong and eco-friendly grocery bag designed to carry daily essentials with ease.",
    colors: ["#32CD32", "#FFA500", "#A52A2A"], // Lime Green, Orange, Brown
    size: ["10x8 inches", "12x10 inches"],
    gsm: [80, 100, 120],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Grocery Shopping", "Retail Stores"],
      priceRange: "$0.60 - $2.50 per piece",
    },
  },
  {
    id: 4,
    title: "D-Cut Non-Woven Carry Bag",
    mainImage: "/product2.jpg",
    additionalImages: [
      "/images/non-woven-bag-4a.jpg",
      "/images/non-woven-bag-4b.jpg",
    ],
    description:
      "Convenient and lightweight D-cut bag ideal for stores and exhibitions.",
    colors: ["#FFD700", "#DC143C", "#008B8B"], // Gold, Crimson, Dark Cyan
    size: ["14x12 inches", "16x14 inches"],
    gsm: [70, 90, 110],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Retail Bags", "Gift Bags"],
      priceRange: "$0.40 - $1.80 per piece",
    },
  },
  {
    id: 5,
    title: "Zippered Non-Woven Bag",
    mainImage: "/product.jpg",
    additionalImages: [
      "/images/non-woven-bag-5a.jpg",
      "/images/non-woven-bag-5b.jpg",
    ],
    description:
      "Premium non-woven bag with zipper closure for secure storage and easy carrying.",
    colors: ["#FF4500", "#2E8B57", "#4682B4"], // Orange Red, Sea Green, Steel Blue
    size: ["16x14 inches", "18x16 inches"],
    gsm: [90, 110, 130],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Storage Bags", "Shopping Bags"],
      priceRange: "$1.00 - $4.00 per piece",
    },
  },
  {
    id: 6,
    title: "Loop Handle Non-Woven Bag",
    mainImage: "/product2.jpg",
    additionalImages: [
      "/images/non-woven-bag-6a.jpg",
      "/images/non-woven-bag-6b.jpg",
    ],
    description:
      "Sturdy loop handle bag for convenient carrying of goods and groceries.",
    colors: ["#800080", "#FF69B4", "#20B2AA"], // Purple, Pink, Light Sea Green
    size: ["12x10 inches", "14x12 inches"],
    gsm: [80, 100, 120],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Retail Bags", "Gift Bags"],
      priceRange: "$0.70 - $2.20 per piece",
    },
  },
  {
    id: 7,
    title: "Large Capacity Non-Woven Bag",
    mainImage: "/product.jpg",
    additionalImages: [
      "/images/non-woven-bag-7a.jpg",
      "/images/non-woven-bag-7b.jpg",
    ],
    description:
      "Spacious and eco-friendly bag designed for carrying bulk items efficiently.",
    colors: ["#696969", "#8B0000", "#32CD32"], // Gray, Dark Red, Lime Green
    size: ["18x16 inches", "20x18 inches"],
    gsm: [100, 120, 140],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Shopping Bags", "Wholesale Bags"],
      priceRange: "$1.20 - $5.00 per piece",
    },
  },
  {
    id: 8,
    title: "Biodegradable Non-Woven Bag",
    mainImage: "/product2.jpg",
    additionalImages: [
      "/images/non-woven-bag-8a.jpg",
      "/images/non-woven-bag-8b.jpg",
    ],
    description:
      "Environmentally friendly biodegradable bag, reducing waste and promoting sustainability.",
    colors: ["#228B22", "#FFD700", "#FF4500"], // Forest Green, Gold, Orange Red
    size: ["14x12 inches", "16x14 inches"],
    gsm: [80, 100, 120],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Biodegradable Non-Woven Fabric",
      useFor: ["Eco Bags", "Sustainable Shopping"],
      priceRange: "$1.50 - $6.00 per piece",
    },
  },
  {
    id: 9,
    title: "Non-Woven Wine Bottle Bag",
    mainImage: "/product.jpg",
    additionalImages: [
      "/images/non-woven-bag-9a.jpg",
      "/images/non-woven-bag-9b.jpg",
    ],
    description:
      "Specially designed wine bottle bag with partitions for secure transport.",
    colors: ["#8B4513", "#2F4F4F", "#DAA520"], // Saddle Brown, Dark Slate Gray, Goldenrod
    size: ["10x8 inches", "12x10 inches"],
    gsm: ["80 GSM", "100 GSM", "120 GSM"],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Bottle Carrying", "Gift Bags"],
      priceRange: "$1.00 - $4.50 per piece",
    },
  },
];

// ----------------------------------------------------------------------------------

export default function ProductCard() {
  const [side, setSide] = useState<"right" | "bottom">("right");

  useEffect(() => {
    const updateSide = () => {
      setSide(window.innerWidth < 768 ? "bottom" : "right");
    };

    updateSide(); // Set on mount
    window.addEventListener("resize", updateSide);

    return () => window.removeEventListener("resize", updateSide);
  }, []);

  return (
    <div className="flex justify-between items-start flex-wrap w-full h-auto max-w-[1200px]">
      {products.map((product) => (
        <Sheet key={product.id}>
          <SheetTrigger>
            <div className="flex justify-start items-start mt-5 border-2 border-l-4 border-b-4 border-black flex-col w-[180px] lg:w-[280px] md:w-[210px] p-2 md:p-3 rounded-xl">
              <div className="relative w-full h-48">
                <Image
                  src={product.mainImage}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg border-2 border-black"
                />
              </div>
              <h3 className="text-left md:text-lg lg:text-xl inter text-black leading-relaxed md:min-h-16 font-semibold mt-3">
                {product.title}
              </h3>
              <div className="flex justify-between items-center w-full mt-2">
                <p className="inter font-bold flex justify-center items-center bg-black text-white px-3 py-1 text-base md:text-lg lg:text-xl rounded-sm min-w-[110px]">
                  View More
                </p>
                <div className="relative flex justify-end items-center w-auto">
                  {product.colors.map((color, index) => (
                    <span
                      key={`${product.id}-color-${index}`}
                      className="md:mr-[-10px] mr-[-13px]  md:translate-x-[-10px] translate-x-[-13px] w-5 h-5 rounded-full border-2 border-black"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </SheetTrigger>
          <SheetContent
            side={side}
            className={clsx(
              "flex justify-start items-center flex-col overflow-y-scroll bg-cream",
              side === "right"
                ? "border-l-4 border-black"
                : "border-t-4 border-black max-h-[750px]"
            )}
          >
            <SheetHeader className="flex justify-start items-center flex-col w-full h-auto pb-20">
              <Image
                src={product.mainImage}
                alt={product.title}
                width={500}
                height={200}
                objectFit="cover"
                className="rounded-lg border-2 border-black"
              />
              <SheetTitle className="inter w-full text-left text-xl md:text-2xl lg:text-2xl">
                {product.title}
              </SheetTitle>
              <div className="mt-5 flex justify-start items-center flex-wrap w-full h-auto">
                <h2 className="inter text-base md:text-lg lg:text-xl font-inter text-gray-700 font-bold leading-relaxed">
                  Colors
                </h2>
                <div className="relative flex justify-start items-center gap-2 ml-2">
                  {product.colors.map((color, index) => (
                    <div
                      key={`${product.id}-color-${index}`}
                      className="relative w-6 h-6 rounded-full border-2 border-black"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="mt-2  flex justify-start items-center flex-wrap w-full h-auto">
                <h2 className="inter text-base md:text-lg lg:text-xl font-inter text-gray-700 font-bold leading-relaxed">
                  Size
                </h2>
                <div className="flex justify-start items-center gap-2 ml-2">
                  {product.size.map((size, index) => (
                    <Badge key={`${product.id}-color-${index}`} className="">
                      {size}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex justify-start items-center flex-wrap w-full h-auto">
                <h2 className="inter text-base md:text-lg lg:text-xl font-inter text-gray-700 font-bold leading-relaxed">
                  GSM
                </h2>
                <div className="flex justify-start items-center gap-2 ml-2">
                  {product.gsm.map((gsm, index) => (
                    <Badge key={`${product.id}-color-${index}`}>{gsm}</Badge>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-start items-center flex-wrap w-full h-auto border-t border-black">
                <h3 className="mt-4 inter text-xl md:text-2xl lg:text-2xl font-bold">
                  Description
                </h3>
                <p>{product.description}</p>
              </div>

              <div className="inter mt-4 flex justify-start items-start flex-wrap flex-col w-full h-auto border-t border-black">
                <h3 className="my-4 inter text-xl md:text-2xl lg:text-2xl font-bold">
                  Additional Info
                </h3>

                <p>
                  <strong>Material:</strong> {product.additionalInfo.material}
                </p>
                <p>
                  <strong>Use For:</strong>{" "}
                  {product.additionalInfo.useFor.join(", ")}
                </p>
                <p>
                  <strong>Min Order:</strong>{" "}
                  {product.additionalInfo.minOrderQuantity.india} (India),{" "}
                  {product.additionalInfo.minOrderQuantity.otherCountries}{" "}
                  (Other)
                </p>
                <p>
                  <strong>Price Range:</strong>{" "}
                  {product.additionalInfo.priceRange}
                </p>
              </div>

              <p onClick={() => window.location.href = "tel:+919173144109"} className="inter cursor-pointer fixed bottom-3 flex justify-center items-center uppercase font-bold text-lg w-[100%] max-w-[350px] h-10 rounded-lg border-2 border-b-4 border-l-4 border-black bg-light-green text-black">
                Call Now
              </p>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
