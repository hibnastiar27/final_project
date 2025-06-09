import { useEffect, useState } from "react";
import { LogoDestinara } from "../assets";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white flex items-center justify-center p-4 transition-shadow ${
        scrolled ? "bg-white/50 backdrop-blur-3xl" : ""
      }`}
    >
      <img src={LogoDestinara} alt="logo-destinara" className="h-8 md:h-10" />
    </nav>
  );
};
