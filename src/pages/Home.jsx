import Navbar from "../components/Navbar"
function Home(){
    return (
    <main>
        <Navbar />
        <div className="hero">
            <h1>Lost and Found</h1>
            <a href="/find"><button>Find item</button></a>
        </div>
    </main>
    )
} 
export default Home; 