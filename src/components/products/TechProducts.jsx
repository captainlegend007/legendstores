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
    price: "$100",
    rating: 5,
    discount: "10%",
    src: MessiJersey,
  },
  {
    id: 2,
    name: "Gaming Chair",
    price: "$120",
    rating: 4,
    discount: "10%",
    src: GamingChair,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: "$150",
    rating: 3,
    discount: "10%",
    src: Monitor,
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: "$150",
    rating: 3,
    discount: "10%",
    src: Mouse,
  },
  {
    id: 5,
    name: "Macbook",
    price: "$1500",
    rating: 5,
    discount: "10%",
    src: MacBook,
  },
  {
    id: 6,
    name: "Football Boots",
    price: "$300",
    rating: 4.5,
    discount: "10%",
    src: FootballBoots,
  },
  { id: 7, name: "Airpods", price: "$40", rating: 5, discount: "10%", src: Airpods },
  {
    id: 8,
    name: "Jacket",
    price: "$50",
    rating: 5,
    discount: "10%",
    src: Jacket,
  },
  {
    id: 9,
    name: "Dog Pills",
    price: "$15",
    rating: 5,
    discount: "10%",
    src: DogPills,
  },
  {
    id: 10,
    name: "Speaker",
    price: "$1500",
    rating: 5,
    discount: "10%",
    src: Speaker,
  },
  {
    id: 11,
    name: "Body Lotion",
    price: "$1500",
    rating: 5,
    discount: "10%",
    src: BodyLotion,
  },
  {
    id: 12,
    name: "Perfume",
    price: "$35",
    rating: 5,
    discount: "10%",
    src: Perfume,
  },
  {
    id: 13,
    name: "Smart Watch",
    price: "$35",
    rating: 5,
    discount: "10%",
    src: SmartWatch,
  },
  {
    id: 14,
    name: "Camera",
    price: "$1200",
    rating: 4.3,
    discount: "10%",
    src: Camera,
  },
  {
    id: 15,
    name: "Ps5 Pro",
    price: "$1200",
    rating: 4.3,
    discount: "10%",
    src: PS5,
  },
];

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
