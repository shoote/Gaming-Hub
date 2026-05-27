import { FaFire } from "react-icons/fa6";
import CharacterPng1 from "../../assets/characters/character 1.png";

import Game1 from "../../assets/game/TG1.jpg";
import Game2 from "../../assets/game/TG2.jpg";
import Game3 from "../../assets/game/TG3.jpg";
import Game4 from "../../assets/game/TG4.png";
import Game5 from "../../assets/game/TG5.jpg";
import Game6 from "../../assets/game/TG6.jpg";

const GameCardData = [
  {
    id: 1,
    title: "CALL OF DUTY : BLACK OPS 7",
    image: Game1,
    followers: "4.5M",
  },
  {
    id: 2,
    title: "GOD OF WAR : RAGNAROK",
    image: Game2,
    followers: "3.1M",
  },
  {
    id: 3,
    title: "TEKKEN 8",
    image: Game3,
    followers: "1.8M",
  },
  {
    id: 4,
    title: "RESIDENT EVIL : REQUIEM",
    image: Game4,
    followers: "1.2M",
  },
  {
    id: 5,
    title: "CRICKET 26",
    image: Game5,
    followers: "685K",
  },
  {
    id: 6,
    title: "INVINCIBLE VS",
    image: Game6,
    followers: "320K",
  },
];

const TrendingGames = () => {
  return (
    <>
      <section className="py-10 bg-primary text-white relative w-full overflow-x-hidden">
        <div className="container relative mx-auto px-4">
          
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">
              Currently Trending Games
            </h1>

            <button className="bg-gray-400/50 text-white rounded-xl px-4 py-2 hover:bg-gray-400/70 transition-colors cursor-pointer">
              View All
            </button>
          </div>

          {/* Trending Games Card Section */}
          <div className="relative z-10 max-w-full md:max-w-[85%] lg:max-w-[88%] ml-auto mr-0 transition-all duration-300">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-8 xl:px-4">
              
              {/* Game Card */}
              {GameCardData.map((item) => {
                return (
                  <div className="flex flex-col w-full" key={item.id}>
                    
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-3/4 object-cover rounded-xl bg-gray-700 shadow-md"
                    />

                    <div className="text-center mt-2">
                      <p className="font-semibold text-sm line-clamp-1">
                        {item.title}
                      </p>

                      <p className="flex items-center justify-center gap-1 text-xs text-white/80 mt-0.5">
                        <FaFire className="text-orange-500" />

                        <span>{item.followers}</span>

                        <span>followers</span>
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Character Image - Shifted further left */}
          <img
            src={CharacterPng1}
            alt="Trending section character decoration"
              className="absolute left-[1%] xl:left-[3%] top-16 z-20 h-85 hidden lg:block pointer-events-none object-contain"

          />
        </div>
      </section>
    </>
  );
};

export default TrendingGames;
