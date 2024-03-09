import { useEffect } from "react";

import cl from "./ProductCard.module.scss";
import ButtonBasket from "./../button/ButtonBasket/ButtonBasket";
import minus from "./../../../assets/ProductImage/minus.svg";
import plus from "./../../../assets/ProductImage/plus.svg";

const ProductCard = ({
  name,
  min,
  retail,
  wholeSale,
  id,
  img,
  setSuccess,
  handleClick,
  count,
  decrement,
  increment,
  total,
  el,
  setTotal,
}) => {
  useEffect(() => {
    setTotal(el.retail * count);
    if (el.retail * count >= el.wholeSale * el.min) {
      setTotal(el.wholeSale * count);
    }
  }, [count]);
  return (
    <>
      <div className={cl.img_container} id={id}>
        <div className={cl.img_slot}>
          <img src={img} className={cl.img} />
        </div>
        <div className={cl.info}>
          <h4 className={cl.title}>{name}</h4>
          <p className={cl.desc}>
            Опт від <span className={cl.desc_num}>{min}</span> кг
          </p>
        </div>
        <div className={cl.price_slot}>
          <div className={cl.price_container}>
            <div className={`${cl.subtitle} ${cl.border}`}>
              <span>Роздріб:</span>
              <span className={cl.price}>{retail} грн.</span>
            </div>

            <div className={cl.subtitle}>
              <span>Опт:</span>
              <span className={cl.price}>{wholeSale} грн.</span>
            </div>
          </div>
        </div>
        <div className={cl.counter}>
          <div className={cl.button_slot}>
            <div className={cl.button_container}>
              <button
                className={cl.button}
                onClick={() => {
                  decrement();
                  console.log("minus");
                }}
              >
                <img src={minus} alt="minus" className={cl.img_math} />
              </button>
              <div className={cl.count}>{count}</div>
              <div>
                <button
                  className={cl.button}
                  onClick={() => {
                    increment();
                    console.log("plus");
                  }}
                >
                  <img src={plus} alt="plus" className={cl.img_math} />
                </button>
              </div>
            </div>

            <div className={cl.basket}>
              <ButtonBasket
                setSuccess={setSuccess}
                handleClick={handleClick}
                el={el}
                count={count}
                total={total}
              />
            </div>
          </div>
        </div>

        <div className={cl.total}>
          Сума: <span>{total} грн.</span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
