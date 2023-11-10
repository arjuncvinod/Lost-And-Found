import Particles from "react-tsparticles";
import { useCallback } from "react";
import particleconfig from "./config/particleconfig";
import { loadFull } from "tsparticles";
export default function Particle() {
 const particlesInit = useCallback(async (engine) => {
   console.log(engine);
   await loadFull(engine);
 }, []);

 const particlesLoaded = useCallback(async (container) => {
   await console.log(container);
 }, []);

  return (
    <Particles
      options={particleconfig}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
}
