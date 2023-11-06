import logo from "../assets/logo.png"
function Navbar(){
return(
<nav>
    <img src={logo} alt="" />
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/find">Find item</a></li>
        <li><a href="/post">Post item</a></li>
    </ul>
</nav>
)
}
export default Navbar;