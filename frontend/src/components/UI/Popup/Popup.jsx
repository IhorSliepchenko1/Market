import { useEffect } from "react";

import cl from "./Popup.module.scss";
import closeCross from "./../../../assets/Popup/close-cross.svg";
import img from "./../../../assets/Popup/success.svg";
const Popup = ({ onClick }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClick();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [onClick]);

  return (
    <div className={cl.container}>
      <div className={cl.slot}>
        <div className={cl.exclamation}>
          <img src={img} />
        </div>

        <div className={cl.content}>
          <p className={cl.desc}>Товар додано до кошика</p>
        </div>

        <button className={cl.btn} onClick={onClick}>
          <img src={closeCross} />
        </button>
      </div>
    </div>
  );
};

export default Popup;
