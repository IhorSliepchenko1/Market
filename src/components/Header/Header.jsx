import { useState } from "react";
import Logo from "../../assets/HeaderImg/logo.jpg";
import MyModal from "../UI/MyModal/MyModal";
import MyModalContent from "../UI/MyModal/MyModalContent";

const Header = () => {
  // const [isMenuOpen, setMenuOpen] = useState(window.innerWidth <= 768);
  const [modal, setModal] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!isMenuOpen);
  // };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setMenuOpen(window.innerWidth <= 768);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <>
      <header className="header">
        <a href="" className="header__logo">
          <img className="header__logo-img" src={Logo} alt="Logo" />
        </a>
        <nav className="header__nav">
          {/* <span className="material-icons open" onClick={toggleMenu}>
            menu
          </span> */}
          <div className="slot-navbar">
            {/* <span className="material-icons close" onClick={toggleMenu}>
                  close
                </span> */}

            <ul className="header__ul">
              <li className="header__li">
                <a className="header__a" onClick={() => setModal(true)}>
                  Доставка та оплата
                </a>
              </li>

              <li className="header__li">
                <a href="" className="header__a">
                  Кошик
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <MyModal visible={modal} setVisible={setModal}>
        <MyModalContent setClose={setModal} />
      </MyModal>
    </>
  );
};

export default Header;
