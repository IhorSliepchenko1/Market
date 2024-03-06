import React from "react";
import ButtonBasket from "./../button/ButtonBasket/ButtonBasket";
import cl from "./../../UI/ProductCard/ProductCard.module.scss";
import minus from "./../../../assets/ProductImage/minus.svg";
import plus from "./../../../assets/ProductImage/plus.svg";
const Counter = ({
  decrement,
  count,
  increment,
  setSuccess,
  handleClick,
  el,
  total,
}) => {
  return (
    <>
      <div className={cl.counter}>
        <div className={cl.button_slot}>
          <div className={cl.button_container}>
            <button className={cl.button} onClick={decrement}>
              <img src={minus} alt="minus" className={cl.img_math} />
            </button>
            <div className={cl.count}>{count}</div>
            <div>
              <button className={cl.button} onClick={increment}>
                <img src={plus} alt="plus" className={cl.img_math} />
              </button>
            </div>
          </div>

          <div className={cl.basket}>
            <ButtonBasket
              setSuccess={setSuccess}
              handleClick={handleClick}
              el={el}
              total={total}
            />
          </div>
        </div>
      </div>

      <div className={cl.total}>
        Сума: <span>{total} грн.</span>
      </div>
    </>
  );
};

export default Counter;
