import React from "react";

const CountBasket = ({ basketCount }) => {
  return (
    <span
      className="basketCount"
      onClick={() =>
        setTimeout(() => {
          return location.reload();
        }, 500)
      }
    >
      {basketCount}
    </span>
  );
};

export default CountBasket;
