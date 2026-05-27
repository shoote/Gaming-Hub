import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import RecommendedArticles from "./components/RecommendedArticles/RecommendedArticles";
import TrendingGames from "./components/TrendingGames/TrendingGames";
import WhatsNew from "./components/WhatsNew/WhatsNew";

const App = () => {
  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <TrendingGames />
      <RecommendedArticles />
      <WhatsNew />
      <Footer/>
    </div>
  );
};

export default App;
