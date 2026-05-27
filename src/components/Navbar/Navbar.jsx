import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="bg-primary w-full border-b border-white/10">
      {/* Container wraps beautifully on laptops and scales centered on ultra-wide / 80% monitors */}
      <div className="mx-auto max-w-7xl xl:max-w-360 px-4 sm:px-8 lg:px-12 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo & Navigation Menu links */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center text-white w-full md:w-auto">
            <a href="#" className="shrink-0">
              <img src={Logo} alt="Logo" className="w-16 mx-auto sm:mx-0" />
            </a>
            <div className="w-full sm:w-auto">
              <ul className="flex flex-wrap justify-center sm:justify-start gap-4 md:gap-6 items-center">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">
                    Explore
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">
                    Release
                  </a>
                </li>
                <li className="relative w-full sm:w-64">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search games.."
                    className="bg-gray-700/50 px-4 py-2 rounded-2xl w-full text-sm outline-hidden focus:ring-2 focus:ring-blue-500"
                  />
                  <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-400" />
                </li>
              </ul>
            </div>
          </div>

          {/* Action buttons */}
          <div className="text-white shrink-0">
            <ul className="flex gap-4 items-center">
              <li>
                <a
                  href="#"
                  className="bg-gray-700 hover:bg-gray-600 transition-colors inline-block px-5 py-2.5 rounded-2xl font-semibold text-sm"
                >
                  Log In
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-linear-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all inline-block px-5 py-2.5 rounded-2xl font-semibold text-sm"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
