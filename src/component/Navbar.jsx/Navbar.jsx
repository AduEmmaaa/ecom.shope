import "./Navbar.css";
import logo from "../assets/logo.png";
import cart from "../assets/cart_icon.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [hr, sethr] = useState("Shop");
  const {totalIteminCart} =useContext(ShopContext)
  return (
    <>
      <div className="navbar justify-around align-center">
        <div className="logo">
          <img src={logo} alt="logo" />
          <p>VeoDev</p>
        </div>
        <ul className="navmenu gap-9 cursor-pointer">
          <li
            onClick={() => {
              sethr("Shop");
            }}
          >
            <Link to="/ecom.shope">Shop</Link> {hr === "Shop" ? <hr /> : <></>}{" "}
          </li>
          <li
            onClick={() => {
              sethr("mens");
            }}
          >
            <Link to="/ecom.shope/mens">Men</Link>{" "}
            {hr === "mens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              sethr("womens");
            }}
          >
            <Link to="/ecom.shope/womens">Women</Link>{" "}
            {hr === "womens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              sethr("kids");
            }}
          >
            <Link to="/ecom.shope/kids">Kids</Link>{" "}
            {hr === "kids" ? <hr /> : <></>}{" "}
          </li>
        </ul>
        <div>
          <button className="btn1">
            <Link to="/ecom.shope/Login">Login</Link>
          </button>
          <Link to="/ecom.shope/Cart">
            <img src={cart} alt="cart" />
          </Link>
          <div className="cartnum">{totalIteminCart()}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
