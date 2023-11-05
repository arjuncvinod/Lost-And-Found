import Navbar from "../components/Navbar"
function Home(){
    return (
    <main>
        <Navbar />
        <div className="hero">
            <h1>Lost and Found</h1>
            <button>Find item</button>
        </div>
    </main>
    )
} 
export default Home;