import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom'
import logo from "./logo.png"
import Homescreen from "./screens/Homescreen";
import Productscreen from "./screens/Productscreen";

export default function App() {

  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to="/"><img className="headerLogo" src={logo} alt={logo}/></Link>
      </header>
        <main>
          <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="/product:slug" element={<Productscreen />} /> 
          </Routes>
      </main>
      </div>
      </BrowserRouter>
  )
}


