import React from "react";
import cl from "./ButtonClearBasket.module.scss";
const ButtonClearBasket = ({ onClick }) => {
  return (
    <button className={cl.clear_basket} onClick={onClick}>
      Очистити
    </button>
  );
};

export default ButtonClearBasket;
