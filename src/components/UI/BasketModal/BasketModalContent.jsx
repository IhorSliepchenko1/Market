import React from "react";
import cl from "./BasketModal.module.scss";
const BasketModalContent = ({ name, image, count, total }) => {
  return (
    <div>

      <div className={cl.info}>
        <div className={cl.name_slot}>
          <div className={cl.image_slot}>
            <img src={image} alt={name} className={cl.image} />
          </div>

          <h4 className={cl.title}>{name}</h4>
        </div>

        <div className={cl.money_info}>
          <div className={cl.money_container}>
            <div className={cl.count}>
              <span style={{ fontWeight: "bold" }}> Кількість:</span>
              <span>{count} кг.</span>
            </div>
            <div className={cl.total}>
              <span style={{ fontWeight: "bold" }}> Вартість:</span>
              <span>{total} грн.</span>
            </div>
          </div>
          <button className={cl.remove}></button>
        </div>
      </div>
    </div>
  );
};

export default BasketModalContent;
