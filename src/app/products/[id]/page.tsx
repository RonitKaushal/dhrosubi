"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { products } from "@/app/components/products/products";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type Product = {
  id: number;
  title: string;
  description: string;
  mainImage: string;
  additionalImages: string[];
  colors: { name: string; hex: string }[];
  size: string[];
  gsm: (string | number)[];
  additionalInfo: {
    material: string;
    useFor: string[];
    minOrderQuantity: {
      india: string;
      otherCountries: string;
    };
    priceRange: string;
  };
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const product: Product | undefined = products.find(
    (p) => p.id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    product?.mainImage
  );

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedGSM, setSelectedGSM] = useState<string | null>(null);

  const [openDialog, setOpenDialog] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  const handleSendInquiry = () => {
    // Validate mandatory fields
    if (!selectedColor || !selectedSize || !selectedGSM) {
      alert("Please select Color, Size, and GSM before proceeding.");
      return;
    }
    if (!customerName || !customerPhone) {
      alert("Please enter your Name and Phone number.");
      return;
    }

    const whatsappNumber = "919173144109"; // your WhatsApp number

    const message = `
Hello,
My name is ${customerName}, and I’m interested in your ${
      product.title
    }. I’m looking for bulk quantities and would like to understand more about your products before proceeding.

Product Details:
Product: ${product.title}
Color: ${selectedColor}
Size: ${selectedSize}
GSM: ${selectedGSM}
Material: ${product.additionalInfo.material}
Use For: ${product.additionalInfo.useFor.join(" & ")}
MOQ: ${product.additionalInfo.minOrderQuantity.india} (India), ${
      product.additionalInfo.minOrderQuantity.otherCountries
    } (Other)

Customer Details:
Name: ${customerName}
Phone: ${customerPhone}

Could you please share your available sizes, colors, customization options, and the best pricing for bulk orders? I’d also appreciate details on delivery timelines and payment terms.

Looking forward to your response.
Best regards,
${customerName}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-[1200px] flex flex-col md:flex-row justify-start items-start w-[95%] md:w-full mx-auto gap-5 py-6 mt-20">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-1/2">
        <div className="relative w-full h-[500px]">
          <Image
            src={selectedImage || product.mainImage}
            alt={product.title}
            fill
            className="object-cover rounded-lg border-2 border-black"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-3">
          {[product.mainImage, ...product.additionalImages].map(
            (img, index) => (
              <div
                key={index}
                className={`relative w-20 h-20 md:w-28 md:h-28 rounded-xl border-black overflow-hidden cursor-pointer ${
                  selectedImage === img ? "border-4" : "border-2"
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`${product.title}-${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-full md:w-1/2">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="mt-2 text-gray-700">{product.description}</p>

        {/* Colors */}
        <div className="mt-4">
          <h2 className="font-semibold">Colors:</h2>
          <div className="flex gap-2 mt-2 justify-start items-start flex-wrap ">
            {product.colors.map((color, i) => (
              <button
                key={i}
                onClick={() => setSelectedColor(color.name)}
                className={`flex justify-center items-center w-auto h-auto space-x-2 rounded-full border transition-all py-1 px-2 duration-300 ${
                  selectedColor === color.name
                    ? "bg-light-green text-black border-green-600"
                    : "border-black"
                }`}
                aria-label={`Select color ${color.name}`}
              >
                <div
                  className="w-5 h-5 rounded-full border border-black"
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Select color ${color.name}`}
                ></div>
                <p className="text-black">{color.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="mt-4">
          <h2 className="font-semibold">Sizes:</h2>
          <div className="flex gap-2 mt-2">
            {product.size.map((size, i) => (
              <button
                key={i}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 rounded-full border transition ${
                  selectedSize === size
                    ? "bg-light-green text-black border-green-600"
                    : "border-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* GSM */}
        <div className="mt-4">
          <h2 className="font-semibold">GSM:</h2>
          <div className="flex gap-2 mt-2">
            {product.gsm.map((gsm, i) => (
              <button
                key={i}
                onClick={() => setSelectedGSM(String(gsm))}
                className={`px-3 py-1 rounded-full border transition ${
                  selectedGSM === String(gsm)
                    ? "bg-light-green text-black border-green-600"
                    : "border-black"
                }`}
              >
                {gsm}
              </button>
            ))}
          </div>
        </div>
        {/* Additional Details Section */}
        <div className="mt-8 border-t border-black/20 pt-4">
          <h2 className="text-xl font-bold mb-3">Additional Details</h2>
          <div className="space-y-2 text-gray-800">
            <p>
              <strong>Material:</strong> {product.additionalInfo.material}
            </p>
            <p>
              <strong>Use For:</strong>{" "}
              {product.additionalInfo.useFor.join(", ")}
            </p>
            <p>
              <strong>Minimum Order Quantity:</strong>
              {` ${product.additionalInfo.minOrderQuantity.india} (India), ${product.additionalInfo.minOrderQuantity.otherCountries} (Other Countries)`}
            </p>
            {/* <p>
              <strong>Price Range:</strong> {product.additionalInfo.priceRange}
            </p> */}
          </div>
        </div>

        {/* Inquiry Button */}
        <button
          onClick={() => setOpenDialog(true)}
          className="mt-6 w-full max-w-lg mx-auto block bg-light-green text-black py-3 rounded-lg font-bold text-lg uppercase border-2 border-b-4 border-l-4 border-black hover:bg-green-600 transition"
        >
          Send Inquiry
        </button>

        {/* Dialog Popup */}
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent className="bg-cream rounded-xl border-3 border-b-6 border-l-6 border-black">
            <DialogHeader>
              <DialogTitle>Enter Your Details</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <div>
                <Label className="mb-2" htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <Label className="mb-2" htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="+91 9XXXXXXXXX"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                className="h-auto w-full mt-6 mx-auto block bg-light-green text-black py-3 rounded-lg font-bold text-lg uppercase border-2 border-b-4 border-l-4 border-black hover:bg-green-600 transition"
                onClick={() => {
                  handleSendInquiry();
                  setOpenDialog(false);
                }}
              >
                Send via WhatsApp
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
