import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Nav from "../components/Nav";
import PrivateRouter from "../pages/PrivateRouter";
import LoginProvider from "../context/LoginContext";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
      <LoginProvider>
      <Nav />
        <Routes>
          <Route path="/" element={<PrivateRouter/>}>
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
          </Route>
        </Routes>
      </LoginProvider>
        
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
