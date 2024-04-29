import "./Navbar.css";
import logo from "../assets/logo.png";
import cart from "../assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hr, sethr] = useState("Shop");
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
            {" "}
            <Link to="/">Shop</Link> {hr === "Shop" ? <hr /> : <></>}{" "}
          </li>
          <li
            onClick={() => {
              sethr("mens");
            }}
          >
            <Link to="/mens">Men</Link> {hr === "mens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              sethr("womens");
            }}
          >
            <Link to="womens">Women</Link> {hr === "womens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              sethr("kids");
            }}
          >
            <Link to="/kids">Kids</Link> {hr === "kids" ? <hr /> : <></>}{" "}
          </li>
        </ul>
        <div>
          <button className="btn1">
            <Link to="/Login">Login</Link>
          </button>
          <Link to="/Cart">
            <img src={cart} alt="cart" />
          </Link>
          <div className="cartnum">0</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
