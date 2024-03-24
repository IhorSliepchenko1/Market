import React from "react";
import cl from "./ButtonOrder.module.scss";
const ButtonOrder = ({ makeOrder }) => {
  return (
    <button className={cl.order} onClick={makeOrder}>
      Замовити
    </button>
  );
};

export default ButtonOrder;
