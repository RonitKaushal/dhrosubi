import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Products from "./components/products";
import Cta from "./components/cta";
import Footer from "./components/footer";

export default function Home() {
  return (
      <div className="flex justify-center items-center flex-col w-[100vw] overflow-hidden h-auto bg-cream">
        <NavBar />
        <Hero />
        <Products />
        <Cta />
        <Footer />
      </div>
  );
}
