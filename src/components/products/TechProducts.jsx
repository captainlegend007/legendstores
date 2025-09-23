import MessiJersey from "../../assets/Messi.jpg";
import Monitor from "../../assets/Monitor.jpg";
import Mouse from "../../assets/Mouse.jpg";
import MacBook from "../../assets/Macbook.jpeg";
import GamingChair from "../../assets/GamingChair.webp";
import FootballBoots from "../../assets/FootballBoots.jpg";
import Airpods from "../../assets/Airpods.jpg";
import Jacket from "../../assets/Jacket.png";
import Camera from "../../assets/Camera.jpg";
import BodyLotion from "../../assets/BodyLotion.webp";
import DogPills from "../../assets/DogPills.webp";
import Speaker from "../../assets/Speaker.webp";
import Perfume from "../../assets/perfume.jpg";
import SmartWatch from "../../assets/Smartwatch.jpg";
import PS5 from "../../assets/ps5pro.jpg";

export const Techproducts = [
  {
    id: 1,
    name: "Messi Jersey",
    price: "₦155,000",
    rating: 5,
    discount: "10%",
    src: MessiJersey,
    info: "An authentic soccer jersey celebrating the legendary Lionel Messi, crafted for style and performance on and off the field.",
  },
  {
    id: 2,
    name: "Gaming Chair",
    price: "₦260,000",
    rating: 4.5,
    discount: "10%",
    src: GamingChair,
    info: "An ergonomic chair designed for comfort during long gaming sessions, featuring adjustable lumbar support and high-density foam.",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: "₦230,000",
    rating: 4.5,
    discount: "10%",
    src: Monitor,
    info: "A high-refresh-rate monitor with vibrant IPS LCD technology for a smooth, color-accurate gaming and media experience.",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: "₦75,000",
    rating: 4.8,
    discount: "10%",
    src: Mouse,
    info: "A precision gaming mouse with customizable buttons and adjustable DPI settings, built for competitive play.",
  },
  {
    id: 5,
    name: "Macbook",
    price: "₦2,300,000",
    rating: 5,
    discount: "10%",
    src: MacBook,
    info: "A sleek and powerful laptop known for its long battery life, stunning Retina display, and robust performance for creative work.",
  },
  {
    id: 6,
    name: "Football Boots",
    price: "₦460,000",
    rating: 4.5,
    discount: "10%",
    src: FootballBoots,
    info: "High-performance football boots engineered for superior grip and ball control on the field, giving you an edge over the competition.",
  },
  {
    id: 7,
    name: "Airpods",
    price: "₦85,000",
    rating: 5,
    discount: "10%",
    src: Airpods,
    info: "True wireless earbuds offering seamless connectivity, high-quality audio, and a compact, portable charging case for on-the-go listening.",
  },
  {
    id: 8,
    name: "Jacket",
    price: "₦77,000",
    rating: 4.5,
    discount: "10%",
    src: Jacket,
    info: "A stylish, lightweight jacket perfect for all weather conditions, offering both comfort and a modern, versatile look.",
  },
  {
    id: 9,
    name: "Dog Pills",
    price: "₦23,000",
    rating: 4.0,
    discount: "10%",
    src: DogPills,
    info: "Essential nutritional supplements designed to support your dog's health, from joint care to a shiny coat, for a happier pet.",
  },
  {
    id: 10,
    name: "Speaker",
    price: "₦2,300,000",
    rating: 4.5,
    discount: "10%",
    src: Speaker,
    info: "A portable Bluetooth speaker that delivers rich, clear sound and powerful bass, perfect for music on the go.",
  },
  {
    id: 11,
    name: "Body Lotion",
    price: "₦40,000",
    rating: 4.0,
    discount: "10%",
    src: BodyLotion,
    info: "A deeply hydrating body lotion enriched with natural ingredients to nourish and moisturize the skin for a soft, smooth feel.",
  },
  {
    id: 12,
    name: "Perfume",
    price: "₦54,000",
    rating: 4.5,
    discount: "10%",
    src: Perfume,
    info: "A long-lasting fragrance with a unique blend of notes, designed to leave a memorable and elegant impression.",
  },
  {
    id: 13,
    name: "Smart Watch",
    price: "₦54,000",
    rating: 4.5,
    discount: "10%",
    src: SmartWatch,
    info: "A versatile smartwatch with comprehensive health-tracking features, message notifications, and a long-lasting battery.",
  },
  {
    id: 14,
    name: "Camera",
    price: "₦1,840,000",
    rating: 4.8,
    discount: "10%",
    src: Camera,
    info: "A professional-grade camera with advanced optics and intuitive controls, perfect for capturing stunning photos and videos with ease.",
  },
  {
    id: 15,
    name: "Ps5 Pro",
    price: "₦1,300,000",
    rating: 5,
    discount: "10%",
    src: PS5,
    info: "The next-generation gaming console from PlayStation, offering unparalleled graphics and immersive gameplay for a truly next-gen experience.",
  },
];

export const shuffledTechproducts = [...Techproducts].sort(() => Math.random() - 0.5);
export const shuffledTechproductsb = [...Techproducts].sort(() => Math.random() - 2);

export const shuffleArray = (array) => {
  // Create a shallow copy to avoid mutating the original array directly
  const shuffledArray = [...array];
  let currentIndex = shuffledArray.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[currentIndex],
    ];
  }

  return shuffledArray;
};

// export const ShuffledTechproducts = shuffleArray(Techproducts);
