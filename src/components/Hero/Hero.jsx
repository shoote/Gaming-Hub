import CoverImg from "../../assets/hero/game.jpg";
import HeroPng from "../../assets/hero/game2.png";

const bgImage = {
  backgroundImage: `url(${CoverImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%", 
};

const Hero = () => {
  return (
    <div style={bgImage} className="min-h-137.5 w-full overflow-hidden">
      <div className="bg-primary/80 bg-linear-to-t from-primary from-10% to-transparent to-90% flex items-center min-h-137.5 py-12 md:py-0">
        {/* Exact same responsive constraints applied to balance layout hierarchy */}
        <div className="mx-auto max-w-7xl xl:max-w-360 px-4 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Content section */}
            <div className="text-left order-2 md:order-1">
              <p className="text-lg text-blue-500 font-semibold tracking-wide">
                Discover Games You will Love
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
                Read About Games That You Enjoy
              </h1>
              <button className="mt-8 bg-linear-to-r from-blue-500 to-blue-800 hover:from-blue-600 hover:to-blue-900 transition-all inline-block px-8 py-3.5 rounded-2xl font-semibold text-white shadow-lg cursor-pointer">
                Start Exploring
              </button>
            </div>
            {/* Image section */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img 
                src={HeroPng} 
                alt="Hero banner graphic" 
                className="max-w-[80%] md:max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
