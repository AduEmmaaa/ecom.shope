import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar.jsx/Navbar";
import Shope from "./Pages/Shope";
import ShopeCategory from "./Pages/ShopeCategory.jsx";
import Products from "./Pages/Products.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import Footer from "./component/Footer/Footer.jsx";
////baners
import men_banner from "./component/assets/banner_mens.png";
import women_banner from "./component/assets/banner_women.png";
import kid_banner from "./component/assets/banner_kids.png";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/ecom.shope" element={<Shope />} />
          <Route
            path="/ecom.shope/mens"
            element={<ShopeCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/ecom.shope/womens"
            element={<ShopeCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/ecom.shope/kids"
            element={<ShopeCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/ecom.shope/product" element={<Products />}>
            <Route path=":productid" element={<Products />} />
          </Route>
          <Route path="/ecom.shope/cart" element={<Cart />} />
          <Route path="/ecom.shope/Login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
