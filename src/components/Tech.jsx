import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Suspense, useEffect, useState } from 'react';
import { img } from "framer-motion/client";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 500px)');
      setIsMobile(mediaQuery.matches);
  
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      }
  
      mediaQuery.addEventListener('change', handleMediaQueryChange);
  
      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange)
      }
    }, [])

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {!isMobile && <BallCanvas icon={technology.icon} />}
          {isMobile && <img src={technology.icon} />}
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '')