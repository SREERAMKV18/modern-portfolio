import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";
import { FaSatellite } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { RiPhoneLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-4 sm:px-8 md:px-12 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 py-6">
          
          {/* LOGO SECTION */}
          <Link href="/" className="group flex flex-col items-center lg:items-start">
            <h1 className="text-2xl md:text-3xl font-bold leading-tight text-center lg:text-left">
              Sreeram K V
            </h1>
            
            <div className="flex items-center justify-center lg:justify-start gap-x-2 mt-1">
              <p className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-white/90 group-hover:text-accent transition-colors">
                Remote Sensing And GIS
              </p>
            </div>
          </Link>

          {/* SOCIALS & CV - COMPACT ROW LAYOUT */}
          <div className="flex flex-row items-center gap-x-4 mt-2 lg:mt-0">
            {/* Social Icons */}
            <Socials />
            
            {/* Phone with icon */}
            <a href="tel:+918281669236" className="hidden sm:flex items-center gap-x-1 text-sm font-medium text-white/90 hover:text-accent transition-colors">
              <RiPhoneLine className="text-lg" />
              <span>+91-8281669236</span>
            </a>
            
            {/* Download CV Button (Made Smaller/Compact for Mobile) */}
            <Link 
              href="/resume.pdf" 
              target="_blank" 
              className="text-[10px] md:text-xs font-bold tracking-wider text-accent hover:text-white transition-all duration-300 border border-accent hover:bg-accent hover:text-primary px-3 py-1.5 rounded-full"
            >
              Download CV
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
