import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex justify-center items-center flex-col w-full md:w-[90%] h-auto text-black mb-24">
      <div className="heading flex justify-center items-center flex-col uppercase w-full h-[100vh]">
        <h1 className="anton-regular max-w-[1200px] text-center text-4xl md:text-6xl lg:text-7xl">
          Eco-Friendly, Reusable & Sustainable
        </h1>
        <h1 className="anton-regular max-w-[1200px] text-center text-4xl md:text-6xl lg:text-7xl my-5 md:my-10">
          Non woven{" "}
          <span className="bg-light-green border-2 border-l-6 border-b-6 border-black rounded-full py-0 px-5 md:px-10 lg:px-32">
            carry bags
          </span>
        </h1>
        <p className="inter md:max-w-[1000px] max-w-[90%]  text-center text-xs md:text-lg lg:text-xl">
          Eco-Friendly, Durable, and Reusable—our Non-Woven Carry bags are
          designed to reduce plastic waste while providing a strong and stylish
          alternative. Join us in making a greener choice for a better tomorrow!
        </p>
        <div className="flex justify-center items-center uppercase w-full h-auto">
          <button className="relative cursor-pointer uppercase inter font-bold px-4 py-2 md:px-7 md:py-2 my-10 mx-1 md:mx-3 text-lg w-auto rounded-lg border-2 border-b-4 border-l-4 border-black bg-white text-black">
            Show Products
          </button>
          <button className="relative cursor-pointer uppercase inter font-bold px-4 py-2 md:px-7 md:py-2 my-10 mx-1 md:mx-3 text-lg w-auto rounded-lg border-2 border-b-4 border-l-4 border-black bg-light-green text-black">
            Call now!
          </button>
        </div>
      </div>
      <Image
        className="rotate-anime absolute top-[-140px] left-[-140px] lg:top-[-50px] lg:left-[-100px] md:top-[-80px] md:left-[-130px]"
        src="/Sticker 2.png"
        alt=""
        width={300}
        height={300}
      />
      <Image
        className="rotate-anime absolute top-[-140px] right-[-140px] lg:top-[-50px] lg:right-[-100px] md:top-[-80px] md:right-[-130px]"
        src="/Sticker 3.png"
        alt=""
        width={300}
        height={300}
      />
      <Image
        className="rotate-anime absolute bottom-[-50px] left-[-140px] lg:left-[-100px] md:bottom-[-50px] md:left-[-130px]"
        src="/Sticker 4.png"
        alt=""
        width={300}
        height={300}
      />
      <Image
        className="rotate-anime absolute bottom-[-50px] right-[-140px] lg:right-[-100px] md:bottom-[-50px] md:right-[-130px]"
        src="/Sticker 5.png"
        alt=""
        width={300}
        height={300}
      />
      <div className="rebbun-container flex justify-center items-center flex-col uppercase w-[110vw] h-auto">
        <div className="rebun flex justify-center items-center z-10 uppercase mt-[-100px] border-4 border-black w-full h-auto bg-light-green rotate-[10deg] md:rotate-4 anton-regular space-x-10 p-2.5 md:p-5 text-2xl md:text-3xl lg:text-4xl">
          <h2>Dhrosubi</h2>
          <h2>Dhrosubi</h2>
          <h2>Dhrosubi</h2>
          <h2>Dhrosubi</h2>
          <h2>Dhrosubi</h2>
          <h2>Dhrosubi</h2>
          <h2>Dhrosubi</h2>
          <h2>Dhrosubi</h2>
          <h2>Dhrosubi</h2>
          <h2>Dhrosubi</h2>
          <h2>Dhrosubi</h2>
          <h2>Dhrosubi</h2>
        </div>
        <div className="rebun flex justify-center items-center text-nowrap z-10 uppercase mt-[-60px] md:mt-[-90px] border-4 border-black w-full h-auto bg-lavender rotate-[-10deg] md:rotate-[-4deg] anton-regular space-x-10 p-2.5 md:p-5 text-2xl md:text-3xl lg:text-4xl">
          <h2>non woven carry bags</h2>
          <h2>non woven carry bags</h2>
          <h2>non woven carry bags</h2>
          <h2>non woven carry bags</h2>
          <h2>non woven carry bags</h2>
        </div>
      </div>
    </div>
  );
}
