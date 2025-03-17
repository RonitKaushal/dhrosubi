"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/components/products/types";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={product.url} className="flex justify-start items-start mt-5 border-2 border-l-4 border-b-4 border-black flex-col w-[190px] lg:w-[280px] md:w-[210px] p-2 md:p-3 rounded-xl">
      <div className="relative w-full h-48">
        <Image src={product.image} alt={product.title} layout="fill" objectFit="cover" className="rounded-lg border-2 border-black" />
      </div>
      <h3 className="text-base md:text-lg lg:text-xl md:min-h-16 font-semibold mt-3">{product.title}</h3>
      <div className="flex justify-between items-center w-full mt-2">
        <button className="inter font-bold flex justify-center items-center bg-black text-white px-3 py-1 text-base md:text-lg lg:text-xl rounded-sm min-w-[110px]">
          View More
        </button>
        <div className="relative flex justify-end items-center w-auto">
        {product.colors.map((color, index) => (
          <span key={index} className="md:mr-[-10px] mr-[-13px]  md:translate-x-[-10px] translate-x-[-13px] w-5 h-5 rounded-full border-2 border-black" style={{ backgroundColor: color }}></span>
        ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
