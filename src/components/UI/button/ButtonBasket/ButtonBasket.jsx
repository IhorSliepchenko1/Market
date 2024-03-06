import React from "react";
import cl from "./ButtonBasket.module.scss";
import basket from "./../../../../assets/ProductImage/basket.svg";
const ButtonBasket = ({ setSuccess, handleClick, el, total, count }) => {
  return (
    <button
      className={cl.button}
      onClick={() => {
        setSuccess(true);
        handleClick(el, total, count);
      }}
    >
      <span>Купити</span>
      <img src={basket} />
    </button>
  );
};

export default ButtonBasket;
