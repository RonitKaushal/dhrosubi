// src/data/products.ts

export const products = [
  {
    id: 1,
    title: "Custom Printed Non-Woven Tote",
    mainImage: "/product.jpg",
    additionalImages: ["/product2.jpg", "/product.jpg","/product2.jpg", "/product.jpg"],
    description:
      "Durable and reusable non-woven shopping bag, perfect for grocery shopping and promotional use.",
    colors: ["#FF0000", "#0000FF", "#008000", "#FFFF00"], // Red, Blue, Green, Yellow
    size: ["12x10 inches", "14x12 inches"],
    gsm: [60, 80, 100],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Shopping Bags", "Grocery Bags"],
      priceRange: "$0.50 - $2.00 per piece",
    },
  },
  {
    id: 2,
    title: "Custom Printed Non-Woven Tote",
    mainImage: "/product2.jpg",
    additionalImages: [
      "/images/non-woven-bag-2a.jpg",
      "/images/non-woven-bag-2b.jpg",
    ],
    description:
      "Stylish non-woven tote bag with custom printing options for branding and promotions.",
    colors: ["#000000", "#FFFFFF", "#FF5733", "#C70039"], // Black, White, Orange, Red
    size: ["14x12 inches", "16x14 inches"],
    gsm: [70, 90, 110],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Promotional Bags", "Event Giveaways"],
      priceRange: "$0.80 - $3.00 per piece",
    },
  },
  {
    id: 3,
    title: "Reusable Grocery Non-Woven Bag",
    mainImage: "/product.jpg",
    additionalImages: [
      "/images/non-woven-bag-3a.jpg",
      "/images/non-woven-bag-3b.jpg",
    ],
    description:
      "Strong and eco-friendly grocery bag designed to carry daily essentials with ease.",
    colors: ["#32CD32", "#FFA500", "#A52A2A"], // Lime Green, Orange, Brown
    size: ["10x8 inches", "12x10 inches"],
    gsm: [80, 100, 120],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Grocery Shopping", "Retail Stores"],
      priceRange: "$0.60 - $2.50 per piece",
    },
  },
  {
    id: 4,
    title: "D-Cut Non-Woven Carry Bag",
    mainImage: "/product2.jpg",
    additionalImages: [
      "/images/non-woven-bag-4a.jpg",
      "/images/non-woven-bag-4b.jpg",
    ],
    description:
      "Convenient and lightweight D-cut bag ideal for stores and exhibitions.",
    colors: ["#FFD700", "#DC143C", "#008B8B"], // Gold, Crimson, Dark Cyan
    size: ["14x12 inches", "16x14 inches"],
    gsm: [70, 90, 110],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Retail Bags", "Gift Bags"],
      priceRange: "$0.40 - $1.80 per piece",
    },
  },
  {
    id: 5,
    title: "Zippered Non-Woven Bag",
    mainImage: "/product.jpg",
    additionalImages: [
      "/images/non-woven-bag-5a.jpg",
      "/images/non-woven-bag-5b.jpg",
    ],
    description:
      "Premium non-woven bag with zipper closure for secure storage and easy carrying.",
    colors: ["#FF4500", "#2E8B57", "#4682B4"], // Orange Red, Sea Green, Steel Blue
    size: ["16x14 inches", "18x16 inches"],
    gsm: [90, 110, 130],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Storage Bags", "Shopping Bags"],
      priceRange: "$1.00 - $4.00 per piece",
    },
  },
  {
    id: 6,
    title: "Loop Handle Non-Woven Bag",
    mainImage: "/product2.jpg",
    additionalImages: [
      "/images/non-woven-bag-6a.jpg",
      "/images/non-woven-bag-6b.jpg",
    ],
    description:
      "Sturdy loop handle bag for convenient carrying of goods and groceries.",
    colors: ["#800080", "#FF69B4", "#20B2AA"], // Purple, Pink, Light Sea Green
    size: ["12x10 inches", "14x12 inches"],
    gsm: [80, 100, 120],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Retail Bags", "Gift Bags"],
      priceRange: "$0.70 - $2.20 per piece",
    },
  },
  {
    id: 7,
    title: "Large Capacity Non-Woven Bag",
    mainImage: "/product.jpg",
    additionalImages: [
      "/images/non-woven-bag-7a.jpg",
      "/images/non-woven-bag-7b.jpg",
    ],
    description:
      "Spacious and eco-friendly bag designed for carrying bulk items efficiently.",
    colors: ["#696969", "#8B0000", "#32CD32"], // Gray, Dark Red, Lime Green
    size: ["18x16 inches", "20x18 inches"],
    gsm: [100, 120, 140],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Shopping Bags", "Wholesale Bags"],
      priceRange: "$1.20 - $5.00 per piece",
    },
  },
  {
    id: 8,
    title: "Biodegradable Non-Woven Bag",
    mainImage: "/product2.jpg",
    additionalImages: [
      "/images/non-woven-bag-8a.jpg",
      "/images/non-woven-bag-8b.jpg",
    ],
    description:
      "Environmentally friendly biodegradable bag, reducing waste and promoting sustainability.",
    colors: ["#228B22", "#FFD700", "#FF4500"], // Forest Green, Gold, Orange Red
    size: ["14x12 inches", "16x14 inches"],
    gsm: [80, 100, 120],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Biodegradable Non-Woven Fabric",
      useFor: ["Eco Bags", "Sustainable Shopping"],
      priceRange: "$1.50 - $6.00 per piece",
    },
  },
];
