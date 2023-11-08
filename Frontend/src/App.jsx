import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Find from "./pages/Find"
import Post from "./pages/Post";
import Details from "./pages/Details";
import "./App.css"

function App() {
   return (
    <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='/find' element={<Find />}  />
      <Route path='/post' element={<Post />}  />
      <Route path='/find/details/:id' element={<Details />}  />
    </Routes>
      )
}

export default App;
