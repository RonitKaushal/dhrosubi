import Footer from "../components/footer";
import MarqueeDemo from "../components/marquees";
import { Leaf, Recycle, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full mt-14 overflow-hidden">
      {/* Header Section */}
      <section className=" flex flex-col justify-center items-center w-full h-[95vh] overflow-hidden">
        <h1 className="anton text-4xl md:text-5xl lg:text-6xl w-full uppercase text-center z-10 text-black">
          About us
        </h1>
        <p className="inter text-base md:text-lg lg:text-xl w-[80%] md:w-full max-w-[700px] mt-5 text-center leading-relaxed z-10 text-black">
          Have a question? Need a custom order? We’d love to hear from you!
          Reach out to us using the details below or fill out the contact form,
          and we’ll get back to you as soon as possible.
        </p>
        <div className="absolute top-0 flex justify-center items-center w-full h-[95vh]">
          <Image
            src="/about.jpeg"
            alt="Eco-friendly non woven bags"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="flex justify-between items-start w-full flex-wrap max-w-[1200px] my-20 px-4 text-left">
        <div className="flex justify-center items-start flex-col w-full md:w-[45%] h-auto">
          <h2 className="anton text-3xl md:text-4xl lg:text-5xl uppercase">
            Our Mission
          </h2>
          <p className="inter mt-5 text-base md:text-lg lg:text-xl text-black/80 leading-relaxed whitespace-pre-line">
            At Dhrosubi, our mission is to create a sustainable future by
            replacing harmful single-use plastics with strong, reusable, and
            eco-friendly non-woven bags. We believe that small choices make a
            big difference. Every bag we produce is one less plastic bag harming
            the environment. Our goal is to make eco-friendly solutions
            affordable, practical, and stylish so that more people can adopt
            them in daily life. We are committed to protecting nature,
            supporting communities, and creating products that are safe for both
            people and animals. With every bag, we take a step toward a cleaner
            planet and a healthier future for the next generation.
          </p>
        </div>
        <div className="hidden md:flex justify-center items-center relative w-full md:w-[50%] h-[500px] border-2 border-b-4 border-l-4 border-black rounded-xl overflow-hidden">
          <Image
            src="/mission.jpg"
            alt="Eco-friendly non woven bags"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full max-w-[1200px] mt-20 px-4">
        <h2 className="anton text-3xl md:text-4xl lg:text-5xl uppercase text-center">
          Why Choose Us
        </h2>
        <div className="flex justify-center items-center flex-col md:flex-row gap-4 mt-10">
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-light-green border-2 border-b-4 border-l-4 border-black">
            <Leaf className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="anton text-xl md:text-2xl">Eco-Friendly</h3>
            <p className="inter mt-2 text-sm md:text-base text-black/70">
              Made with sustainable materials that help reduce plastic waste.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-yellow border-2 border-b-4 border-l-4 border-black">
            <Recycle className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="anton text-xl md:text-2xl">Reusable</h3>
            <p className="inter mt-2 text-sm md:text-base text-black/70">
              Strong and long-lasting, perfect for daily shopping and reuse.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-lavender border-2 border-b-4 border-l-4 border-black">
            <ShieldCheck className="w-12 h-12 text-purple-600-600 mb-4" />
            <h3 className="anton text-xl md:text-2xl">Durable</h3>
            <p className="inter mt-2 text-sm md:text-base text-black/70">
              High-quality stitching ensures our bags stay reliable for years.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

      {/* Call to Action */}

      {/* Marquee */}
      <MarqueeDemo />

      {/* Footer */}
      <Footer />
    </div>
  );
}
