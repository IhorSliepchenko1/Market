import React from "react";
import cl from "./BasketModal.module.scss";
const BasketModalContent = ({ name, image, count, total, id, deleteItem }) => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.info}>
        <div className={cl.name_slot}>
          <div className={cl.id}>{id + 1}</div>
          <div>
            <div className={cl.image_slot}>
              <img src={image} alt={name} className={cl.image} />
            </div>

            <h4 className={cl.title}>{name}</h4>
          </div>
        </div>

        <div className={cl.money_info}>
          <div className={cl.money_container}>
            <div className={cl.count}>
              <span className={cl.span_name}> К-сть:</span>
              <span className={cl.span_value}>{count} кг.</span>
            </div>

            <div className={cl.total}>
              <span className={cl.span_name}> Сума:</span>
              <span className={cl.span_value}>{total} грн.</span>
            </div>
          </div>

          <span className={cl.remove} onClick={() => deleteItem(id)}>
            X
          </span>
        </div>
      </div>
    </div>
  );
};

export default BasketModalContent;
