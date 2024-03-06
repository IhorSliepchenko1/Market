import Call from "./../../assets/FooterImg/call.png";
import Telegramm from "./../../assets/FooterImg/telegramm.png";
import MapIframe from "../UI/iframe/MapIframe";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <ul className="footer__contacts">
          <li className="footer__li">
            <a href="tel:+11111" className="footer__a">
              <img src={Call} />
              <span>Зателефонувати</span>
            </a>
          </li>
          <li className="footer__li">
            <a href="https://t.me/" target="_blank" className="footer__a">
              <img src={Telegramm} />
              <span>Телеграм</span>
            </a>
          </li>
        </ul>

        <ul className="footer__adress">
          <li className="footer__li">
            <a
              className="footer__a"
              href="https://maps.app.goo.gl/RUbHY17G5HUMyXFP8"
              target="_blank"
            >
              Адреса: Чоботарська 21 <br />
              (термінал Центральний Ринок)
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <MapIframe />
      <hr />
      <div className="footer__copyright">
        Copyright © <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
