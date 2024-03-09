import { useEffect, useState } from "react";
import Logo from "../../assets/HeaderImg/logo.jpg";
import MyModal from "../UI/MyModal/MyModal";
import MyModalContent from "../UI/MyModal/MyModalContent";
import BasketModal from "../UI/BasketModal/BasketModal";
import BasketModalContent from "../UI/BasketModal/BasketModalContent";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [modalBasket, setModalBasket] = useState(false);
  const [local, setLocal] = useState([]);
  const [sum, setSum] = useState(0);
  const [basketCount, setBasketCount] = useState(0);
  const storedData = localStorage.getItem("cart");

  const deleteBasketEl = (index) => {
    const updatedCart = [...local];
    updatedCart.splice(index, 1);
    setLocal(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  useEffect(() => {
    if (storedData) {
      setLocal(JSON.parse(storedData));
    }
  }, [storedData]);

  useEffect(() => {
    const arrSum = [];
    local.forEach((el) => {
      arrSum.push(el.total);
    });
    setSum(arrSum.reduce((a, b) => a + b, 0));
  }, [local]);

  useEffect(() => {
    setBasketCount(local.length);
  }, [storedData]);
  return (
    <>
      <header className="header">
        <a href="" className="header__logo">
          <img className="header__logo-img" src={Logo} alt="Logo" />
        </a>
        <nav className="header__nav">
          <div className="slot-navbar">
            <ul className="header__ul">
              <li className="header__li">
                <a className="header__a" onClick={() => setModal(true)}>
                  Доставка та оплата
                </a>
              </li>

              <li className="header__li" onClick={() => setModalBasket(true)}>
                <span className="material-icons shop">shopping_cart</span>
                <span className="basketCount">{basketCount}</span>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <MyModal visible={modal} setVisible={setModal}>
        <MyModalContent setClose={setModal} />
      </MyModal>

      <BasketModal
        visibleBasket={modalBasket}
        setVisibleBasket={setModalBasket}
        local={local}
        sum={sum}
      >
        {local && local.length > 0 ? (
          local.map((product, index) => (
            <BasketModalContent
              id={index}
              key={index}
              image={product.el.img}
              name={product.el.name}
              count={product.count}
              total={product.total}
              deleteItem={deleteBasketEl}
            />
          ))
        ) : (
          <p style={{ fontSize: 20, textAlign: "center" }}>
            Ваш кошик порожній
          </p>
        )}
      </BasketModal>
    </>
  );
};

export default Header;
