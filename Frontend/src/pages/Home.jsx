import Navbar from "../components/Navbar"
import About from "../components/About";
import ParticlesBackground from "../components/Particle";
function Home(){
    return (
      <main>
        <Navbar />
        <div className="particle-container">
        <ParticlesBackground />
        </div>
        <div className="hero">
          <h1>Lost and Found</h1>
          <a href="/find">
            <button>Find item</button>
          </a>
        </div>
        <About />
      </main>
    );
} 
export default Home; 