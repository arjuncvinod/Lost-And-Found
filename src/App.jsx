import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Find from "./pages/Find"
import Post from "./pages/Post";
import "./App.css"

function App() {
   return (
    <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='/find' element={<Find />}  />
      <Route path='/post' element={<Post />}  />
    </Routes>
      )
}

export default App;
