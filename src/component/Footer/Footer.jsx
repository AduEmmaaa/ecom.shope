import "./Footer.css";
import footer_logo from "../assets/logo_big.png";
import instagram_icon from "../assets/instagram_icon.png";
import pintestes_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer1">
      <div className="footer1-logo">
        <img src={footer_logo} alt="footer-logo" />
        <p>VeoDev</p>
      </div>
      <ul className="footer1-link">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icon-container">
          <img src={instagram_icon} alt="instagram photo" />
        </div>
        <div className="footer-icon-container">
          <img src={pintestes_icon} alt="instagram photo" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="instagram photo" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 -All Right Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
