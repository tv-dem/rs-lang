import React from "react";
import "./Footer.scss";


const Footer = () => {
  return (
    <div className="footer">
    <a href="https://youtu.be/a8zj_fokeD4"><div className="videoApp"></div></a>
    <div className="footer__authors">
    <div className="footer__git-links">
      <div><a href="https://github.com/kli2m">kli2m</a></div>
      <div><a href="https://github.com/sovanmarat">SovanMarat</a></div>
      </div>
      <div className="footer__git-links">
      <div><a href="https://github.com/tv-dem">tv-dem</a></div>
      <div><a href="https://github.com/funfordima">funfordima</a></div>
      </div>
      </div>
      <div className="footer__rs-link"><a href="https://rs.school/js">
    <div className="footer__rs-link-img"/>
    </a></div>
      
    <div className="footer__year">Онлайн курс «Разработка на React» 2021</div>
    </div>
  );
};

export default Footer;
