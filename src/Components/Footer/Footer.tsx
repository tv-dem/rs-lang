import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer__authors">
    <ul className="footer__git-links">
      <li><a href="https://github.com/kli2m">kli2m</a></li>
      <li><a href="https://github.com/sovanmarat">SovanMarat</a></li>
      </ul>
      <ul className="footer__git-links">
      <li><a href="https://github.com/tv-dem">tv-dem</a></li>
      <li><a href="https://github.com/funfordima">funfordima</a></li>
      </ul>
      </div>
      <div className="footer__rs-link"><a href="https://rs.school/js">
    <div className="footer__rs-link-img"/>
    </a></div>
      
    <div className="footer__year">Онлайн курс «Разработка на React» 2021</div>
    </div>
  );
};

export default Footer;
