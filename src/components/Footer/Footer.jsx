
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Copyright Text */}
          <p className="text-sm text-white/70 order-2 sm:order-1">
            © {new Date().getFullYear()} GamingHub. All rights reserved.
          </p>

          {/* Navigation Links */}
          <div className="flex gap-6 text-sm text-white/80 order-1 sm:order-2">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 order-3">
            <FaFacebook className="text-xl cursor-pointer hover:text-blue-500 transition-colors" />
            <FaTwitter className="text-xl cursor-pointer hover:text-sky-400 transition-colors" />
            <FaInstagram className="text-xl cursor-pointer hover:text-pink-500 transition-colors" />
            <FaLinkedin className="text-xl cursor-pointer hover:text-blue-400 transition-colors" />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
