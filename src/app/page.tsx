import Hero from "./components/hero";
import Products from "./components/products";
import Footer from "./components/footer";
import MarqueeDemo from "./components/marquees";

export default function Home() {
  return (
      <div className="inter flex justify-center items-center flex-col w-[100vw] overflow-hidden h-auto bg-cream">
        <Hero />
        <Products />
        <MarqueeDemo />
        <Footer />
      </div>
  );
}
