import { useEffect, useState } from "react";
import Logo from "../../assets/HeaderImg/logo.jpg";
import MyModal from "../UI/MyModal/MyModal";
import MyModalContent from "../UI/MyModal/MyModalContent";
import BasketModal from "../UI/BasketModal/BasketModal";
import BasketModalContent from "../UI/BasketModal/BasketModalContent";
import CountBasket from "../UI/CountBasket/CountBasket";

const Header = ({
  basketCount,
  local,
  deleteBasketEl,
  arr,
  onClick,
  makeOrder,
}) => {
  const [modal, setModal] = useState(false);
  const [modalBasket, setModalBasket] = useState(false);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const arrSum = [];
    local.forEach((el) => {
      arrSum.push(el.total);
    });
    setSum(arrSum.reduce((a, b) => a + b, 0));
  }, [local]);

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

              <li
                className="header__li slot-basket"
                onClick={() => {
                  setModalBasket(true);
                  document.body.classList.add("no-scroll");
                }}
              >
                <span className="material-icons shop">shopping_cart</span>
                <CountBasket basketCount={basketCount} />
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
        local={arr}
        sum={sum}
        onClick={onClick}
        makeOrder={makeOrder}
        arr={arr}
      >
        {arr && arr.length > 0 ? (
          arr.map((product, index) => (
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
          <p className="empty-basket">Ваш кошик порожній</p>
        )}
      </BasketModal>
    </>
  );
};

export default Header;
