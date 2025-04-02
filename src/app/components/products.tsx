import { products } from "@/app/components/products/products";
import ProductCard from "@/app/components/ProductCard";

export default function Products() {
  return (
    <div className="relative flex justify-start items-center flex-col flex-wrap w-[95%] lg:w-full md:w-[90%] max-w-[1200px] h-auto text-black">
        <div className="heading flex justify-start items-start flex-col w-full h-auto">
            <h1 className="anton-regular text-3xl md:text-4xl lg:text-5xl font-bold uppercase">Products</h1>
            <h4 className="inter text-xl md:text-2xl lg:text-2xl">Browse our wide range of products</h4>
        </div>
        <div className="flex justify-between items-center flex-wrap w-full h-auto">
          <ProductCard />
        </div>
    </div>
  );
}
