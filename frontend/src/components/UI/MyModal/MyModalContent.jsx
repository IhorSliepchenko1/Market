import React from "react";
import cl from "./MyModal.module.scss";
import close from "../../../assets/Modal/icon-close-cross-button.png";
const MyModalContent = (props) => {
  return (
    <div>
      <div className={cl.close} onClick={() => props.setClose(false)}>
        <img src={close} />
      </div>
      <h3 className={cl.title}>Для зв'язку</h3>
      <div className={cl.button_container}>
        <button className={cl.button}>
          <a href="https://t.me/" target="_blank" className={cl.modal_content}>
            <span>Телеграм</span>
          </a>
        </button>
        <button className={cl.button}>
          <a href="tel:+11111" className={cl.modal_content}>
            <span>Зателефонувати</span>
          </a>
        </button>
      </div>
      <p className={cl.desc}>
        При замовленні від 2500 грн, безкоштовна доставка
      </p>
    </div>
  );
};

export default MyModalContent;
