import { IoLogoAndroid, IoLogoApple, IoLogoBuffer, IoLogoDribbble } from "react-icons/io";
import { FaHeartbeat, FaWindows, FaApple } from "react-icons/fa"; 
import Game1 from "../../assets/game/WN 1.jpg";
import Game2 from "../../assets/game/WN 2.jpg";
import Game3 from "../../assets/game/WN 3.jpg";
import Game4 from "../../assets/game/WN 4.jpg";
import WhatsNewCard from "./WhatsNewCard";

// Local image asset for PS5
import Ps5Img from "../../assets/game/ps5-icon.png"; 

// Custom Image component sized and color-inverted to white
const Ps5Icon = () => (
  <img 
    src={Ps5Img} 
    alt="PS5" 
    className="h-5 w-5 object-contain inline-block align-middle brightness-0 invert"
  />
);

const WhatsNewData = [
  {
    image: Game1,
    title: "PRAGMATA",
    description: "Visitors lock onto a massive cinematic moon-surface banner tracking Capcom's spectacular, critically acclaimed launch and unraveling its mind-bending lore secrets.",
    platforms: [
      { name: "PC", icon: <FaWindows /> },
      { name: "Mac", icon: <FaApple /> },
      { name: "PS5", icon: <Ps5Icon /> }
    ]
  },
  {
    image: Game2,
    title: "FORZA HORIZON 6",
    description: "Fans instantly spot neon-drenched Tokyo streets, clicking to uncover competitive car tier lists, hidden map secrets, and day-one PC optimization fixes.",
    platforms: [
      { name: "PC", icon: <FaWindows /> },
      { name: "Mac", icon: <FaApple /> },
      { name: "PS5", icon: <Ps5Icon /> }
    ]
  },
  {
    image: Game3,
    title: "ASSASSIN'S CREED - SHADOWS",
    description: "Action-RPG enthusiasts flock to a dual shinobi-samurai layout for exclusive gameplay breakdowns, build predictions, and next-gen console updates.",
    platforms: [
      { name: "PC", icon: <FaWindows /> },
      { name: "Mac", icon: <FaApple /> },
      { name: "PS5", icon: <Ps5Icon /> }
    ]
  },
  {
    image: Game4,
    title: "SABNAUTICA 2",
    description: "Survival gamers gravitate toward a glowing alien abyss card to grab instant early-access biome maps and critical deep-sea crafting blueprints.",
    platforms: [
      { name: "PC", icon: <FaWindows /> },
      { name: "Mac", icon: <FaApple /> },
      { name: "PS5", icon: <Ps5Icon /> }
    ]
  },
];

const WhatsNew = () => {
  return (
    <section className="py-10 bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">What's New</h1>
          <div className="flex gap-4 items-center">
            <div className="flex gap-4 items-center">
              <IoLogoAndroid className="text-xl cursor-pointer hover:text-green-500 transition-colors" />
              <IoLogoApple className="text-xl cursor-pointer hover:text-gray-400 transition-colors" />
              <IoLogoBuffer className="text-xl cursor-pointer hover:text-blue-400 transition-colors" />
              <IoLogoDribbble className="text-xl cursor-pointer hover:text-pink-500 transition-colors" />
            </div>
            <button className="bg-gray-400/50 text-white rounded-xl px-4 py-2 hover:bg-gray-400/70 transition-colors">
              Explore
            </button>
          </div>
        </div>

        {/* Main Grid: 4 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 my-8 items-start">
          
          {/* Left Column Stack */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {WhatsNewData.map((data, index) => (
              <WhatsNewCard key={index} {...data} />
            ))}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            <div className="bg-gray-400/10 rounded-xl p-4 space-y-3 sticky top-4">
              <FaHeartbeat className="bg-orange-400/30 text-orange-400 p-2 rounded-lg inline-block h-10 w-10" />
              <h1 className="text-2xl font-semibold">Subscribe to Our NewsLetter</h1>
              <p className="text-sm text-white/70 line-clamp-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="bg-gray-400/20 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <button className="bg-linear-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-xl px-4 py-2 w-full hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
