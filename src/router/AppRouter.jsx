import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Products from "../pages/Products"
import Nav from "../components/Nav"

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter
