import ProductCard from "@/app/components/ProductCard";
import Footer from "../components/footer";

export default function ProductsPage() {
  return (
    <div className="relative flex justify-start items-center flex-col flex-wrap mt-16 w-full h-auto text-black">
        <div className="relative flex justify-start items-center flex-col flex-wrap w-[95%] lg:w-full md:w-[90%] max-w-[1200px] h-auto">
        <div className="heading flex justify-start items-start flex-col w-full h-auto mt-10">
            <h1 className="anton-regular text-3xl md:text-4xl lg:text-5xl font-bold uppercase">Products</h1>
            <h4 className="inter text-lg md:text-2xl lg:text-2xl">Browse our wide range of products</h4>
        </div>
        <div className="flex justify-between items-center flex-wrap w-full h-auto">
          <ProductCard />
        </div>
        </div>
        <Footer/>
    </div>
  );
}
