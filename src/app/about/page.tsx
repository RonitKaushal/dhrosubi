import Footer from "../components/footer";
import Accordion from "../components/accordion";
import MarqueeDemo from "../components/marquees";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center w-[100vw] mt-16 overflow-hidden h-auto">
      <div className="relative flex justify-center items-center flex-col w-full max-w-[1200px] h-auto mt-10">
        <h4 className="anton text-4xl md:text-5xl lg:text-6xl uppercase w-full text-center">
          About us
        </h4>
        <h3 className="inter text-base md:text-base lg:text-xl w-[80%] mt-5 text-center">
          Have a question? Need a custom order? We’d love to hear from you!
          Reach out to us using the details below or fill out the contact form,
          and we’ll get back to you as soon as possible.
        </h3>
      </div>
      <Accordion />
      <div className="relative flex justify-center items-center w-full max-w-[1200px] my-20 h-auto">
        <div className="relative flex justify-center items-center flex-col w-[95%] lg:w-full h-auto">
          <h4 className="anton text-left text-4xl md:text-5xl lg:text-6xl uppercase w-full">
            Our story
          </h4>
          <p className=" mt-5 inter text-xl md:text-2xl lg:text-3xl font-bold text-black/40 w-full text-justify leading-relaxed">
            <span className="text-pink-400">Im Bindiya.</span>
            <span className="relative w-2 bindiya-photo text-black/0">
              Birk
              <img
                src="/Bindiya Photo.png"
                className="absolute top-0 left-2 border border-black rounded-full w-auto h-[40px]"
                alt=""
              />
            </span>{" "}
            Two years ago, while{" "}
            <span className="text-black">shopping for clothes</span>, I saw
            something that changed my life—{" "}
            <span className="text-red-500">
              a{" "}
              <span className="relative w-2 bindiya-photo text-black/0">
                Bindk
                <img
                  src="/cow Photo text.png"
                  className="absolute top-0 left-1 border border-black rounded-full w-auto h-[40px]"
                  alt=""
                />
              </span>{" "}
              struggling to eat a plastic bag
            </span>
            . My heart sank. That moment, I realized how harmful plastic waste
            is, not just for the environment but for these innocent animals that
            unknowingly consume it. I thought about how these cows give us milk,
            a source of nourishment for so many. But if they consume plastic,
            their milk can carry harmful bacteria, leading to serious diseases.
            I couldnt just stand by and do nothing. Thats when I decided to
            take a step toward change. I started Dhrosubi, a brand that creates
            eco-friendly non-woven bags—strong, reusable, and safe for nature.
            My mission is simple: reduce plastic waste and protect the animals
            that share this planet with us. Every bag we create is a step toward
            a cleaner world, a safer future, and a promise to the animals who
            cant speak for themselves. Join us in this movement—because change
            begins with small choices. Dhrosubi A Bag of Change.
          </p>
        </div>
      </div>

      <MarqueeDemo />
      <Footer />
    </div>
  );
}
