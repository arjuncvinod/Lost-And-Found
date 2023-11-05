import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Find from "./pages/Find"
import "./App.css"

function App() {
   return (
    <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='/find' element={<Find />}  />
    </Routes>
      )
}

export default App;
