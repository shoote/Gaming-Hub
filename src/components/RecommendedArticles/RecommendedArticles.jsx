import CharacterPng from "../../assets/characters/character2.png";
import Game1 from "../../assets/game/RA 1.1.jpg";
import Game2 from "../../assets/game/RA 2.1.jpg";
import Game3 from "../../assets/game/RA 3.1.jpg";
import Game4 from "../../assets/game/RA 1.2.jpg";
import Game5 from "../../assets/game/RA 2.2.jpg";
import Game6 from "../../assets/game/RA 3.2.jpg";

const RecommendedArticles = () => {
  return (
    <>
      <section className="py-10 bg-primary text-white w-full relative overflow-x-hidden">
        <div className="container relative mx-auto px-4">
          
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Recommended Articles</h1>
            <button className="bg-gray-400/50 text-white rounded-xl px-4 py-2 hover:bg-gray-400/70 transition-colors cursor-pointer">
              View All
            </button>
          </div>

          {/* Recommended Articles Card Section */}
          {/* 
            EXPANDED SYMMETRICALLY:
            - Increased max-width to `lg:max-w-[85%] xl:max-w-[88%]` to enlarge all boxes.
            - This beautifully fills the empty gap on the right side.
          */}
          <div className="relative z-10 max-w-full lg:max-w-[85%] xl:max-w-[88%] transition-all duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 h-auto sm:h-125">
              
              {/* Left Big Card */}
              <div className="sm:col-span-2 rounded-xl relative overflow-hidden h-75 sm:h-full group">
                <img 
                  src={Game1} 
                  alt="Game 1 Cover" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40">
                  <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-primary via-primary/80 to-transparent p-6">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <img
                        src={Game4}
                        alt="Game Thumbnail"
                        className="h-24 w-20 object-cover rounded-xl shadow-md shrink-0"
                      />
                      <div className="text-center sm:text-left">
                        <h2 className="font-bold text-lg sm:text-xl line-clamp-2">
                         MINECRAFT
                        </h2>
                        <p className="text-xs text-white/70 mt-1 hidden sm:line-clamp-2">
                          Brings in evergreen search traffic. People constantly search for base designs, seeds, and mod packs regardless of how old the game is.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Cards Wrapper */}
              <div className="flex flex-col gap-4 h-100 sm:h-full">
                
                {/* Right Top Card */}
                <div className="flex-1 rounded-xl relative overflow-hidden group">
                  <img 
                    src={Game2} 
                    alt="Game 2 Cover" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40">
                    <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-primary via-primary/80 to-transparent p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={Game5}
                          alt="Thumbnail"
                          className="h-14 w-12 object-cover rounded-lg shadow-md shrink-0"
                        />
                        <div>
                          <h2 className="font-semibold text-sm sm:text-base line-clamp-2">
                            VALORANT
                          </h2>
                          <p className="text-xs text-white/70 mt-0.5 hidden sm:line-clamp-2">
                            Brings in highly loyal, competitive tactical shooter players who look for agent tier lists and esports tournament coverage.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Bottom Card */}
                <div className="flex-1 rounded-xl relative overflow-hidden group">
                  <img 
                    src={Game3} 
                    alt="Game 3 Cover" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40">
                    <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-primary via-primary/80 to-transparent p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={Game6}
                          alt="Thumbnail"
                          className="h-14 w-12 object-cover rounded-lg shadow-md shrink-0"
                        />
                        <div>
                          <h2 className="font-semibold text-sm sm:text-base line-clamp-2">
                            FORTNITE
                          </h2>
                          <p className="text-xs text-white/70 mt-0.5 hidden sm:line-clamp-2">
                             Brings in fast-paced news traffic. Because the game changes every few weeks with seasonal updates, crossovers, and events, it keeps users coming back for patch notes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* 
            PERFECTLY FLUSH CHARACTER POSITION:
            - Shifted further right using increased negative values.
          */}
          <img
            src={CharacterPng}
            alt="Character art decoration"
            className="absolute right-[-10%] lg:right-[-8%] xl:right-[-6%] bottom-20 z-0 h-80 hidden lg:block pointer-events-none object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default RecommendedArticles;
