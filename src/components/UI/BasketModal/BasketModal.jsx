import cl from "./BasketModal.module.scss";
import cross from "./../../../assets/Modal/icon-close-cross-button.png";

const BasketModal = ({ children, visibleBasket, setVisibleBasket }) => {
  const rootClasses = [cl.myModal];
  if (visibleBasket) {
    rootClasses.push(cl.active);
  }
  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => setVisibleBasket(false)}
    >
      <div className={cl.close}>
        <img src={cross} />
      </div>

      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default BasketModal;
