import Image from "next/image";
import { Users } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Phone } from 'lucide-react';
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full mt-16 overflow-hidden h-auto">
      <div className="relative flex flex-col justify-center items-center w-full max-w-[1200px] overflow-hidden h-auto">
        <div className="relative flex justify-center items-center flex-col w-full h-auto mt-10">
          <h4 className="anton text-4xl md:text-5xl lg:text-6xl uppercase w-full text-center">
            Contact us
          </h4>
          <h3 className="inter text-base md:text-base lg:text-xl w-[80%] mt-5 text-center">
            Have a question? Need a custom order? We’d love to hear from you!
            Reach out to us using the details below or fill out the contact
            form, and we’ll get back to you as soon as possible.
          </h3>
        </div>
        <div className="relative flex lg:justify-between justify-center items-start flex-col lg:flex-row w-[95%] h-auto">
          <div className="relative flex justify-start items-start flex-col w-full h-auto mt-20">
            <h3 className="anton text-base md:text-xl lg:text-2xl w-full uppercase">
              Chat with us
            </h3>
            <h4 className="inter text-base md:text-base lg:text-xl w-full">
              Speak to our friendly team via live chat.
            </h4>
            <div className="flex justify-start items-center w-full h-auto mt-5 space-x-3 font-bold">
              <MessageCircle />
              <a
                href="https://wa.me/919727027027"
                target="_blank"
                className="inter text-base md:text-base lg:text-xl"
              >
                WhatsApp: <span className="font-normal">+91 9173144109</span>
              </a>
            </div>
            <div className="flex justify-start items-center w-full h-auto mt-5 space-x-3 font-bold">
              <Facebook />
              <a
                href="https://wa.me/919727027027"
                target="_blank"
                className="inter text-base md:text-base lg:text-xl"
              >
                FaceBook: <span className="font-normal">facebook.com/Dhrosubi</span>
              </a>
            </div>
            <div className="flex justify-start items-center w-full h-auto mt-5 space-x-3 font-bold">
              <Instagram />
              <a
                href="https://wa.me/919727027027"
                target="_blank"
                className="inter text-base md:text-base lg:text-xl"
              >
                Instagram: <span className="font-normal">instagram.com/Dhrosubi</span>
              </a>
            </div>
            <div className="flex justify-start items-center w-full h-auto mt-5 space-x-3 font-bold">
              <Twitter />
              <a
                href="https://wa.me/919727027027"
                target="_blank"
                className="inter text-base md:text-base lg:text-xl"
              >
                Twiter: <span className="font-normal">twiter.com/Dhrosubi</span>
              </a>
            </div>
            <h3 className="anton text-base md:text-xl lg:text-2xl w-auto uppercase mt-20">
            Our Address
            </h3>
            <h4 className="inter text-base md:text-base lg:text-xl w-full">
            Call our team Mon-Fri from 8am to 5pm.
            </h4>
            <div className="flex justify-start items-start w-[80%] h-auto mt-5 space-x-3 font-bold">
              <MessageCircle />
              <a
                href="https://wa.me/919727027027"
                target="_blank"
                className="inter text-base md:text-base lg:text-xl"
              >
                Dhrosubi <span className="font-normal">Gujarat Garment Zone, B-03, nr. Hotel Management College, Koba, Gandhinagar, Gujarat 382421</span>
              </a>
            </div>

          </div>
          <div className="relative flex justify-start items-start flex-col min-w-[400px] w-auto h-auto mt-20">
            <h3 className="anton text-base md:text-xl lg:text-2xl w-auto uppercase">
              Call us
            </h3>
            <h4 className="inter text-base md:text-base lg:text-xl w-full">
            Call our team Mon-Fri from 8am to 5pm.
            </h4>
            <div className="flex justify-start items-center w-full h-auto mt-5 space-x-3 font-bold">
              <MessageCircle />
              <a
                href="https://wa.me/919727027027"
                target="_blank"
                className="inter text-base md:text-base lg:text-xl"
              >
                WhatsApp: <span className="font-normal">+91 9173144109</span>
              </a>
            </div>
            <div className="flex justify-start items-center w-auto h-auto mt-5 space-x-3 font-bold">
              <Phone />
              <a
                href="https://wa.me/919727027027"
                target="_blank"
                className="inter text-base md:text-base lg:text-xl"
              >
                Call: <span className="font-normal">+91 9173144109</span>
              </a>
            </div>
            <h3 className="anton text-base md:text-xl lg:text-2xl w-auto uppercase mt-20">
            Business Hours
            </h3>
            <h4 className="inter text-base md:text-base lg:text-xl w-full">
            Call our team Mon-Fri from 8am to 5pm.
            </h4>
            <div className="flex justify-start items-center w-full h-auto mt-5 space-x-3 font-bold">
              <MessageCircle />
              <a
                href="https://wa.me/919727027027"
                target="_blank"
                className="inter text-base md:text-base lg:text-xl"
              >
                Monday - Friday: <span className="font-normal">9 AM - 6 PM</span>
              </a>
            </div>
            <div className="flex justify-start items-center w-auto h-auto mt-5 space-x-3 font-bold">
              <Phone />
              <a
                href="https://wa.me/919727027027"
                target="_blank"
                className="inter text-base md:text-base lg:text-xl"
              >
                Saturday: <span className="font-normal">10 AM - 4 PM</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center flex-col w-[95%] h-auto mt-20">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.3395586888355!2d72.63488597558646!3d23.157803879079207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e81001f60d72f%3A0x8ad295cde2df965!2sDhrosubi%20-%20Non%20Woven%20Bags%20Manufacturer!5e0!3m2!1sen!2sin!4v1742997801306!5m2!1sen!2sin" className="border-2 border-l-4 border-b-4 border-black rounded-xl overflow-hidden" width="100%" height="500" loading="lazy"></iframe>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
